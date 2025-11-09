import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section class="skills" id="skills">
      <h2><strong>Skills</strong></h2>

      <div class="content">
        <div class="skill">
          <h2>Front End</h2>
          <p>React, TypeScript, JavaScript, Angular, HTML, Next.js</p>
          <p>CSS, SCSS, Bootstrap, Tailwind CSS, Ant Design, Material UI, Figma</p>
        </div>
        <div class="skill">
          <h2>Back end</h2>
          <p>Python, Django REST Framework, Flask, Fast API</p>
          <p>JavaSE, JavaEE, Spring, Spring Boot, Hibernate</p>
          <p>Next.js, Node.js, Express</p>
        </div>
        <div class="skill">
          <h2>Mobile App Developement</h2>
          <p>React-Native, Flutter, Swift</p>
        </div>
        <div class="skill">
          <h2>Cloud</h2>
          <p>Amazon Web Services, Google Cloud Platform, Heroku, Netlify, Vercel</p>
        </div>
        <div class="skill">
          <h2>Database</h2>
          <p>SQL (MySQL, PostgreSQL)</p>
          <p>NoSQL (MongoDB, Firebase, Redis)</p>
          <p>GraphQL</p>
        </div>
        <div class="skill">
          <h2>Leadership</h2>
          <p>Communication, Vision, Management and Belief. </p>
        </div>
        <div class="skill">
          <h2>DevOps & CI/CD</h2>
          <p>Docker, Kubernetes, Jenkins, Github Actions, Terraform</p>
        </div>
        <div class="skill">
          <h2>Languages</h2>
          <p>C, C#, C++, Go/Golang</p>
        </div>
      </div>
    </section>
  )
}
