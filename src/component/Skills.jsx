import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Skills.css';
import ChangingProgressProvider from '../Scripts/ChanggingProgress';

function Skills() {
  const skillData = [
    {
      percentage: 60,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/150px-HTML5_logo_and_wordmark.svg.png",
      alt: "HTML5",
      text: "HTML5",
    },
    {
      percentage: 60,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      alt: "CSS3",
      text: "CSS3",
    },
    {
      percentage: 50,
      imageUrl: "https://cdn.prod.website-files.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg",
      alt: "JavaScript",
      text: "JavaScript",
    },
    {
      percentage: 30,
      imageUrl: "https://icon.icepanel.io/Technology/svg/Python.svg",
      alt: "Python",
      text: "Python"
    },
    {
      percentage: 40,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
      alt: "React",
      text: "React"
    },
  ];

  return (
    <>
      <div className='container-wrapper'>

        <h1>Skills</h1>
        <p>I have studied several programming languages such as</p>
        <div className="skills-container">
          {skillData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <ChangingProgressProvider value={skill.percentage}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                      pathTransition: "stroke-dashoffset 0.5s ease 0s",
                    })}
                  />
                )}
              </ChangingProgressProvider>
              <img src={skill.imageUrl} alt={skill.alt} className="skill-image" />
              <p>{skill.text}</p>
              <p>{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;