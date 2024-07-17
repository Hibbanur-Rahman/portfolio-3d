
import ThreeScene from './components/threeScene'
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Tech from './components/Tech';
import Works from './components/works';
import StarsCanvas from './components/canvas/Stars';


const App=()=> {

  return (
    <div className='relative z-0 bg-primary'>
      <div className="bg-hero-pattern bg-cover bg-no-rerpeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <Education/>
      <Socials/>
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>

      </div>
    </div>
  )
}

export default App
