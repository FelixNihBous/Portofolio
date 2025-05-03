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

  }, [isNavOpen]);

  const handleNavLinkClick = (tab) => {
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
            <a
              onClick={() => handleNavLinkClick('about')}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              About Me
            </a>
            <a
              onClick={() => handleNavLinkClick('skills')}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              Skills
            </a>
            <a
              onClick={() => handleNavLinkClick('education')}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              Education
            </a>
            <a
              onClick={() => handleNavLinkClick('contact')}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              Contact
            </a>
            <a
              onClick={() => handleNavLinkClick('projects')}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              Project Lists
            </a>
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
