import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section class="projects" id="projects">
      <h2>Projects</h2>
      <div class="grid-container">
        <div class="project" id="project1">
          <h2>ComfortZone <span>🛠️</span></h2>
          <p><i>Tech Stack: Python, Flask, MySQL</i></p>
          <p>
            A project that I think would be relevant to many. This is a toilet aggregator/ searching app that
            would allow the user to - find a nearby toilet, rate it on the application, add its pictures, and further
            information. This would allow for better accessibility to toilets, comfort, and hygiene for everyone.
          </p>
          <a class="github-links" href="https://github.com/NishantGada/comfort-zone-flask-backend" target="_blank">View on
            Github</a>
        </div>
        <div class="project" id="project2">
          <h2>Jiraffe</h2>
          <p><i>Tech Stack: Java, Spring Boot, Hibernate, SQL</i></p>
          <p>
            Developed a bug tracking application with a user-friendly JSP interface, implementing role-based
            authorization to streamline bug reporting, assignment, and tracking while reducing unauthorized
            actions. Leveraged Hibernate ORM and DAO patterns for efficient data management and real-time
            updates, and designed an advanced dashboard with filtering and sorting capabilities.
          </p>
          <a class="github-links" href="https://github.com/NishantGada/bug-tracker" target="_blank">View on
            Github</a>
        </div>
        <div class="project" id="project3">
          <h2>BostonTown</h2>
          <p><i>Tech Stack: React, Node, Express, MongoDB</i></p>
          <p>
            Led a team of 4 to develop a Boston-based listing website using the MERN stack, featuring over
            300,000 properties for improved apartment search and connecting users and agents conveniently.
            Designed a user reporting feature with an interactive heat map, for increased trust and informed
            decision-making.
          </p>
          <a class="github-links" href="https://github.com/NishantGada/BostonTown" target="_blank">View on
            Github</a>
        </div>
        <div class="project" id="project4">
          <h2>Unwritten</h2>
          <p><i>Tech Stack: Python, Django, JavaScript, CSS, Tailwind CSS, SQL</i></p>
          <p>
            Developed a full-stack blogging platform with a robust backend supporting blog creation, media
            uploads, and timestamp tracking. Designed advanced search and filtering features with improving
            navigation and content discovery.
          </p>
          <a class="github-links" href="https://github.com/NishantGada/unwritten" target="_blank">View on
            Github</a>
        </div>
      </div>
    </section>
  )
}
