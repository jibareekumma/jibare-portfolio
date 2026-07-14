
import dotIcon from "/icons/dotIcon.png"
import upperRightIcon from "/icons/upper-left-arr.png"
import downloadIcon from "/icons/download-icon.png"
import myImage from "/photos/jibare-image.png"


import reactLogo from "/icons/react_logo.png"
import typescriptLogo from "/icons/typscript_logo.png"
import taiwindLogo from "/icons/taiwind-logo.png"
import djangoLogo from "/icons/django_logo.png"
import postresqlLogo from "/icons/postresql-logo.png"


import "../css/Description.css"


const Description = function(){


    return<>

    <div className = 'desc-container'>


        <div className = "desc-info">

            <div className = 'desc-title'>
                <img src = {dotIcon} 
                alt="Dot Icon" loading="lazy" />
                <h6>FULL STACK DEVELOPER & SEO ANALYST</h6>

            </div>


            <div className="desc-texts">
                <h4>
                    I FOCUS ON BUILDING TECH SOLUTIONS
                </h4>
                <p>
                    I am Jibare, a Full Stack Developer 
                    an SEO Analyst, passionate about building 
                    fast, scalable and user-focused softwares
                </p>
            </div>

            <div className = 'desc-btns'>
                <button>
                    View My Works
                    <img src = {upperRightIcon} 
                    alt="View my works"  loading="lazy"/>
                </button>
                <button className = 'download-btn'>
                    Download CV 
                    <img src = {downloadIcon} 
                    alt="Download CV" loading="lazy" />
                </button>
            </div>

        </div>


        <div className = "desc-image">
                <img src = {myImage} alt="My Image"
                    loading="lazy"
                />
                <div className = "desc-available">
                    <img src = {dotIcon} alt="Dot Icon" 
                        loading="lazy"
                    />
                    <p>Available for Freelance</p>
                </div>
        </div>
        </div>


        <ul className = "desc-skills">
            <li>
                <img src = {reactLogo} 
                alt="React Logo" loading="lazy" />
                <p>React</p>
            </li>

            <li>
                <img src = {typescriptLogo} 
                alt="Typescript Logo" loading="lazy" />
                <p>Typescript</p>
            </li>

            <li>
                <img src = {taiwindLogo} 
                alt="Taiwind Logo" loading="lazy" />
                <p>Taiwind</p>
            </li>

            <li>
                <img src = {djangoLogo} 
                alt="DJango Logo" loading="lazy" />
                <p>Django</p>
            </li>

            <li>
                <img src = {postresqlLogo} 
                alt="Postresql Logo" loading="lazy" />
                <p>PostreSQL</p>
            </li>
        </ul>
    
    </>
}


export default Description;