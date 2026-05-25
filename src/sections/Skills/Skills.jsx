import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="content">
        <div className="skill">
          <h2>Languages</h2>
          <p>C, C#, C++, Go/Golang</p>
        </div>
        <div className="skill">
          <h2>Front End</h2>
          <p>React, TypeScript, JavaScript, Angular, HTML, Next.js</p>
          <p>CSS, SCSS, Tailwind CSS, Ant Design, Material UI, Chakra UI, Shadcn, Figma</p>
        </div>
        <div className="skill">
          <h2>Back end</h2>
          <p>Python, Django REST Framework, Flask, FastAPI</p>
          <p>JavaSE, JavaEE, Spring, Spring Boot</p>
          <p>ASP.NET Core</p>
          <p>Nest.js, Node.js, Express</p>
        </div>
        <div className="skill">
          <h2>Mobile App Developement</h2>
          <p>React-Native, Flutter, Kotlin, Jetpack</p>
        </div>
        <div className="skill">
          <h2>Cloud</h2>
          <p>Amazon Web Services, Google Cloud Platform, Heroku, Netlify, Vercel</p>
        </div>
        <div className="skill">
          <h2>Database</h2>
          <p>SQL (MySQL, PostgreSQL)</p>
          <p>NoSQL (MongoDB, Firebase, Redis)</p>
        </div>
        <div className="skill">
          <h2>DevOps, CI/CD, and Infra</h2>
          <p>Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, Packer, Unix/Linux</p>
        </div>
        <div className="skill">
          <h2>Leadership</h2>
          <p>Communication, Vision, Management, and Belief. </p>
        </div>
      </div>
    </section>
  )
}
