import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section class="contact" id="contact">
      <div>
        <h1>Contact</h1>
      </div>

      <div id="email">
        <a href="">gada.ni@northeastern.edu</a>
      </div>

      <div id="sub-contact">
        <div className="socials">
          <span>
            <a href="https://www.instagram.com/nishantgada_/" target="_blank">
              <i class="fa fa-instagram contact-icons" aria-hidden="true" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/nishant-gada/" target="_blank">
              <i class="fa fa-linkedin contact-icons" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/NishantGada/" target="_blank">
              <i class="fa fa-github contact-icons" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div >

      <div className="location">
        <p>Boston</p>
        <p>MA, USA.</p>
      </div>
    </section >
  )
}
