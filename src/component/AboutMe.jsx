import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../css/AboutMe.css';
import Skills from './Skills';
import Education from './Education';
import ProjectList from './ProjectList'
import Description from './Description';
import Contact from './Contact';
import { TypeAnimation } from 'react-type-animation';


function AboutMe() {
  const [activeTab, setActiveTab] = useState('about');
  const [isNavOpen, setIsNavOpen] = useState(true);
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.set('.tab-list', { clearProps: 'all' });
      return;
    }
    if (isAndroid) {
      gsap.set('.tab-list', { scale: isNavOpen ? 1 : 0, opacity: isNavOpen ? 1 : 0, pointerEvents: isNavOpen ? 'auto' : 'none' });
      return;
    }
    if (isNavOpen) {
      gsap.to('.tab-list', { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out', pointerEvents: 'auto' });
    } else {
      gsap.to('.tab-list', { scale: 0, opacity: 0, duration: 0.5, ease: 'power2.in', pointerEvents: 'none' });
    }
  }, [isNavOpen, isMobile, isAndroid]);

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
        <div className="nav-toggle" onClick={toggleNav}>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line ${isNavOpen ? 'open' : ''}`}></div>
        </div>

          <div className={`tab-list ${isNavOpen ? 'active' : ''}`}>
          <div className='information'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Placeholder" />
            <p>Felix Tjong</p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'front',
                1000,
                'front-end',
                1000,
                'front-end developer',
                1000,

              ]}
              speed={50}
              style={{ fontStyle: 'italic' }}
              className='profesion'
              repeat={Infinity}
            />
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