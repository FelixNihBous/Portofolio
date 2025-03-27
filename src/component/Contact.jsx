import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import '../css/Contact.css';

function Contact() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.from(wrapperRef.current, {
      x: -100, // Start 100 pixels to the left
      opacity: 0, // Start fully transparent
      duration: 0.8, // Animation duration
      ease: 'power3.out', // Easing function
    });
  }, []); // Run this effect only once on mount

  const handleMouseEnter = () => {
    gsap.to(wrapperRef.current, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(wrapperRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <>
      <div className='contact-container'>
        <h1>Contact</h1>

        <div className="contact-wrapper">
          <div
            ref={wrapperRef}
            className='contact-info-wrapper'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/gmail.png" alt="" className="contact-image" />
            <p className="contact-email">felixlix537@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;