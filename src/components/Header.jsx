


import logo from "/icons/favicon2.png"
import hamburgerIcon from "/icons/hamburger-icon.png"
import closeIcon from "/icons/cancel_icon2.png"
import upperRightIcon from "/icons/upper-left-arr.png"

import ThemeToggle from "./ThemeToggle"

import { useState } from "react"


import "../css/Header.css"
import { useNavigate } from "react-router-dom"



const Header = function(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = function(){
        setMenuOpen(!menuOpen)
    }

    const closeMenu = function(){
        setMenuOpen(false)
    }

    const navigate = useNavigate();
    return<>

        <header>
            <div className = 'logos-container'>
                <img src = {logo} alt="jibare-logo"
                    loading="lazy"
                />
                <div className = 'logo-text'>
                    <h3>JIBARE</h3>
                    <h6>DEVELOPMENT AND SEO</h6>
                </div>
            </div>


            <ThemeToggle/>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <img src = {menuOpen ? closeIcon : hamburgerIcon} 
                    alt="hamburger icon" 
                    loading="lazy" 
                />
            </div>
            <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <ul>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" 
                    onClick={() => navigate('/services')}>Services</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                </ul>
            </nav>




            <nav className = "nav-menu-dsk">
                <ul>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#services" >Services</a></li>
                    <li><a href="#projects" >Projects</a></li>
                </ul>
                <div title="Contact dev Jibare"
                    className="talk-btn"
                >
                <p>Lets Talk</p>
                <img src = {upperRightIcon} alt="Contact Jibare"

                />
                </div>
            </nav>

            
           
        </header>

        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
}

export default Header;