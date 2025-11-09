import React, { useState } from 'react';
import './Experience.css';
import { experiences } from '../../utils/data/experience';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="accordion">
        {experiences.map((exp, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <p>{exp.title}</p>
                <p className="experience-company-name">{exp.company}</p>
              </div>
              <span className="duration">{exp.duration}</span>
            </button>
            <div className="accordion-body">
              <ul>
                {exp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
