import reactLogo from "/icons/react_logo.png"
import typescriptLogo from "/icons/typscript_logo.png"
import taiwindLogo from "/icons/taiwind-logo.png"
import djangoLogo from "/icons/django_logo.png"
import postresqlLogo from "/icons/postresql-logo.png"

import Astronaut from "./Astronaut"
import "../css/Description.css"

const nameLetters = "Jibare".split("")

const heroSkills = [
    { name: "React", logo: reactLogo },
    { name: "Typescript", logo: typescriptLogo },
    { name: "Tailwind", logo: taiwindLogo },
    { name: "Django", logo: djangoLogo },
    { name: "PostgreSQL", logo: postresqlLogo }
]

const Description = function(){

    const scrollToSection = function(id){
        const el = document.getElementById(id)
        if(el){
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return<>
    <section className="hero" id="home">

        <div className="hero-glow"></div>

        <div className="hero-status">
            <span className="status-dot"></span>
            Available for freelance
        </div>

        <div className="hero-stage">
            <div className="hero-parallax">
                <Astronaut/>
            </div>
        </div>

        <div className="hero-copy">
            <p className="hero-eyebrow">HELLO, I'M</p>

            <h1 className="hero-name" aria-label="Jibare">
                {nameLetters.map(function(letter, index){
                    return (
                        <span className="hero-letter" key={index}
                            style={{ "--i": index }} aria-hidden="true"
                        >
                            {letter}
                        </span>
                    )
                })}
                <span className="hero-cursor" aria-hidden="true"></span>
            </h1>

            <p className="hero-roles">
                Full Stack Developer <i>/</i> SEO Analyst
            </p>

            <p className="hero-text">
                I build fast, scalable and user-focused software,
                and I help businesses rank higher across search
                engines and LLMs.
            </p>

            <div className="hero-actions">
                <button className="btn btn-primary"
                    onClick={() => scrollToSection('projects')}
                >
                    View My Projects
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                </button>
                <a className="btn btn-ghost"
                    href="/documents/resume-main2.pdf"
                    download="jibare-resume"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>
                    </svg>
                    Download Resume
                </a>
            </div>

            <ul className="hero-skills">
                {heroSkills.map(function(skill){
                    return (
                        <li key={skill.name}>
                            <img src={skill.logo} alt={`${skill.name} logo`} loading="lazy" />
                            <p>{skill.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

        <p className="hero-tagline">Code. Build. Improve.</p>

    </section>
    </>
}
export default Description;
