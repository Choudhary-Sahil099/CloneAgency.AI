import React,{useState} from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';
import ContactUs from './Components/ContactUs';
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <NavBar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  )
}

export default App
