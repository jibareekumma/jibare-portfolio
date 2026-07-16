
import { Routes, Route } from "react-router-dom"
import Intro from "./components/Intro"

import MoreAboutMe from "./components/MoreAboutMe"
import Services from "./components/Services"



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro/>} />
         <Route path="/more-about-me" element={<MoreAboutMe/>} />
         <Route path="/services" element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
