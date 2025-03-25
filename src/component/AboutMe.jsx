import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/AboutMe.css';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('about'); // Default to 'about' tab

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <h1>A Simple Portfolio</h1>
            <h2>Hello My Name Is Felix Tjong, I am currently learning and improving my front-end development abilities.</h2>
          </div>
        );
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />; 
      default:
        return null;
    }
  };

  const navigationRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set('.tab-list', {
      visibility: 'hidden',
      scale: 2,
      y: 0,
    });
    tl.set('.wrapper', {
      visibility: 'hidden',
    });
    tl.set('.content', {
      visibility: 'hidden',
      y: 0,
    });
    tl.set('.navigation', {
      visibility: 'hidden',
    });

    tl.to('.wrapper', {
      visibility: 'visible',
      ease: 'power2.out',
    })
      .to('.tab-list', {
        visibility: 'visible',
        scale: 1,
      })
      .to('.navigation', {
        visibility: 'visible',
        y: '20px',
      })
      .to('.content', {
        visibility: 'visible',
        y: '20px',
      });

    navigationRefs.current.forEach((navItem) => {
      if (navItem) {
        navItem.addEventListener('mouseenter', () => gsap.to(navItem, { scale: 1.2, duration: 0.3 }));
        navItem.addEventListener('mouseleave', () => gsap.to(navItem, { scale: 1, duration: 0.3 }));
      }
    });

    return () => {
      navigationRefs.current.forEach((navItem) => {
        if (navItem) {
          navItem.removeEventListener('mouseenter', () => gsap.to(navItem, { scale: 1.2, duration: 0.3 }));
          navItem.removeEventListener('mouseleave', () => gsap.to(navItem, { scale: 1, duration: 0.3 }));
        }
      });
    };
  }, []);

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='tab-list'>
          <div className='information'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Placeholder" />
            <p>Felix Tjong</p>
            <p style={{ fontStyle: 'italic' }} className='profesion'>front-end developer</p>
          </div>
          <div className="navigation">
            <p onClick={() => setActiveTab('about')} ref={(el) => (navigationRefs.current[0] = el)}>About Me</p>
            <p onClick={() => setActiveTab('skills')} ref={(el) => (navigationRefs.current[1] = el)}>Skills</p>
            <p onClick={() => setActiveTab('education')} ref={(el) => (navigationRefs.current[2] = el)}>Education</p>
            <p onClick={() => setActiveTab('contact')} ref={(el) => (navigationRefs.current[3] = el)}>Contact</p>
          </div>
        </div>
        <div className='content'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
