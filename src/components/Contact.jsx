import whatsappIcon from "/icons/whatsapp-icon.png"

import "../css/Contact.css"
import { useState } from "react"

const testimonialsData = [
    {
        quote: "Jibare is a highly skilled developer and SEO expert. He delivered beyond expectations, and easy to work with!",
        name: "Peace Eneji"
    }
]

const Contact = function(){

    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [submitStatus, setSubmitStatus] = useState("")

    const handleChange = function(field){
        return function(e){
            setFormData(function(prev){
                return { ...prev, [field]: e.target.value }
            })
        }
    }

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

        <section className="contact-section" id="contact">

            <div className="section-head" data-reveal>
                <span className="section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2.5"/>
                        <path d="m3.5 7 8.5 6 8.5-6"/>
                    </svg>
                </span>
                <h3>Let's Work Together</h3>
                <span className="section-line"></span>
            </div>

            <div className="contact-grid">

                <div className="contact-info" data-reveal>
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

                    <div className="testimonial-card">
                        <span className="quote-mark">“</span>
                        <p className="testimonial-text">{testimonialsData[activeTestimonial].quote}</p>
                        <span className="testimonial-name">— {testimonialsData[activeTestimonial].name}</span>

                        {testimonialsData.length > 1 && <div className="testimonial-dots">
                            {testimonialsData.map(function(item, dotIndex){
                                return (
                                    <span
                                        className={`dot ${activeTestimonial === dotIndex ? 'active' : ''}`}
                                        key={dotIndex}
                                        onClick={() => setActiveTestimonial(dotIndex)}
                                    ></span>
                                )
                            })}
                        </div>}
                    </div>
                </div>

                <div className="contact-form" data-reveal style={{ "--i": 1 }}>
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

                    <button className="send-message-btn"
                        onClick={handleSubmit}
                    >
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>
                        </svg>
                    </button>
                    {submitStatus && <p className="submit-status">
                        {submitStatus}</p>}
                </div>

            </div>

        </section>
    </>
}

export default Contact;
