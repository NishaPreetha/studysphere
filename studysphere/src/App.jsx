import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Programs from './Components/Programs.jsx'
import Title from './Components/Title.jsx'
import About from './Components/About.jsx'
import Campus from './Components/Campus.jsx'
import Testimonials from './Components/Testimonials.jsx'




const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <Programs/>
      <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What student says'/>
      <Testimonials/>
    </div>
  )
}

export default App

