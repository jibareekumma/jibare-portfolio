

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore"

import { db } from "../firebase"

import "./../css/Reviews.css"

const DAY = 86400000

const timeUnits = [
    { label: "year", ms: 365 * DAY },
    { label: "month", ms: 30 * DAY },
    { label: "week", ms: 7 * DAY },
    { label: "day", ms: DAY },
    { label: "hour", ms: 3600000 },
    { label: "minute", ms: 60000 }
]

const timeAgo = function(timestamp){
    const diff = Date.now() - timestamp
    for(const unit of timeUnits){
        const count = Math.floor(diff / unit.ms)
        if(count >= 1){
            return `${count} ${unit.label}${count > 1 ? "s" : ""} ago`
        }
    }
    return "Just now"
}

const getInitials = function(name){
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(function(part){ return part.charAt(0) })
        .join("")
        .toUpperCase()
}

const resizeImage = function(file){
    return new Promise(function(resolve, reject){
        const url = URL.createObjectURL(file)
        const image = new Image()
        image.onload = function(){
            const size = 160
            const canvas = document.createElement("canvas")
            canvas.width = size
            canvas.height = size
            const context = canvas.getContext("2d")
            const side = Math.min(image.width, image.height)
            const sx = (image.width - side) / 2
            const sy = (image.height - side) / 2
            context.fillStyle = "#ffffff"
            context.fillRect(0, 0, size, size)
            context.drawImage(image, sx, sy, side, side, 0, 0, size, size)
            URL.revokeObjectURL(url)
            resolve(canvas.toDataURL("image/jpeg", 0.8))
        }
        image.onerror = function(){
            URL.revokeObjectURL(url)
            reject(new Error("Invalid image"))
        }
        image.src = url
    })
}

const StarIcon = function(){
    return <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.8l2.85 5.95 6.5.85-4.75 4.5 1.2 6.45L12 17.3l-5.8 3.25 1.2-6.45L2.65 9.6l6.5-.85z"/>
    </svg>
}

const ImageIcon = function(){
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/>
        <circle cx="9" cy="10" r="1.6"/>
        <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5"/>
    </svg>
}

const ArrowIcon = function(){
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14"/>
        <path d="m13 6 6 6-6 6"/>
    </svg>
}

const CloseIcon = function(){
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18"/>
    </svg>
}

const StarRating = function({ rating }){
    return <div className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map(function(index){
            const fill = Math.max(0, Math.min(1, rating - index)) * 100
            return <span className="star" key={index}>
                <StarIcon/>
                <span className="star-fill" style={{ width: `${fill}%` }}>
                    <StarIcon/>
                </span>
            </span>
        })}
    </div>
}

const Avatar = function({ review }){
    if(review.photo){
        return <img className="review-avatar" src={review.photo} alt={review.name} />
    }
    return <span className="review-avatar review-avatar-initials" aria-hidden="true">
        {getInitials(review.name)}
    </span>
}

const ReviewCard = function({ review }){
    return <article className="review-card">
        <div className="review-top">
            <Avatar review={review}/>
            <div className="review-who">
                <h4>{review.name}</h4>
                {review.role && <span>{review.role}</span>}
            </div>
            <div className="review-rating">
                <StarRating rating={review.rating}/>
                <b>{review.rating.toFixed(1)}</b>
            </div>
        </div>
        <p className="review-comment">{review.comment}</p>
        <time className="review-time">{timeAgo(review.createdAt)}</time>
    </article>
}

const Modal = function({ title, onClose, wide, children }){

    useEffect(function(){
        const onKey = function(event){
            if(event.key === "Escape"){
                onClose()
            }
        }
        document.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return function(){
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
        }
    }, [onClose])

    return createPortal(
        <div className="reviews-modal-overlay" onClick={onClose}>
            <div
                className={wide ? "reviews-modal reviews-modal-wide" : "reviews-modal"}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                onClick={function(event){ event.stopPropagation() }}
            >
                <button className="reviews-modal-close" onClick={onClose} aria-label="Close">
                    <CloseIcon/>
                </button>
                {children}
            </div>
        </div>,
        document.body
    )
}

const ReviewForm = function({ onSubmit }){

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [comment, setComment] = useState("")
    const [photo, setPhoto] = useState("")
    const [trap, setTrap] = useState("")
    const [sending, setSending] = useState(false)
    const [error, setError] = useState("")
    const fileRef = useRef(null)

    const pickPhoto = function(){
        fileRef.current.click()
    }

    const handlePhoto = async function(event){
        const file = event.target.files[0]
        if(!file){
            return
        }
        if(!["image/png", "image/jpeg"].includes(file.type)){
            setError("Photo must be a PNG or JPG.")
            event.target.value = ""
            return
        }
        if(file.size > 5 * 1024 * 1024){
            setError("Photo must be 5MB or less.")
            event.target.value = ""
            return
        }
        try{
            const resized = await resizeImage(file)
            setError("")
            setPhoto(resized)
        } catch(failure){
            setError("That image could not be read. Try another one.")
        }
        event.target.value = ""
    }

    const removePhoto = function(){
        setPhoto("")
        fileRef.current.value = ""
    }

    const handleSubmit = async function(event){
        event.preventDefault()

        if(sending){
            return
        }
        if(!name.trim()){
            setError("Enter your name.")
            return
        }
        if(rating === 0){
            setError("Pick a star rating.")
            return
        }
        if(comment.trim().length < 10){
            setError("Write at least 10 characters in your comment.")
            return
        }

        setSending(true)
        setError("")

        try{
            await onSubmit({
                name: name.trim(),
                role: role.trim(),
                rating: rating,
                comment: comment.trim(),
                photo: photo,
                trap: trap
            })
        } catch(failure){
            setError("Your review could not be sent. Check your connection and try again.")
            setSending(false)
        }
    }

    return <form className="review-form" onSubmit={handleSubmit} noValidate>
        <h3>Add Your Review</h3>
        <p className="review-form-sub">Share your experience working with me.</p>

        <div className="photo-upload">
            <button type="button" className="photo-circle" onClick={pickPhoto} aria-label="Upload photo">
                {photo
                    ? <img src={photo} alt="Your profile preview" />
                    : name.trim()
                        ? <span>{getInitials(name)}</span>
                        : <ImageIcon/>
                }
            </button>
            <div className="photo-info">
                <strong>Upload Photo (optional)</strong>
                <span>PNG, JPG up to 5MB</span>
                {photo && <button type="button" className="photo-remove" onClick={removePhoto}>Remove photo</button>}
            </div>
            <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={handlePhoto}
                hidden
            />
        </div>

        <label className="field">
            <span className="field-label">Your Name</span>
            <input
                type="text"
                value={name}
                onChange={function(event){ setName(event.target.value) }}
                placeholder="Your full name"
                maxLength={60}
            />
        </label>

        <label className="field">
            <span className="field-label">Role / Company (optional)</span>
            <input
                type="text"
                value={role}
                onChange={function(event){ setRole(event.target.value) }}
                placeholder="e.g. Founder, BrightApps"
                maxLength={60}
            />
        </label>

        <div className="field">
            <span className="field-label">Your Rating</span>
            <div className="star-input" onMouseLeave={function(){ setHover(0) }}>
                {[1, 2, 3, 4, 5].map(function(value){
                    const active = value <= (hover || rating)
                    return <button
                        type="button"
                        key={value}
                        className={active ? "star-btn is-active" : "star-btn"}
                        onMouseEnter={function(){ setHover(value) }}
                        onClick={function(){ setRating(value) }}
                        aria-label={`${value} star${value > 1 ? "s" : ""}`}
                        aria-pressed={value <= rating}
                    >
                        <StarIcon/>
                    </button>
                })}
            </div>
        </div>

        <label className="field">
            <span className="field-label">Your Comment</span>
            <textarea
                rows={5}
                value={comment}
                onChange={function(event){ setComment(event.target.value) }}
                placeholder="Write your review here..."
                maxLength={500}
            ></textarea>
            <span className="field-count">{comment.length}/500</span>
        </label>

        <input
            type="text"
            name="website"
            value={trap}
            onChange={function(event){ setTrap(event.target.value) }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
        />

        {error && <p className="form-error" role="alert">{error}</p>}

        <button type="submit" className="reviews-btn reviews-btn-primary reviews-btn-block" disabled={sending}>
            {sending ? "Sending..." : "Submit Review"}
            {!sending && <ArrowIcon/>}
        </button>
    </form>
}

const Reviews = function(){

    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadError, setLoadError] = useState(false)
    const [showAll, setShowAll] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(function(){
        let active = true

        const load = async function(){
            try{
                const snapshot = await getDocs(
                    query(collection(db, "reviews"), where("approved", "==", true))
                )
                const list = snapshot.docs.map(function(item){
                    const data = item.data()
                    return {
                        id: item.id,
                        name: data.name,
                        role: data.role || "",
                        rating: data.rating,
                        comment: data.comment,
                        photo: data.photo || "",
                        createdAt: data.createdAt && data.createdAt.toMillis ? data.createdAt.toMillis() : Date.now()
                    }
                })
                if(active){
                    setReviews(list)
                }
            } catch(failure){
                if(active){
                    setLoadError(true)
                }
            } finally {
                if(active){
                    setLoading(false)
                }
            }
        }

        load()

        return function(){
            active = false
        }
    }, [])

    const sorted = [...reviews].sort(function(a, b){
        return b.createdAt - a.createdAt
    })
    const latest = sorted.slice(0, 3)

    const openForm = function(){
        setShowAll(false)
        setShowForm(true)
    }

    const closeForm = function(){
        setShowForm(false)
    }

    const openAll = function(){
        setShowAll(true)
    }

    const closeAll = function(){
        setShowAll(false)
    }

    const closeThanks = function(){
        setSubmitted(false)
    }

    const addReview = async function(data){
        if(!data.trap){
            await addDoc(collection(db, "reviews"), {
                name: data.name,
                role: data.role,
                rating: data.rating,
                comment: data.comment,
                photo: data.photo,
                approved: false,
                createdAt: serverTimestamp()
            })
        }
        setShowForm(false)
        setSubmitted(true)
    }

    return <>

        <section className="reviews-container" id="reviews">

            <div className="reviews-head">
                <div className="reviews-texts">
                    <h2>Reviews</h2>
                    <p>What clients say about working with me.</p>
                </div>
                <button className="reviews-btn reviews-btn-primary" onClick={openForm}>
                    <span className="btn-icon"><StarIcon/></span>
                    Add a Review
                </button>
            </div>

            {loading
                ? <p className="reviews-empty">Loading reviews...</p>
                : loadError
                    ? <p className="reviews-empty">Reviews could not be loaded right now. Please refresh the page.</p>
                    : latest.length > 0
                        ? <div className="reviews-list">
                            {latest.map(function(review){
                                return <ReviewCard key={review.id} review={review}/>
                            })}
                        </div>
                        : <p className="reviews-empty">No reviews yet. Be the first to share your experience.</p>
            }

            {reviews.length > 3 && <div className="reviews-actions">
                <button className="reviews-btn reviews-btn-ghost" onClick={openAll}>
                    See all reviews ({reviews.length})
                    <ArrowIcon/>
                </button>
            </div>}

        </section>

        {showAll && <Modal title="All reviews" onClose={closeAll} wide>
            <div className="all-reviews-head">
                <h3>All Reviews</h3>
                <p>{reviews.length} reviews from clients</p>
            </div>
            <div className="all-reviews-list">
                {sorted.map(function(review){
                    return <ReviewCard key={review.id} review={review}/>
                })}
            </div>
            <button className="reviews-btn reviews-btn-primary reviews-btn-block" onClick={openForm}>
                <span className="btn-icon"><StarIcon/></span>
                Add a Review
            </button>
        </Modal>}

        {showForm && <Modal title="Add your review" onClose={closeForm}>
            <ReviewForm onSubmit={addReview}/>
        </Modal>}

        {submitted && <Modal title="Review received" onClose={closeThanks}>
            <div className="all-reviews-head">
                <h3>Thank you!</h3>
                <p>Your review was sent. It will show up on the page once it has been approved.</p>
            </div>
            <button className="reviews-btn reviews-btn-primary reviews-btn-block" onClick={closeThanks}>
                Close
            </button>
        </Modal>}

    </>
}

export default Reviews;