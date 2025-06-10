import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link, Element } from 'react-scroll';

export const Navbar = () => {

  const [sticy, setStiky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setStiky(true): setStiky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true); 
  }
  return (
    <nav className={`container ${sticy? 'dark-nav': ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'': 'mode-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li> 
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

