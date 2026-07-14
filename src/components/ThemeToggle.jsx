


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
            <div className={theme === "dark" ? "toggle-track" : "toggle-track light"}>
                <div className="toggle-icons">
                    <svg className="icon sun" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <svg className="icon moon" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="toggle-thumb"></div>
            </div>
        </button>
    )
}

export default ThemeToggle;