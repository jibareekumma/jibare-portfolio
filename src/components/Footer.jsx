


import githubIcon from "/icons/github-icon.png"
import xIcon from "/icons/x-icon.png"
import tiktokIcon from "/icons/tiktok-icon.png"
import whatsappIcon from "/icons/whatsapp-icon.png"
import techIcon from "/icons/gear-icon.png"

import "../css/Footer.css"

const Footer = function(){

    const scrollToTop = function(){
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return<>
        <footer>

            <button className="scroll-top-btn" onClick={scrollToTop}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="footer-card">

                <div className="name-container">
                    <h2>
                        JIBARE
                        <img src={techIcon} alt="Tech icon" loading="lazy" />
                    </h2>
                    <p>Full Stack Developer | SEO Analyst</p>
                </div>

                <div className="divider-line desktop-only"></div>

                <div className="icons-container">
                    <a className="icon" href="https://github.com/jibareekumma" 
                    target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub icon" loading="lazy" />
                    </a>
                    <a className="icon" href="https://x.com/devjibare?s=11" 
                    target="_blank" rel="noreferrer">
                        <img src={xIcon} alt="X icon" loading="lazy" />
                    </a>
                    <a className="icon" href="https://www.tiktok.com/@devjibare?_r=1&_t=ZS-987oXe7PGWe" 
                    target="_blank" rel="noreferrer">
                        <img src={tiktokIcon} alt="TikTok icon" 
                        loading="lazy" />
                    </a>
                    <a className="icon" href="https://wa.me/+2349130330586?text='Hi devJibare, i have a project'" 
                    target="_blank" rel="noreferrer">
                        <img src={whatsappIcon} alt="WhatsApp icon" loading="lazy" />
                    </a>
                </div>

                <div className="divider-dot mobile-only">
                    <span className="dot"></span>
                </div>

                <div className="contact-info mobile-only">
                    <div className="contact-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>
                            <a 
                             target="_blank"
                            href="mailto:jibareekumma@gmail.com">
                               jibareekumma@gmail.com</a></span>
                    </div>
                    <div className="contact-row">
                        <img src = {whatsappIcon} 
                        className = "whatsapp-icon"
                        alt="" />
                        <span>
                            <a 
                            target="_blank"
                            href="https://wa.me/+2349130330586?text='Hi devJibare, i have a project'">
                            +234 913 0330 586</a></span>
                    </div>
                </div>

                <div className="divider-dot mobile-only">
                    <span className="dot"></span>
                </div>

                <div className="copyright">
                    © 2025 Jibare. All rights reserved.</div>

            </div>

        </footer>
    </>
}

export default Footer;