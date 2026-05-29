import React from 'react';
import './About.css';

const About = () => {
  // Texnologiyalaringiz ro'yxati (xohlasangiz ko'paytirishingiz mumkin)
  const skills = [
    { name: "JavaScript (ES6+)", level: "90%" },
    { name: "React.js / Next.js", level: "85%" },
    { name: "TypeScript", level: "75%" },
    { name: "CSS3 / TailwindCSS", level: "95%" },
    { name: "UI/UX Design (Figma)", level: "80%" },
    { name: "Git / GitHub", level: "85%" }
  ];

  return (
    <div className="about-section fade-in-up">
      <div className="about-container">
        
        {/* Sarlavha qismi */}
        <div className="about-header">
          <span className="badge">MY STORY</span>
          <h2>About Me</h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          {/* Chap tomon: Matnli ma'lumot */}
          <div className="about-text-block">
            <p className="about-lead">
              I am a passionate <strong>Frontend Developer</strong> and <strong>UI/UX Designer</strong> dedicated to crafting beautiful, pixel-perfect, and highly interactive web experiences.
            </p>
            <p className="about-description">
              My journey into web development started with a curiosity about how things work on the internet. Today, I specialize in building fast, responsive, and user-centric web applications using modern technologies. I bridge the gap between design and code, ensuring that every project not only looks stunning but also performs flawlessly.
            </p>
            
            {/* Kichik info-kartalar */}
            <div className="info-stats">
              <div className="stat-box">
                <h3>15+</h3>
                <p>Projects Done</p>
              </div>
              <div className="stat-box">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          {/* O'ng tomon: Skills (Ko'nikmalar) progress barlari bilan */}
          <div className="about-skills-block">
            <h3>My Skills & Tools</h3>
            <p className="skills-subtitle">Technologies I use to bring ideas to life:</p>
            
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    {/* Progress liniyasi */}
                    <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;