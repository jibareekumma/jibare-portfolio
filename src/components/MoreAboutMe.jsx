


import educationIcon from "/icons/education-icon.png"
import ageIcon from "/icons/age-icon.png"
import storyIcon from "/icons/story-icon.png"
import personalIcon from "/icons/personal-icon.png"
import starIcon from "/icons/star-icon.png"
import funfactIcon from "/icons/fun-face-icon.png"
import location from "/icons/location-icon.png"
import availabilityIcon from "/icons/availability-icon.png"
import mailIcon from "/icons/mail-icon.png"
import phoneIcon from "/icons/phone-icon.png"
import quoteIcon from "/icons/quote-icon.png"
import stackIcon from "/icons/code_icon.png"

import "../css/MoreAboutMe.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const MoreAboutMe = function(){

    const navigate = useNavigate()
    const [open, setOpen] = useState({})

    const toggleSection = function(key){
        setOpen(function(prev){
            return { ...prev, [key]: !prev[key] }
        })
    }

    return<>

        <div className="more-about-page">

            <div className="page-topbar">
                <button className="back-nav"
                onClick = {() => navigate('/')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                </button>
            </div>

            <div className="page-content">

                <button className="header-badge">
                    <span className="badge-dot"></span>
                    ABOUT ME
                </button>

                <h1 className="page-title">More About Me</h1>

                <p className="intro-text">
                    I'm a passionate Full Stack Developer and SEO Analyst
                    who loves building fast, scalable, and user-focused
                    digital solutions. I enjoy turning ideas into real products
                    that solve problems and create impact.
                </p>

                <div className="story-section">
                    <div className="accordion-item">
                        <div className = "accordion-header" onClick={() => toggleSection('story')}>
                            <div className = 'icon-container'>
                                <img src = {storyIcon} alt="Story icon" loading="lazy" />
                            </div>
                            <h5>
                                <span className="story-dot"></span>
                                My Story
                            </h5>
                            <svg className={`chevron ${open.story ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.story ? 'open' : ''}`}>
                            <p>
                                My journey in tech started with curiosity and a drive to
                                solve real problems. 
                                Over time, I've worked on
                                diverse projects that challenged me to grow, adapt,
                                and deliver real value.
                            </p>
                            <p>
                                I believe in writing clean and reusable code, 
                                that delivers quality and builds
                                 digital experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="details-grid">

                    <div className = "accordion-item">
                        <div className = "accordion-header" onClick={() => toggleSection('education')}>
                            <div className = 'icon-container'>
                                <img src = {educationIcon} alt="Education icon" loading="lazy" />
                            </div>
                            <h5>Education</h5>
                            <svg className={`chevron ${open.education ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.education ? 'open' : ''}`}>
                            <div className="entry">
                                <h6>MMS. Software Engineering</h6>
                                <p>National Institute for Information Tch 
                                    <b>(NIIT)</b></p>
                                <span className="entry-date">2025 - Present</span>
                            </div>
                            <div className="entry">
                                <h6>Senior Secondary School</h6>
                                <p>Paradise Missionary School (PMS)</p>
                                <span className="entry-date">2019 – 2022</span>
                            </div>
                        </div>
                    </div>

                    <div className = "accordion-item">
                        <div className = "accordion-header" onClick={() => toggleSection('techstack')}>
                            <div className = 'icon-container'>
                                <img src = {stackIcon} alt="Tech stack icon" 
                                loading="lazy" />
                            </div>
                            <h5>Tech Stack</h5>
                            <svg 
                            className={`chevron ${open.techstack ? 'rotated' : ''}`} 
                            width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" 
                                stroke="currentColor" strokeWidth="2" 
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.techstack ? 
                            'open' : ''}`}>
                            <div className="tag-grid">
                                <span className="tag">React</span>
                                <span className="tag">Typescript</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Python</span>
                                <span className="tag">Django</span>
                                <span className="tag">PostgreSQL</span>
                                <span className="tag">TailwindCSS</span>
                                <span className="tag">Git</span>
                                <span className="tag">GitHub</span>
                            </div>
                        </div>
                    </div>

                    <div className = "accordion-item">
                        <div className = "accordion-header" onClick={() => 
                            toggleSection('experience')}>
                            <div className = 'icon-container'>
                                <svg width="18" height="18" 
                                viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="7" width="18" height="13" rx="2" 
                                    stroke="currentColor" strokeWidth="1.6"/>
                                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" 
                                    stroke="currentColor" strokeWidth="1.6"/>
                                    <path d="M3 12H21" stroke="currentColor" 
                                    strokeWidth="1.6"/>
                                </svg>
                            </div>
                            <h5>Experience</h5>
                            <svg className={`chevron ${open.experience ? 
                                'rotated' : ''}`} width="14" height="14" 
                                viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" 
                                strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.experience ? 
                            'open' : ''}`}>
                            <div className="entry">
                                <h6>Full Stack Developer (Freelance)</h6>
                                <span className="entry-date">2023 – Present</span>
                                <p>Building web applications, dashboards, 
                                    and custom solutions for clients worldwide.</p>
                            </div>
                            <div className="entry">
                                <h6>SEO Analyst</h6>
                                <span className="entry-date">2025 – Present</span>
                                <p>Helping brands grow through technical SEO, 
                                    keyword research and content strategy.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "accordion-item">
                        <div className = "accordion-header" onClick={() => 
                            toggleSection('personal')}>
                            <div className = 'icon-container'>
                                <img src = {personalIcon} alt="Personal icon" 
                                loading="lazy" />
                            </div>
                            <h5>Personal</h5>
                            <svg className={`chevron ${open.personal ? 'rotated' : ''}`} 
                            width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.personal ? 
                            'open' : ''}`}>
                            <ul>
                                <li>Curiosity drives my value, always willing 
                                    and ready to learn new technologies
                                </li>
                                <li>I'm a night owl and mostly productive 
                                    after 4PM, but can work anytime required</li>
                                <li>I enjoy researching, listening to music 
                                    and exploring new tech.</li>
                                    <li>Im aspiring and aiming towards Blockchain 
                                        and AI long term
                                    </li>
                            </ul>
                        </div>
                    </div>

                    <div className = "accordion-item">
                        <div className = "accordion-header" 
                        onClick={() => toggleSection('drives')}>
                            <div className = 'icon-container'>
                                <img src = {starIcon} alt="What drives me icon" 
                                loading="lazy" />
                            </div>
                            <h5>What Drives Me</h5>
                            <svg className={`chevron ${open.drives ? 
                                'rotated' : ''}`} width="14" height="14" 
                                viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" 
                                stroke="currentColor" strokeWidth="2" 
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.drives ? 
                            'open' : ''}`}>
                            <p>
                                Im driven by challenges of turning an idea into a 
                                real-world product. Every project is an oppotunity to learn
                                grow and be a contribution to the internet at large
                            </p>
                            <div className="quote-box">
                                <img src = {quoteIcon} alt="Quote icon" 
                                loading="lazy" />
                                <p>The best way to predict the 
                                    future is by creating it</p>
                                <span>- Alan Kay</span>
                            </div>
                        </div>
                    </div>

                    <div className = "accordion-item">
                        <div className = "accordion-header" onClick={() => toggleSection('funfacts')}>
                            <div className = 'icon-container'>
                                <img src = {funfactIcon} alt="Fun facts icon" loading="lazy" />
                            </div>
                            <h5>Fun Facts</h5>
                            <svg className={`chevron ${open.funfacts ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className = {`accordion-content ${open.funfacts ? 'open' : ''}`}>
                            <ul>
                                <li>I can spend hours analyzing UX and performance.</li>
                                <li>I'm a chess and tennis player</li>
                                <li>I'm always learning something new.</li>
                                <li>I love coffee over anything else.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="info-panel">
                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {personalIcon} alt="Name icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Full Name</span>
                            <span className="info-value">Solomon Ekumma 
                                <i>(~devjibare)</i></span>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {ageIcon} alt="Age icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Age</span>
                            <span className="info-value">20</span>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {location} alt="Location icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Location</span>
                            <span className="info-value">Port Harcourt, Nigeria</span>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {availabilityIcon} alt="Availability icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Availability</span>
                            <span className="info-value">
                                <span className="status-dot"></span>
                                Open to Work
                            </span>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {mailIcon} alt="Email icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Email</span>
                            <span className="info-value"> <a className="info-link"
                            title="mail devjibare"
                            href="mailto:jibareekumma@gmail.com">
                                jibareekumma@gmail.com</a>
                                {/* || <a className="info-link"
                                title="mail devjibare"
                            href="mailto:solomonekumma@gmail.com">
                                solomonekumma@gmail.com</a> */}
                            </span>
                        </div>
                    </div>

                    <div className="info-row">
                        <div className = 'icon-container'>
                            <img src = {phoneIcon} alt="Phone icon" loading="lazy" />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Phone</span>
                            <span className="info-value">
                                <a href="tel:+234 913 033 0586"
                                    className="info-link"
                                    title="call devjibare"
                                >
                                    +234 913 033 0586
                                </a>
                                </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
}

export default MoreAboutMe;