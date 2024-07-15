import React from 'react'
import './Hero.css'
import arrow from '../assets/Images/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>
            Welcome to Studysphere, where education meets innovation! 
            Our platform offers comprehensive resources and tools to enhance your learning experience.
            </p>
            <button className='btn'>Explore more <img src={arrow} alt=''/> </button>
        </div>
      
    </div>
  )
}

export default Hero
