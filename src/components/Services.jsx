

import dotIcon from "/icons/dotIcon.png"
import seoIcon from "/icons/seo_icon.png"
import codeIcon from "/icons/code_icon.png"
import designIcon from "/icons/design_icon.png"
import webIcon from "/icons/web_icon.png"
import rightIcon from "/icons/right-icon.png"



import "../css/Services.css"



const Services = function(){

    return<>

        <div className = 'services-container'>

            <button>
                <img src = {dotIcon} 
                alt="Dot Icon" loading="lazy" />
                WHAT I DO
            </button>

            <h3>Services I Offer</h3>




            <div className = 'services-items'>


                <div className = 'item web-dev-item'>
                    <div className="icon-container">
                    <img src = {webIcon} 
                    alt="Web development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>Web Development</h5>
                        <p>
                            Custom websites and applications built
                            with modern technologies.
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />


                    <div className="modal-container">
                        DONT SHOW YET
                    </div>
                </div>


                <div className = 'item seo-item'>
                    <div className="icon-container">
                    <img src = {seoIcon} 
                    alt="SEO icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>SEO Analysis</h5>
                        <p>
                            Technical SEO to help your business
                            rank accross search engines and LLMs, 
                            and help beat your competitors
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />

                    <div className="modal-container">
                        DONT SHOW YET
                    </div>
                </div>


                <div className = 'item api-dev-item'>
                    <div className="icon-container">
                    <img src = {codeIcon} 
                    alt="API development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>API Development</h5>
                        <p>
                            RESTful APIs and intergration for seamless
                            functionalities.
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />

                    <div className="modal-container">
                        DONT SHOW YET
                    </div>
                </div>


                <div className = 'item design-item'>
                    <div className="icon-container">
                    <img src = {designIcon} 
                    alt="Web development icon" loading="lazy"/>
                    </div>
                    <div className = 'text-container'>
                        <h5>WEB & APP Designs</h5>
                        <p>
                            Good and modern designs that encourages users 
                            to stay longer and are easy to use
     
                        </p>
                    </div>
                    <img src={rightIcon} 
                    alt="Right Arrow Icon" loading="lazy" />

                    <div className="modal-container">
                        DONT SHOW YET
                    </div>
                </div>





            </div>

        </div>
    </>
}

export default Services;