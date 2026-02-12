import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = ({setPlayState}) => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate sed 
                necessitatibus soluta provident pariatur fugit, debitis, velit sint voluptas possimus,
             dolorum vel. Officiis saepe praesentium eligendi dolor in enim!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate sed 
                necessitatibus soluta provident pariatur fugit, debitis, velit sint voluptas possimus,
             dolorum vel. Officiis saepe praesentium eligendi dolor in enim!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate sed 
                necessitatibus soluta provident pariatur fugit, debitis, velit sint voluptas possimus,
             dolorum vel. Officiis saepe praesentium eligendi dolor in enim!</p>
        </div>
    </div>
  )
}
