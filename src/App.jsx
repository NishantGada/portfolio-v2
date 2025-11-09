import { useState } from 'react'
import Navbar from './sections/Navbar/Navbar'
import Banner from './sections/Banner/Banner'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'
import Projects from './sections/Projects/Projects'
import Education from './sections/Education/Education'
import Contact from './sections/Contact/Contact'
import BackToTopButton from './components/BackToTopButton/BackToTopButton'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <BackToTopButton />
    </>
  )
}

export default App
