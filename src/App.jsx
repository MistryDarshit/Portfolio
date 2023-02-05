import React from 'react'
import { About, Bot, Contect, Footer, Hero, Hireme, Navbar, Project, Skill} from './components'
// import './App.css'
import rolly from 'rolly.js';
import AOS from 'aos';
import 'aos/dist/aos.css';




const App = () => {
  AOS.init();
  return (
    <>
    <div>
    <Navbar/>
    <Bot/>
    <Hero/>
    <About/>
    <Skill/>
    <Hireme/>
    <Project/>
    <Contect/>
    <Footer/>
    </div>
    </>
  )
}

export default App

