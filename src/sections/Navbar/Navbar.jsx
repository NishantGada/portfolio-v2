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
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#more">more about me</a></li>
        <li><a href="#contact">get in touch</a></li>
      </ul>
    </nav>
  );
}
