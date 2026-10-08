import "../css/AboutMe.css"
import { useNavigate } from "react-router-dom"

const aboutChips = [
    {
        label: "Problem Solver",
        icon: <>
            <path d="M9 18h6M10 21h4"/>
            <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>
        </>
    },
    {
        label: "Lifelong Learner",
        icon: <>
            <path d="M12 6c-1.6-1.3-3.8-2-6.5-2H3v14h2.5c2.7 0 4.9.7 6.5 2 1.6-1.3 3.8-2 6.5-2H21V4h-2.5c-2.7 0-4.9.7-6.5 2z"/>
            <path d="M12 6v14"/>
        </>
    },
    {
        label: "Tech Enthusiast",
        icon: <>
            <path d="M13 2 4 14h7l-1 8 9-12h-7z"/>
        </>
    }
]

const AboutMe = function(){

    const navigate = useNavigate();
    return<>

        <section className="about-section" id="about">

            <div className="about-card" data-reveal>

                <span className="about-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M6.5 18.2c1-2.4 3.2-3.7 5.5-3.7s4.5 1.3 5.5 3.7"/>
                    </svg>
                </span>

                <div className="about-text">
                    <h4>About Me</h4>
                    <p>
                        I turn ideas into clean, performant and scalable
                        solutions. With a strong foundation in system design,
                        frontend and backend technologies, I enjoy crafting
                        seamless digital experiences and optimizing them
                        for search engines.
                    </p>
                </div>

                <ul className="about-chips">
                    {aboutChips.map(function(chip){
                        return (
                            <li className="about-chip" key={chip.label}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    {chip.icon}
                                </svg>
                                {chip.label}
                            </li>
                        )
                    })}
                </ul>

                <button className="about-link"
                    onClick={() => navigate('/more-about-me')}
                >
                    Learn more about me
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                </button>

            </div>

        </section>
    </>
}


export default AboutMe;
