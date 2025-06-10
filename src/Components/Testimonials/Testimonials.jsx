import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

export const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForword = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackword = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    

  return (
    <div className='testimonial'>
        <img src={next_icon} alt="" className="next-btn" onClick={slideForword} />
        <img src={back_icon} alt="" className="back-btn" onClick={slideBackword}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor sint dolores molestiae aut animi ad saepe impedit eveniet eos, quas veniam facere repellendus iusto sunt sequi vitae architecto asperiores!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor sint dolores molestiae aut animi ad saepe impedit eveniet eos, quas veniam facere repellendus iusto sunt sequi vitae architecto asperiores!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor sint dolores molestiae aut animi ad saepe impedit eveniet eos, quas veniam facere repellendus iusto sunt sequi vitae architecto asperiores!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Willian Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolor sint dolores molestiae aut animi ad saepe impedit eveniet eos, quas veniam facere repellendus iusto sunt sequi vitae architecto asperiores!</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}
