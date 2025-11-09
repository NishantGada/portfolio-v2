import React, { useState } from 'react';
import './Experience.css';
import { experiences } from '../../utils/data/experience';

export default function Experience() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>

      <div className="accordion">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndexes.includes(index) ? 'active' : ''}`}
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
