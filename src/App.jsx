
import { Routes, Route } from "react-router-dom"
import Intro from "./components/Intro"

import MoreAboutMe from "./components/MoreAboutMe"



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Intro/>} />
         <Route path="/more-about-me" element={<MoreAboutMe/>} />
      </Routes>
    </>
  )
}

export default App
