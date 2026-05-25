import About from './sections/About/About'
import Banner from './sections/Banner/Banner'
import Contact from './sections/Contact/Contact'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import More from './sections/More/More'
import Navbar from './sections/Navbar/Navbar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <More />
      <Contact />
    </>
  )
}

export default App
