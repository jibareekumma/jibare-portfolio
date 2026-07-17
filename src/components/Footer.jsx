


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
                    <a className="icon" href="#" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub icon" loading="lazy" />
                    </a>
                    <a className="icon" href="#" target="_blank" rel="noreferrer">
                        <img src={xIcon} alt="X icon" loading="lazy" />
                    </a>
                    <a className="icon" href="#" target="_blank" rel="noreferrer">
                        <img src={tiktokIcon} alt="TikTok icon" loading="lazy" />
                    </a>
                    <a className="icon" href="#" target="_blank" rel="noreferrer">
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
                        <span>hello@jibare.dev</span>
                    </div>
                    <div className="contact-row">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M6.6 10.8C7.9 13.5 10.1 15.6 12.8 17L14.8 15C15.1 14.7 15.5 14.6 15.9 14.7C17.1 15.1 18.4 15.3 19.7 15.3C20.4 15.3 21 15.9 21 16.6V19.7C21 20.4 20.4 21 19.7 21C10.5 21 3 13.5 3 4.3C3 3.6 3.6 3 4.3 3H7.4C8.1 3 8.7 3.6 8.7 4.3C8.7 5.6 8.9 6.9 9.3 8.1C9.4 8.5 9.3 8.9 9 9.2L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>+234 901 234 5678</span>
                    </div>
                </div>

                <div className="divider-dot mobile-only">
                    <span className="dot"></span>
                </div>

                <div className="copyright">© 2025 Jibare. All rights reserved.</div>

            </div>

        </footer>
    </>
}

export default Footer;