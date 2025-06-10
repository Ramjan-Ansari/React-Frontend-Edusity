import React, { useState } from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import 'dotenv/config'

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "807be6fe-da46-4d91-970d-6c64cb2f5bdb");
  
      const response = await fetch(process.env.API_WEB3_KEY, {
        method: "GET",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact from or find our contact information below. Your feedback,
                questions, and suggesting are important to us as we strive to provede wxceptional service to our university commnity.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> coder@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +1 234567890</li>
                <li><img src={location_icon} alt="" /> Patna bihar, india</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onsubmit={onSubmit} >
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter your name' required />
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" id="" placeholder='Enter your Mobile No.' required />
                <label htmlFor="">Write your message here</label>
                <textarea name=""  rows="6" id="" placeholder='Enter your message...' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span> {result} </span>
        </div>
    </div>
  )
}
