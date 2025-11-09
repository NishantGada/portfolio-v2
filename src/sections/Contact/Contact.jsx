import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section class="contact" id="contact">
      <div>
        <h1>Contact</h1>
      </div>

      <div id="reach_me_email">
        <p><a href="">gada.ni@northeastern.edu</a></p>
      </div>

      <div id="sub-contact">
        <p>
          <span>
            <a href="https://www.instagram.com/nishantgada_/" target="_blank">
              <i class="fa fa-instagram" aria-hidden="true" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/nishant-gada/" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/NishantGada/" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </p >
        <p>Boston</p>
        <p>MA, USA.</p>
      </div >
    </section >
  )
}
