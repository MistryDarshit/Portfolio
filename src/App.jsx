import React from 'react'
import { About, Bot, Contect, Footer, Hero, Hireme, Navbar, Project, Skill} from './components'
import './App.css'
import rolly from 'rolly.js';




const App = () => {
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

