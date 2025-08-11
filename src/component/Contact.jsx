import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import '../css/Contact.css';

function Contact() {
  const gmailRef = React.useRef(null);
  const whatsappRef = React.useRef(null);

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  useEffect(() => {
    gsap.from(gmailRef.current, {
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    gsap.to(gmailRef.current, {
      y: 10,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from(whatsappRef.current, {
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
    gsap.to(whatsappRef.current, {
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
          ref={gmailRef}
          className='contact-info-wrapper'
          onMouseEnter={() => handleMouseEnter(gmailRef)}
          onMouseLeave={() => handleMouseLeave(gmailRef)}
        >
          <a href="mailto:felixlix537@gmail.com">
            <img src="/gmail.png" alt="Gmail" className="contact-image" />
          </a>
        </div>
        <div
          ref={whatsappRef}
          className='contact-info-wrapper'
          onMouseEnter={() => handleMouseEnter(whatsappRef)}
          onMouseLeave={() => handleMouseLeave(whatsappRef)}
        >
          <a href="https://wa.me/+6287809276292">
            <img src="/whatsapp.png" alt="Whatsapp" className="contact-image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;