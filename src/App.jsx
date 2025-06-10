import React, { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Programs } from './Components/Programs/Programs';
import { Title } from './Components/Title/Title';
import { About } from './Components/About/About';
import { Campus } from './Components/Campus/Campus';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Videoplayer } from './Components/Videoplayer/Videoplayer';

const App = () =>{

  const [playState, setPlayState] = useState(false);

  return(
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='Our Program' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Campus Photo' />
      <Campus />
      <Title subTitle='Testimonials' title='What Student Says' />
      <div className="container">
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App;