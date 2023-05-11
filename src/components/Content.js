import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
function Content() {
  return (
    <div>
        <Routes>
            <Route path='' element={<Home/>}></Route>
            <Route path = 'About' element={<About/>}></Route>
            <Route path = 'Skills' element={<Skills/>}></Route>
            <Route path = 'Education' element={<Education/>}></Route>
            <Route path = 'Experience' element={<Experience/>}></Route>
            <Route path = 'Work' element={<Work/>}></Route>
            <Route path = 'Contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default Content
