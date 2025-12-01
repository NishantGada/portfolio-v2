import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav id="nav">
      <div className="toggle">
        <div className="menu" onClick={handleMenuClick}>
          <i className="fa fa-bars burger-menu" aria-hidden="true"></i>
        </div>
      </div>

      <ul className={isActive ? 'active' : ''}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#more">More about me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
