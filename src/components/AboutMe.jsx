


import upperRightIcon from "/icons/upper-left-arr.png"
import codeIcon from "/icons/code_icon.png"
import seoIcon from "/icons/seo_icon.png"
import designIcon from "/icons/design_icon.png"
import speedIcon from "/icons/speed_icon.png"
import dotIcon from "/icons/dotIcon.png"


import "../css/AboutMe.css"
import { useNavigate } from "react-router-dom"

const AboutMe = function(){

    const navigate = useNavigate();
    return<>
    

        <div className="about-container" id="about">

            <div className = 'text-container-about'>
                <button>
                    <img src = {
                        dotIcon
                    } alt="Dot" loading="lazy" />
                    ABOUT ME
                </button>
                <h5>
                    I turn ideas into clean, 
                    performant and scalable solutions.
                </h5>
                <p className = 'about-me-p'>With a strong foundation in Systems designs, 
                    frontend
                    and backend technologies, I enjoy crafting seamless
                    digital ecperiences and optimizing them for search engines.

                </p>
                <div className="redirect-btn"
                    onClick = {() => navigate('/more-about-me')}
                >
                    <p>More About Me</p>
                    <img src = {upperRightIcon} 
                    alt="Upper Right Icon" loading="lazy" />
                </div>
            </div>



            <div className="skills-container">
                <div className = "class1 container-item">
                    <div className = 'icon-container'>
                    <img src= {codeIcon} 
                    alt="container icon" loading="lazy" />
                    </div>
                    <div className = "text-container">
                        <h5>Full Stack Development</h5>
                        <p>Building end-to-end web
                            applications.
                        </p>
                    </div>
                </div>


                <div className = "class2 container-item">
                    <div className = 'icon-container'>
                    <img src= {seoIcon} 
                    alt="container icon" loading="lazy" />
                    </div>
                    <div className = "text-container">
                        <h5>SEO Optimization</h5>
                        <p>Improving your business ranking
                            and driving organic traffic.
                        </p>
                    </div>
                </div>


                <div className = "class3 container-item">
                    <div className = 'icon-container designer-icon'>
                    <img src= {designIcon} 
                    alt="container icon" loading="lazy"
                     />
                    </div>
                    <div className = "text-container">
                        <h5>Web Design Services</h5>
                        <p>Giving your software
                            clean and modern designs so users enjoy 
                            their experience
                        </p>
                    </div>
                </div>




                <div className = "class4 container-item">
                    <div className = 'icon-container'>
                    <img src= {speedIcon} 
                    alt="container icon" loading="lazy" />
                    </div>
                    <div className = "text-container">
                        <h5>Full Stack Development</h5>
                        <p>Building end-to-end web
                            applications.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </>
}


export default AboutMe;