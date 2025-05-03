import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import '../css/Contact.css';

function Contact() {
  const wrapperRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(wrapperRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(wrapperRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }


  useEffect(() => {
    gsap.from(wrapperRef, {
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    gsap.to(wrapperRef, {
      y: 10,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);


  
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <p>This is some of my social media that u can use to contact me</p>
      <div className="contact-wrapper hoveranimation">
        <div
          ref={wrapperRef}
          className='contact-info-wrapper'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="mailto:felixlix537@gmail.com">
            <img src="/gmail.png" alt="Gmail" className="contact-image" />
          </a>
        </div>
        <div
          ref={wrapperRef}
          className='contact-info-wrapper'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://wa.me/087809276292">
            <img src="/whatsapp.png" alt="Gmail" className="contact-image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;