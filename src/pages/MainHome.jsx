import React from 'react'
import Home from '../components/sections/Home'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import NavigationBar from '../components/NavigationBar';
import { useState } from 'react'

function MainHome() {
  return (
    <div>
        <NavigationBar/>
        <div className= "mt-16">
           <Home /> 
            <About />
            <Projects />
            <Contact />
        </div>

    </div>
  );
}  

export default MainHome;