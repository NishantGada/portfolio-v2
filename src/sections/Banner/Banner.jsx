import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section class="banner" id="banner">
      <div class="text-container">
        <p id="constantly-updating">const update;</p>
        <div>
          <p>Hi, my name is</p>
          <p id="name-text">Nishant Gada</p>
          <p><i>// Software Engineer</i></p>
        </div>
      </div>
      <div class="action-buttons-container">
        <a href="#about" class="btn">about me</a>
        {/* <a href="https://nishant-gada-resume.s3.us-east-1.amazonaws.com/resume.pdf" target="_blank" class="btn">resume</a> */}
      </div>
    </section>
  )
}
