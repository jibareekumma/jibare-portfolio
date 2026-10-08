import { useEffect, useState } from "react"

const prefersReducedMotion = function(){
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export const useScrollVars = function(){

    useEffect(function(){
        const root = document.documentElement
        const reduce = prefersReducedMotion()
        let lastY = window.scrollY
        let tilt = 0
        let running = false

        const write = function(){
            const maxScroll = root.scrollHeight - window.innerHeight
            const y = window.scrollY
            const delta = y - lastY
            lastY = y

            const progress = maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0
            const heroProgress = reduce ? 0 : Math.min(y / (window.innerHeight * 0.9), 1)
            const target = Math.max(-1, Math.min(1, delta / 36))
            tilt += (target - tilt) * 0.12

            root.style.setProperty("--scroll-progress", progress.toFixed(4))
            root.style.setProperty("--hero-progress", heroProgress.toFixed(4))
            root.style.setProperty("--scroll-tilt", reduce ? "0" : tilt.toFixed(4))

            return Math.abs(tilt) > 0.002 || delta !== 0
        }

        const loop = function(){
            if(write()){
                requestAnimationFrame(loop)
            } else {
                running = false
            }
        }

        const start = function(){
            if(!running){
                running = true
                requestAnimationFrame(loop)
            }
        }

        write()
        window.addEventListener("scroll", start, { passive: true })
        window.addEventListener("resize", start)

        return function(){
            window.removeEventListener("scroll", start)
            window.removeEventListener("resize", start)
        }
    }, [])
}

export const useReveal = function(){

    useEffect(function(){
        const nodes = document.querySelectorAll("[data-reveal]")

        if(prefersReducedMotion()){
            nodes.forEach(function(node){
                node.removeAttribute("data-reveal")
            })
            return
        }

        const observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(!entry.isIntersecting){
                    return
                }
                const node = entry.target
                observer.unobserve(node)
                node.setAttribute("data-reveal", "in")
                setTimeout(function(){
                    node.removeAttribute("data-reveal")
                }, 2000)
            })
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" })

        nodes.forEach(function(node){
            observer.observe(node)
        })

        return function(){
            observer.disconnect()
        }
    }, [])
}

export const useScrollSpy = function(ids){
    const [active, setActive] = useState(ids[0])

    useEffect(function(){
        const sections = ids
            .map(function(id){ return document.getElementById(id) })
            .filter(Boolean)

        const observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    setActive(entry.target.id)
                }
            })
        }, { rootMargin: "-35% 0px -55% 0px" })

        sections.forEach(function(section){
            observer.observe(section)
        })

        const checkEdges = function(){
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6
            if(atBottom){
                setActive(ids[ids.length - 1])
            } else if(window.scrollY < 80){
                setActive(ids[0])
            }
        }

        window.addEventListener("scroll", checkEdges, { passive: true })

        return function(){
            observer.disconnect()
            window.removeEventListener("scroll", checkEdges)
        }
    }, [])

    return active
}
