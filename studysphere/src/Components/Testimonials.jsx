import React from 'react'
import './Testimonials.css'
import next_icon from '../assets/Images/next-icon.png'
import back_icon from '../assets/Images/back-icon.png'
import user_1 from '../assets/Images/user-1.png'
import user_2 from '../assets/Images/user-2.png'
import user_3 from '../assets/Images/user-3.png'
import user_4 from '../assets/Images/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn'/>
      <img src={back_icon} alt='' className='back-btn'/>
      <div className='slider'/>
      <ul>
        <li>
          <div className='slide'>
            <div className="user-info">
              <img src={user_1} alt=''/>
              <div>
                <h3>Mariya </h3>
                <span>StudySphere,USA</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className="user-info">
              <img src={user_2} alt=''/>
              <div>
                <h3>Alen </h3>
                <span>StudySphere,USA</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className="user-info">
              <img src={user_3} alt=''/>
              <div>
                <h3>Rose</h3>
                <span>StudySphere,USA</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='slide'>
            <div className="user-info">
              <img src={user_4} alt=''/>
              <div>
                <h3>Max</h3>
                <span>StudySphere,USA</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Testimonials;
