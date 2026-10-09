import githubIcon from "/icons/github-icon.png"
import xIcon from "/icons/x-icon.png"
import reactLogo from "/icons/react_logo.png"
import typescriptLogo from "/icons/typscript_logo.png"
import taiwindLogo from "/icons/taiwind-logo.png"
import djangoLogo from "/icons/django_logo.png"
import postresqlLogo from "/icons/postresql-logo.png"
import avatar from "/photos/jibare-image.png"

import "../css/SidePanel.css"
import { useNavigate } from "react-router-dom"

const profileRows = [
    {
        label: "Location",
        value: "Port Harcourt, Nigeria",
        icon: <>
            <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/>
            <circle cx="12" cy="9.5" r="2.5"/>
        </>
    },
    {
        label: "Timezone",
        value: "WAT (GMT+1)",
        icon: <>
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v5l3 2"/>
        </>
    },
    {
        label: "Email",
        value: "jibareekumma@gmail.com",
        href: "mailto:jibareekumma@gmail.com",
        icon: <>
            <rect x="3" y="5" width="18" height="14" rx="2.5"/>
            <path d="m3.5 7 8.5 6 8.5-6"/>
        </>
    },
    {
        label: "Availability",
        value: "Open to opportunities",
        icon: <>
            <circle cx="12" cy="12" r="9"/>
            <path d="m8.5 12.5 2.5 2.5 4.5-5"/>
        </>
    }
]

const quickLinks = [
    {
        title: "GitHub",
        sub: "View my code",
        href: "https://github.com/jibareekumma",
        icon: githubIcon
    },
    {
        title: "X (Twitter)",
        sub: "Follow along",
        href: "https://x.com/devjibare?s=11",
        icon: xIcon
    },
    {
        title: "Resume / CV",
        sub: "Download my resume",
        href: "/documents/resume-main2.pdf",
        download: "jibare-resume"
    }
]

const stackLogos = [
    { name: "React", logo: reactLogo },
    { name: "Typescript", logo: typescriptLogo },
    { name: "Tailwind", logo: taiwindLogo },
    { name: "Django", logo: djangoLogo },
    { name: "PostgreSQL", logo: postresqlLogo }
]

const statsData = [
    { value: "10+", label: "Projects Completed" },
    { value: "7+", label: "Happy Clients" },
    { value: "100%", label: "Focus & Consistency" },
    { value: "∞", label: "Growth Mindset" }
]

const arrowRight = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
</svg>

const SidePanel = function(){

    const navigate = useNavigate();

    return<>
        <aside className="side-panel">

            <div className="side-card profile-card" data-reveal>
                <div className="profile-head">
                    <div className="avatar">
                        <img src={avatar} alt="Jibare" loading="lazy" />
                    </div>
                    <div className="profile-name">
                        <h4>Jibare</h4>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                <ul className="profile-rows">
                    {profileRows.map(function(row){
                        return (
                            <li key={row.label}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    {row.icon}
                                </svg>
                                <div>
                                    <small>{row.label}</small>
                                    {row.href
                                        ? <a href={row.href}>{row.value}</a>
                                        : <span>{row.value}</span>}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="side-card links-card" data-reveal style={{ "--i": 1 }}>
                <h5>Quick Links</h5>
                <ul>
                    {quickLinks.map(function(link){
                        return (
                            <li key={link.title}>
                                <a href={link.href}
                                    target={link.download ? undefined : "_blank"}
                                    rel="noreferrer"
                                    download={link.download}
                                >
                                    <span className="ql-icon">
                                        {link.icon
                                            ? <img src={link.icon} alt="" loading="lazy" />
                                            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 3h7l4 4v14H7z"/>
                                                <path d="M14 3v4h4M10 12h5M10 16h5"/>
                                            </svg>}
                                    </span>
                                    <span className="ql-text">
                                        <strong>{link.title}</strong>
                                        <small>{link.sub}</small>
                                    </span>
                                    <span className="ql-arrow">{arrowRight}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="side-card stack-card" data-reveal style={{ "--i": 2 }}>
                <h5>Tech Stack</h5>
                <div className="stack-row">
                    {stackLogos.map(function(item){
                        return (
                            <span className="stack-icon" key={item.name} title={item.name}>
                                <img src={item.logo} alt={`${item.name} logo`} loading="lazy" />
                            </span>
                        )
                    })}
                    <button className="stack-more" title="See full tech stack"
                        onClick={() => navigate('/more-about-me')}
                    >+</button>
                </div>
            </div>

            <div className="side-card stats-card" data-reveal style={{ "--i": 3 }}>
                <h5>My Stats</h5>
                <div className="stats-grid">
                    {statsData.map(function(stat){
                        return (
                            <div className="stat" key={stat.label}>
                                <strong>{stat.value}</strong>
                                <span>{stat.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="side-quote" data-reveal style={{ "--i": 4 }}>
                <span className="quote-mark">“</span>
                <blockquote>
                    The best way to predict the future is by creating it.
                </blockquote>
                <cite>Alan Kay</cite>
            </div>

        </aside>
    </>
}

export default SidePanel;
