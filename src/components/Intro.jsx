import Header from "./Header";
import Description from "./Description";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Contact from "./Contact";
import SidePanel from "./SidePanel";
import Footer from "./Footer";

import { useScrollVars, useReveal } from "../hooks/useScrollEffects";

import "../css/Intro.css";

const Intro = function(){

    useScrollVars();
    useReveal();

    return <div className="app-shell">
        <Header/>
        <main className="main-panel">
            <Description/>
            <Projects/>
            <AboutMe/>
            <Services/>
            <Contact/>
            <Footer/>
        </main>
        <SidePanel/>
    </div>
}

export default Intro;
