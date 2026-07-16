



import dotIcon from "/icons/dotIcon.png"
import seoIcon from "/icons/seo_icon.png"
import codeIcon from "/icons/code_icon.png"
import designIcon from "/icons/design_icon.png"
import webIcon from "/icons/web_icon.png"
import rightIcon from "/icons/right-icon.png"
import websitePage from "/icons/website_markup.png"

import "../css/Services.css"
import { useState } from "react"

const servicesData = {
    "web-dev": {
        icon: webIcon,
        title: "Web Development",
        description: "I build fast, responsive and user-friendly websites and web applications that deliver real value.",
        offers: [
            "Custom websites from scratch",
            "Responsive and mobile-first design",
            "Web applications with modern stack",
            "Performance optimization",
            "SEO-friendly and clean code"
        ],
        technologies: ["React", "Javascript", "Typescript", "TailwindCSS", "Django", "SQL"]
    },
    "seo": {
        icon: seoIcon,
        title: "SEO Analysis",
        description: "I help your business rank higher across search engines and LLMs to help you beat your competitors.",
        offers: [
            "Technical SEO audits",
            "Keyword research and strategy",
            "On-page optimization",
            "Content and structure improvements",
            "Performance and Core Web Vitals"
        ],
        technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Lighthouse", "Schema Markup"]
    },
    "api-dev": {
        icon: codeIcon,
        title: "API Development",
        description: "I design and build RESTful APIs and integrations for seamless functionality across your systems.",
        offers: [
            "RESTful API design",
            "Third party integrations",
            "Authentication and security",
            "Database architecture",
            "Documentation and testing"
        ],
        technologies: ["Python", "RESTAPI", "Django"]
    },
    "design": {
        icon: designIcon,
        title: "WEB & APP Designs",
        description: "I create modern, intuitive designs that keep users engaged and make products easy to use.",
        offers: [
            "UI/UX design",
            "Wireframing and prototyping",
            "Design systems",
            "Mobile-first layouts",
            "Accessibility best practices"
        ],
        technologies: ["Figma", "Adobe XD", "TailwindCSS", "Framer", "SCSS"]
    }
}

const Services = function(){

    const [activeModal, setActiveModal] = useState(null)

    const closeModal = function(){
        setActiveModal(null)
    }

    const activeData = activeModal ? servicesData[activeModal] : null

    return<>

        <div className = 'services-container'>

            <button>
                <img src = {dotIcon} 
                alt="Dot Icon" loading="lazy" />
                WHAT I DO
            </button>

            <h3>Services I Offer</h3>




            <div className = 'services-items'>


                <div className = 'item web-dev-item' onClick={() => setActiveModal('web-dev')}>
                    <div className="icon-container">
                    <img src = {webIcon} 
                    alt="Web development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>Web Development</h5>
                        <p>
                            Custom websites and applications built
                            with modern technologies.
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />
                </div>


                <div className = 'item seo-item' onClick={() => setActiveModal('seo')}>
                    <div className="icon-container">
                    <img src = {seoIcon} 
                    alt="SEO icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>SEO Analysis</h5>
                        <p>
                            Technical SEO to help your business
                            rank accross search engines and LLMs, 
                            and help beat your competitors
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />
                </div>


                <div className = 'item api-dev-item' onClick={() => setActiveModal('api-dev')}>
                    <div className="icon-container">
                    <img src = {codeIcon} 
                    alt="API development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>API Development</h5>
                        <p>
                            RESTful APIs and intergration for seamless
                            functionalities.
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />
                </div>


                <div className = 'item design-item' onClick={() => setActiveModal('design')}>
                    <div className="icon-container">
                    <img src = {designIcon} 
                    alt="Web development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>WEB & APP Designs</h5>
                        <p>
                            Good and modern designs that encourages users 
                            to stay longer and are easy to use
     
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />
                </div>


            </div>

        </div>


        {activeData &&
            <div className="service-modal-overlay" onClick={closeModal}>
                <div className="service-modal" onClick={(e) => e.stopPropagation()}>

                    <div className="sheet-handle"></div>

                    <button className="modal-close" onClick={closeModal}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <div className="modal-head">
                        <div className="icon-container">
                            <img src = {activeData.icon} alt="Service icon" loading="lazy" />
                        </div>
                        <div className="head-text">
                            <h4>{activeData.title}</h4>
                            <p>{activeData.description}</p>
                        </div>
                    </div>

                    <div className="modal-body">

                        <div className="offer-block">
                            <span className="block-label">WHAT I OFFER</span>
                            <div className="offer-row">
                                <ul>
                                    {activeData.offers.map(function(offer, index){
                                        return <li key={index}>{offer}</li>
                                    })}
                                </ul>
                                <div className="preview-card">
                                    <div className="preview-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <img src = {websitePage} alt="Website preview" loading="lazy" />
                                </div>
                            </div>
                        </div>

                        <div className="tech-block">
                            <span className="block-label">TECHNOLOGIES I USE</span>
                            <div className="tech-tags">
                                {activeData.technologies.map(function(tech, index){
                                    return <span className="tag" key={index}>{tech}</span>
                                })}
                            </div>
                        </div>

                    </div>

                    <button className="view-work-btn">
                        View My Work
                        <img src={rightIcon} alt="Right Arrow Icon" loading="lazy" />
                    </button>

                </div>
            </div>
        }

    </>
}

export default Services;