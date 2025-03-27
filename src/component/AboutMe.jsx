import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/AboutMe.css';
import Skills from './Skills';
import Education from './Education';
import ProjectList from './ProjectList'
import Description from './Description';
import Contact from './Contact';

function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const activeTabRef = useRef(activeTab);
  const getActiveTab = useRef(() => activeTabRef.current);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("toggleNav called, isNavOpen:", !isNavOpen);
  };

  const renderContent = () => {
    console.log("renderContent called, activeTab:", getActiveTab.current());
    switch (getActiveTab.current()) {
      case 'about':
        return <Description />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <ProjectList />
      default:
        return null;
    }
  };

  const navigationRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set('.tab-list', { visibility: 'hidden', scale: 2, y: 0 });
    tl.set('.wrapper', { visibility: 'hidden' });
    tl.set('.content', { visibility: 'hidden', y: 0 });
    tl.set('.navigation', { visibility: 'hidden' });

    tl.to('.wrapper', { visibility: 'visible', ease: 'power2.out' })
      .to('.tab-list', { visibility: 'visible', scale: 1 })
      .to('.navigation', { visibility: 'visible', y: '20px' })
      .to('.content', { visibility: 'visible', y: '20px' })

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

  const handleNavLinkClick = (tab) => {
    setIsNavOpen(false);
    setActiveTab(tab);
    activeTabRef.current = tab;
    console.log("handleNavLinkClick called, tab:", tab);
  };

  useEffect(() => {
    console.log("activeTab changed:", activeTab);
    setTimeout(() => {
      renderContent();
    }, 0);
  }, [activeTab]);

  return (
    <div className='container'>
      <div className='wrapper'>
        {/* Mobile Navigation Button */}
        <div className="nav-toggle" onClick={toggleNav}>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
        </div>

        {/* Tab List (Header) */}
        <div className={`tab-list ${isNavOpen ? 'active' : ''}`} key={isNavOpen ? 'open' : 'closed'}>
          <div className='information'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Placeholder" />
            <p>Felix Tjong</p>
            <p style={{ fontStyle: 'italic' }} className='profesion'>front-end developer</p>
          </div>
          <div className="navigation">
            <p onClick={() => handleNavLinkClick('about')} ref={(el) => (navigationRefs.current[0] = el)}>About Me</p>
            <p onClick={() => handleNavLinkClick('skills')} ref={(el) => (navigationRefs.current[1] = el)}>Skills</p>
            <p onClick={() => handleNavLinkClick('education')} ref={(el) => (navigationRefs.current[2] = el)}>Education</p>
            <p onClick={() => handleNavLinkClick('contact')} ref={(el) => (navigationRefs.current[3] = el)}>Contact</p>
            <p onClick={() => handleNavLinkClick('projects')} ref={(el) => (navigationRefs.current[4] = el)}>Project Lists</p>
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