import aervynPJ from "/photos/aervyn-pj.png"
import trackNestPJ from "/photos/tracknest-pj.png"
import mortagePJ from "/photos/mortage-pj.png"
import veltrixPJ from "/photos/vetrixz-pj.png"
import hospitalPJ from "/photos/hospital-pj.jpg"

import veyroPJ from "/photos/veyro_pj.png"

import "../css/Projects.css"
import { useState } from "react"

const projectsData = [

    {
      image: veyroPJ,
      title: "Shipment Tracking system",
      url: "https://github.com/jibareekumma/Hospital-Backend-management-system-Java-.git",
      description: "Full Stack platform to create and track shipments in real time, with an admin dashboard for hubs, routes and statuses",
      tags: ["Python", "SQLite", "React", "PostgreSQL", "Redis"]
  },

  {
      image: veltrixPJ,
      title: "Veltrix Ecommerce",
      url: "https://veltrixz.netlify.app",
      description: "React + Django ecommerce storefront with cart, sorting, and a component-driven design system.",
      tags: ["React", "PostgreSQL", "Django"]
  },

  
    {
        image: aervynPJ,
        title: "Aervyn",
        url: "https://aervyn.netlify.app",
        description: "A travel/vacation guide, that helps track flights, cars, hotels and their prices around the world and can help book them",
        tags: ["React", "Typescript", "TailwindCSS",
            "Django", "Supabase"]
    },

    {
      image: hospitalPJ,
      title: "Hospital Backend Management System",
      url: "https://github.com/jibareekumma/Hospital-Backend-management-system-Java-.git",
      description: "Java · JDBC · SQLite — Full backend architecture with role-based access, patient/staff/clinical modules",
      tags: ["Java", "SQLite", "JDBC"]
  },


    {
        image: trackNestPJ,
        title: "TrackNest",
        url: "https://tracknestt.netlify.app",
        description: "A project management app with real-time data sync and per-user data isolation.",
        tags: ["React", "Firebase", "Typescript", "Python"]
    },



    {
        image: mortagePJ,
        title: "Mortgage Calculator",
        url: "https://mortagepaymentcal.netlify.app",
        description: "A web app that helps users estimate mortgage payments and plan their finances.",
        tags: ["JavaScript", "Tailwind", "SASS"]
    },


]

const arrowOut = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9"/>
</svg>

const Projects = function(){

    const [showAllProjects, setShowAllProjects] = useState(false)

    const displayedProjects = showAllProjects ? projectsData : projectsData.slice(0, 3)

    const handleSpotlight = function(e){
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }

    return<>

        <section className = 'projects-section'
            id="projects"
        >

            <div className="section-head" data-reveal>
                <span className="section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="14" rx="2.5"/>
                        <path d="M8 21h8M12 18v3M7 9l2.5 2L7 13M12 13h4"/>
                    </svg>
                </span>
                <h3>Featured Projects</h3>
                <span className="section-line"></span>
                <button className="view-all-btn"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                >
                    {showAllProjects ? "Show less" : "View all projects"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                </button>
            </div>

            <div className="projects-grid">
                {displayedProjects.map(function(project, index){
                    const isRepo = project.url.includes("github.com")
                    const sourceUrl = project.source || (isRepo ? project.url : null)
                    const liveUrl = isRepo ? null : project.url

                    return (
                        <article className={index < 3 ? "project-card" : "project-card late"}
                            key={project.title}
                            onMouseMove={handleSpotlight}
                            data-reveal={index < 3 ? true : undefined}
                            style={{ "--i": index }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                                {index < 3 && <span className="featured-pill">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l2.4 6.6L21 10l-5.2 4.2L17.5 21 12 17.3 6.5 21l1.7-6.8L3 10l6.6-1.4z"/>
                                    </svg>
                                    Featured
                                </span>}
                            </div>
                            <div className="project-text">
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <div className="tag-row">
                                    {project.tags.map(function(tag, tagIndex){
                                        return <span className="tag" key={tagIndex}>{tag}</span>
                                    })}
                                </div>
                                <div className="project-links">
                                    {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                        Live Demo {arrowOut}
                                    </a>}
                                    {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                                        Source Code {arrowOut}
                                    </a>}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>

        </section>
    </>
}

export default Projects;
