


import aervynPJ from "/photos/aervyn-pj.png"
import trackNestPJ from "/photos/tracknest-pj.png"
import mortagePJ from "/photos/mortage-pj.png"
import quoteIcon from "/icons/quote-icon.png"
import sendIcon from "/icons/send-icon.png"

import whatsappIcon from "/icons/whatsapp-icon.png"

import "../css/Projects.css"
import { useState } from "react"

const projectsData = [
    {
        image: aervynPJ,
        title: "Aervyn",
        url: "https://aervyn.netlify.app",
        description: "A travel/vacation guide, that helps track flights, cars, hotels and their prices around the world and can help book them",
        tags: ["React", "Typescript", "TailwindCSS", 
            "Django", "Supabase"]
    },
    {
        image: trackNestPJ,
        title: "TrackNest",
        url: "https://tracknestt.netlify.app",
        description: "A project management app with real-time data sync and per-user data isolation.",
        tags: ["React", "Firebase", "Typescript", "Python"]
    },
    {
        image: mortagePJ,
        title: "Mortgage Calculator",
        url: "https://mortagepaymentcal.netlify.app",
        description: "A web app that helps users estimate mortgage payments and plan their finances.",
        tags: ["JavaScript", "Tailwind", "SASS"]
    }
]

const testimonialsData = [
    {
        quote: "Jibare is a highly skilled developer and SEO expert. He delivered beyond expectations, and easy to work with!",
        name: "Peace Eneji"
    }
]

const Projects = function(){

    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleChange = function(field){
        return function(e){
            setFormData(function(prev){
                return { ...prev, [field]: e.target.value }
            })
        }
    }

    const openExternalLink = function(url){
    window.open(url, "_blank", "noopener,noreferrer")
}


const [submitStatus, setSubmitStatus] = useState("")

const encode = function(data){
    return Object.keys(data)
        .map(function(key){
            return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        })
        .join("&")
}

const handleSubmit = function(){
    if(!formData.name || !formData.email || !formData.message){
        setSubmitStatus("Please fill in all fields.")
        return
    }

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
    })
    .then(function(){
        setSubmitStatus("Message sent — thank you!")
        setFormData({ name: "", email: "", message: "" })
    })
    .catch(function(){
        setSubmitStatus("Something went wrong, please try again.")
    })
}
    return<>

        <div className = 'projects-container' 
            id="projects"
        >

            <div className="projects-topbar">
                <div className="topbar-text">
                    <button>
                        <span className="badge-dot"></span>
                        FEATURED PROJECTS
                    </button>
                    <h3>Some Things I've Built</h3>
                </div>

                <button className="view-all-btn">
                    View All Projects
                    <img src={sendIcon} alt="Arrow icon" loading="lazy" />
                </button>
            </div>

            <div className="projects-grid">
                {projectsData.map(function(project, index){
                    return (
                        <div className="project-card" 
                        onClick={() => openExternalLink(project.url)}
                        key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                            </div>
                            <div className="project-text">
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <div className="tag-row">
                                    {project.tags.map(function(tag, tagIndex){
                                        return <span className="tag" key={tagIndex}>{tag}</span>
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="contact-section">

                <div className="testimonial-card">
                    <img src={quoteIcon} alt="Quote icon" loading="lazy" className="testimonial-quote-icon" />
                    <p className="testimonial-text">{testimonialsData[activeTestimonial].quote}</p>
                    <span className="testimonial-name">— {testimonialsData[activeTestimonial].name}</span>

                    <div className="testimonial-dots">
                        {[0, 1, 2, 3].map(function(dotIndex){
                            return (
                                <span
                                    className={`dot ${activeTestimonial === dotIndex ? 'active' : ''}`}
                                    key={dotIndex}
                                    onClick={() => setActiveTestimonial(dotIndex)}
                                ></span>
                            )
                        })}
                    </div>
                </div>

                <div className="contact-form">
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange('name')}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange('email')}
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange('message')}
                    ></textarea>


                    <input type="text" name="bot-field" 
                    style={{ display: "none" }} />
                </div>

                <div className="work-together-text">
                    <span className="section-label">LET'S WORK TOGETHER</span>
                    <h4>Have a project in mind?</h4>
                    <p>I'd love to hear about it. Let's build something great together.</p>

                    <div className="contact-links">
                        <div className="contact-row">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                            <span>
                                <a 
                                 target="_blank"
                                href="mailto: jibareekumma@gmail.com">
                                    jibareekumma@gmail.com</a></span>
                        </div>
                        <div className="contact-row">
                            <img src={whatsappIcon} 
                            className="whatsapp-icon"
                            alt="Phone icon" loading="lazy" />
                            <span>
                                 <a 
                                  target="_blank"
                                 href="tel: +234 913 033 0586">
                                    +234 913 033 0586</a>
                            </span>
                        </div>
                    </div>
                </div>

                <button className="send-message-btn"
                    onClick={handleSubmit}
                >
                    Send Message
                    <img src={sendIcon} alt="Send icon" 
                    loading="lazy" />
                </button>
                {submitStatus && <p className="submit-status">
                    {submitStatus}</p>}
            </div>

        </div>
    </>
}

export default Projects;