import { useEffect, useState } from 'react';

const Hero = () => {
  const words = ["Frontend Dev.", "React Specialist.", "UI/UX Designer."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="hero-section fade-in-up">
      <div className="portfolio-card">
        
        {/* Chap tomon: Premium blended rasm */}
        <div className="card-left">
          <img 
            src="MyPhoto.jpg" 
            alt="Frontend Developer" 
            className="card-profile-img"
          />
        </div>

        {/* O'ng tomon: Premium kontent */}
        <div className="card-right">
          <div>
            <span className="badge">AVAILABLE FOR WORK</span>
          </div>
          
          <h1 className="card-title">
            Hi, I am <br />
            <span className="typing-text">
              {words[index].substring(0, subIndex)}
              <span className="cursor-blink">|</span>
            </span>
          </h1>
          
          <p className="hero-p">I know modern web development</p>
          
          <div className="hero-buttons">
            <button className="btn-primary">VIEW PROJECTS</button>
            <button className="btn-secondary">CONTACT ME</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;