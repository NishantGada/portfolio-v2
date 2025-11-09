import BackToTopButton from './components/BackToTopButton/BackToTopButton'
import About from './sections/About/About'
import Banner from './sections/Banner/Banner'
import Contact from './sections/Contact/Contact'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import Navbar from './sections/Navbar/Navbar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

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
