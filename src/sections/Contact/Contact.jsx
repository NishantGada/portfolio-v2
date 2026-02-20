import React from 'react';
import './Contact.css';
import leetCodeIcon from '../../assets/icons/leetcode.png';

const SOCIALS = [
  {
    href: 'https://github.com/NishantGada/',
    icon: 'fa fa-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nishant-gada/',
    icon: 'fa fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/nishantgada_/',
    icon: 'fa fa-instagram',
    label: 'Instagram',
  },
];

const LEETCODE = [
  { href: 'https://leetcode.com/u/nishantgada/', label: 'Python' },
  { href: 'https://leetcode.com/u/ngada/', label: 'Java' },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Get in Touch</h2>

      <a className="contact__email" href="mailto:nishantgada01@gmail.com">
        nishantgada01@gmail.com
      </a>

      <div className="contact__socials">
        {SOCIALS.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="contact__icon">
            <i className={`${icon} contact-icon`} aria-hidden="true" />
          </a>
        ))}

        {LEETCODE.map(({ href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__icon contact__leetcode" aria-label={`LeetCode ${label}`}>
            <img src={leetCodeIcon} alt="" />
            <span>{label}</span>
          </a>
        ))}
      </div>

      <p className="contact__location">📍 United States</p>
    </section>
  );
}