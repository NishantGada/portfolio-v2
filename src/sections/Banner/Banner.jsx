import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="text-container">
        <p id="constantly-updating">const update;</p>
        <div>
          <p>Hi, my name is</p>
          <p id="name-text">Nishant Gada</p>
          <p><i>// Software Engineer</i></p>
        </div>
        <div className="action-buttons-container">
          <a href="#about" className="btn">About me</a>
          {/* <a href="https://nishant-gada-resume.s3.us-east-1.amazonaws.com/resume.pdf" target="_blank" className="btn">Resume</a> */}
        </div>
      </div>
    </section>
  )
}
