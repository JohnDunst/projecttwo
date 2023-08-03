import React from 'react';

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='headerConatiner'>
      <h1>Jonathan Dunst</h1>
      
   
      <p>Software Engineer | Frontend Developer</p>
  
        
        <ul className='linkContainer'>
        
          <li>
            <a href="#about" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
        </div>
    </div>
  );
};

export default Header;
