import React from 'react';
import './About.css';

export default function About() {
  return (
    <section class="about" id="about">
      <h2>
        About me
      </h2>

      <div class="content">
        <div class="contentBox">
          <p>
            Software Engineer with 3 years of experience working across start-ups, mid-size companies, fintech
            companies, and large-scale enterprises, where I’ve owned, built, launched, and managed financial products, user-centric
            applications, financial dashboards, enterprise software, and mobile applications.
          </p>
          <p>
            Ultra curious about AI, AI Agents, Cloud Computing, and Software Engineering and eager to augment my
            knowledge, experience and skills in the professional world.
          </p>
          <p>
            Skilled in Python, Java, JavaScript/TypeScript, React, SQL/NoSQL, constructing cloud-focused infrastructure
            using AWS and GCP, and building CI/CD pipelines. Proven experience building scalable enterprise standard
            applications and improving system efficiency and reliability in fast-paced, dynamic environments.
          </p>
        </div>

        <div class="self_image">
          <img src="./assets/img/self-no-bg.jpeg" alt="" />
        </div>
      </div>
    </section>
  )
}
