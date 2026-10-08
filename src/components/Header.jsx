import logo from "/icons/my_logo.png"
import hamburgerIcon from "/icons/hamburger-icon.png"
import closeIcon from "/icons/cancel_icon2.png"

import ThemeToggle from "./ThemeToggle"
import socialLinks from "../data/socialLinks"
import { useScrollSpy } from "../hooks/useScrollEffects"

import { useState, useRef, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

import "../css/Header.css"

const sectionIds = ["home", "projects", "about", "services", "contact"]

const navItems = [
    {
        id: "home",
        label: "Home",
        icon: <>
            <path d="M3 11.5 12 4l9 7.5"/>
            <path d="M5.5 10v9.5h13V10"/>
            <path d="M10 19.5v-5h4v5"/>
        </>
    },
    {
        id: "projects",
        label: "Projects",
        icon: <>
            <rect x="4" y="7" width="16" height="13" rx="2.5"/>
            <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/>
        </>
    },
    {
        id: "about",
        label: "About",
        icon: <>
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="10" r="3"/>
            <path d="M6.5 18.2c1-2.4 3.2-3.7 5.5-3.7s4.5 1.3 5.5 3.7"/>
        </>
    },
    {
        id: "services",
        label: "Services",
        icon: <>
            <rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/>
            <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/>
            <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/>
            <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>
        </>
    },
    {
        id: "experience",
        label: "Experience",
        route: "/more-about-me",
        icon: <>
            <path d="M5 4h14v12H9l-4 4z"/>
            <path d="M9 9h6M9 12h4"/>
        </>
    },
    {
        id: "contact",
        label: "Contact",
        icon: <>
            <rect x="3" y="5" width="18" height="14" rx="2.5"/>
            <path d="m3.5 7 8.5 6 8.5-6"/>
        </>
    }
]

const Header = function(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [indicator, setIndicator] = useState({ top: 0, height: 0 });
    const navListRef = useRef(null);
    const navigate = useNavigate();
    const active = useScrollSpy(sectionIds);

    useLayoutEffect(function(){
        const item = navListRef.current.querySelector(`[data-nav="${active}"]`)
        if(item){
            setIndicator({ top: item.offsetTop, height: item.offsetHeight })
        }
    }, [active])

    const toggleMenu = function(){
        setMenuOpen(!menuOpen)
    }

    const closeMenu = function(){
        setMenuOpen(false)
    }

    const goTo = function(event, item){
        event.preventDefault()
        closeMenu()

        if(item.route){
            navigate(item.route)
            return
        }

        if(item.id === "home"){
            window.scrollTo({ top: 0, behavior: "smooth" })
            return
        }

        const el = document.getElementById(item.id)
        if(el){
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return<>

        <div className="topbar">
            <div className="brand">
                <img src={logo} alt="jibare-logo" />
                <div className="brand-text">
                    <h3>JIBARE</h3>
                    <h6>DEVELOPMENT AND SEO</h6>
                </div>
            </div>
            <button className="hamburger-menu" onClick={toggleMenu}
                aria-label="Toggle menu" aria-expanded={menuOpen}
            >
                <img src={menuOpen ? closeIcon : hamburgerIcon} alt="" />
            </button>
        </div>

        <aside className={menuOpen ? "sidebar active" : "sidebar"}>

            <div className="sidebar-top">
                <div className="sidebar-logo">
                    <svg className="orbit-ring" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#5d60f2"/>
                                <stop offset="100%" stopColor="#b4b7ff"/>
                            </linearGradient>
                        </defs>
                        <circle className="orbit-track" cx="50" cy="50" r="46"/>
                        <circle className="orbit-progress" cx="50" cy="50" r="46" pathLength="100"/>
                    </svg>
                    <span className="orbit-satellite"><i></i></span>
                    <img src={logo} alt="jibare-logo" />
                </div>
                <div className="sidebar-brand">
                    <h3>JIBARE</h3>
                    <h6>DEVELOPMENT AND SEO</h6>
                </div>
            </div>

            <nav className="sidebar-nav" aria-label="Main navigation">
                <ul ref={navListRef}>
                    <li className="nav-indicator" aria-hidden="true"
                        style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
                    ></li>
                    {navItems.map(function(item){
                        return (
                            <li key={item.id} data-nav={item.id}>
                                <a
                                    href={item.route ? item.route : `#${item.id}`}
                                    className={active === item.id ? "is-active" : ""}
                                    onClick={(event) => goTo(event, item)}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                        {item.icon}
                                    </svg>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className="sidebar-bottom">
                <ThemeToggle/>

                <div className="socials">
                    <h6>Socials</h6>
                    <div className="social-icons">
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
                </div>

                <p className="tagline">
                    Better code.<br/>
                    Bigger dreams.
                </p>
            </div>

        </aside>

        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
}

export default Header;
