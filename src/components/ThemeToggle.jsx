import { useState, useEffect } from "react"
import "../css/ThemeToggle.css"

const ThemeToggle = function(){

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = function(){
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle dark and light mode"
        >
            {theme === "dark" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4.2"/>
                    <path d="M12 2.5v2.2M12 19.3v2.2M4.5 4.5l1.6 1.6M17.9 17.9l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.5 19.5l1.6-1.6M17.9 6.1l1.6-1.6"/>
                </svg>
            )}
            <span className="theme-label">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            <span className={theme === "dark" ? "switch" : "switch on"}>
                <span className="knob"></span>
            </span>
        </button>
    )
}

export default ThemeToggle;
