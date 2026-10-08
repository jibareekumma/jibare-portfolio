import socialLinks from "../data/socialLinks"

import "../css/Footer.css"

const Footer = function(){

    const scrollToTop = function(){
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return<>
        <footer className="site-footer">

            <div className="footer-socials">
                {socialLinks.map(function(link){
                    return (
                        <a key={link.name} href={link.href}
                            target="_blank" rel="noreferrer"
                            title={link.name} aria-label={link.name}
                        >
                            <img src={link.icon} alt="" loading="lazy" />
                        </a>
                    )
                })}
            </div>

            <div className="copyright">
                © {new Date().getFullYear()} Jibare. All rights reserved.
            </div>

            <button className="scroll-top-btn" onClick={scrollToTop}
                aria-label="Back to top"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

        </footer>
    </>
}

export default Footer;
