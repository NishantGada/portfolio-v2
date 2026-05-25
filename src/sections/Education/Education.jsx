import React from 'react';
import './Education.css';

const EDUCATION = [
  {
    degree: "Master of Science in Computer Software Engineering",
    school: "Northeastern University",
    location: "Boston, MA, USA",
    date: "Sep 2023 — Dec 2025",
  },
  {
    degree: "Bachelor of Technology in Electronics & Telecommunication Engineering",
    school: "University of Mumbai",
    location: "Mumbai, India",
    date: "Jun 2017 — Jun 2021",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <ul className="education__list">
        {EDUCATION.map((entry, i) => (
          <li className="education__item" key={i}>
            <span className="education__date">{entry.date}</span>
            <div className="education__body">
              <h3 className="education__degree">{entry.degree}</h3>
              <p className="education__school">{entry.school}</p>
              <p className="education__location">{entry.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
