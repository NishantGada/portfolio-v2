import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section class="education" id="education">
      <h2>Education</h2>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-content">
            <h2>Master's of Science in Computer Software Engineering</h2>
            <p>Northeastern University</p>
            <p>Boston, MA, USA</p>
            <span class="timeline-date">September 2023 - December 2025</span>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-content">
            <h2>Bachelor of Technology in Electronics & Telecommunication Engineering</h2>
            <p>University of Mumbai</p>
            <p>Mumbai, India</p>
            <span class="timeline-date">June 2017 - June 2021</span>
          </div>
        </div>
      </div>
    </section>
  )
}
