import React from 'react'
import './About.css'
import about from '../assets/Images/about.png'
import play_icon from '../assets/Images/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt='' className='about'/>
            <img src={play_icon} alt='' className='play_icon'/>
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing tomorrow's leaders today</h2>
          <p>We envision a world where knowledge is the cornerstone of progress and where our graduates 
            are equipped to lead and inspire in a rapidly changing global landscape.</p>
          <p>We aim to be a beacon of learning, research, and creativity, continually pushing the boundaries
             of what is possible.</p>
          <p>We are deeply committed to making a positive impact on our local and global communities.
             Through service-learning programs, internships, and outreach initiatives, our students and faculty
              engage with real-world issues, fostering a spirit of civic responsibility and global citizenship.</p>
       
        </div>
      
    </div>
  )
}

export default About
