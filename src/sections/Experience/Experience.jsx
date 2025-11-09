import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section class="experience" id="experience">
      <h2>Experience</h2>

      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-header">
            <div>
              <p>Software Engineering Co-op</p>
              <p class="experience-company-name">Hometap</p>
            </div>
            <span class="duration">January 2025 to June 2025</span>
          </button>
          <div class="accordion-body">
            <ul>
              <li>
                Engineered core LMS migration services to third-party integrations using Python, Django REST Framework,
                React, and TypeScript to boost system reliability by 29% and user growth by 15%
              </li>
              <li>
                Developed CI/CD pipelines for staged deployments across 5+ cross-functional teams, cutting release time by
                20% with less than 2% post-release issues
              </li>
              <li>
                Contributed towards onboarding 3 new partners onto the Home Equity Dashboard to further support customer
                loan journey and management
              </li>
              <li>
                Drove static typing adoption using TypeScript and Pydantic, ensured code quality via 100+ code reviews,
                and introduced reusable design patterns
              </li>
              <li>
                Leveraged test-driven development to increase test coverage from 73% to 86% by adding unit tests,
                integration tests, and end-to-end tests using Pytest,
                Jest, and Cypress, preventing regression failures

              </li>
            </ul>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            <div>
              <p>Software Engineer</p>
              <p class="experience-company-name">Think360.ai (Think Analytics)</p>
            </div>
            <span class="duration">September 2021 to June 2023</span>
          </button>
          <div class="accordion-body">
            <ul>
              <li>
                Launched a Regulatory Audit Dashboard handling 3M+ customer records under strict government compliance,
                cutting service response time by 22%
              </li>
              <li>
                Bumped revenue by 27% by improving system performance using domain-driven design, Redis caching, and
                Python-based code optimizations
              </li>
              <li>
                Built a secure, high-throughput KYC microservice using Python, Flask, SQL, and AWS–reducing identity
                verification time and processing delays by 23%
              </li>
              <li>
                Boosted client funnel by 36% scaling the microservice across 3 major business verticals with the help of
                Docker, GitHub Actions, and Kafka
              </li>
              <li>
                Led bi-weekly demos across product, engineering, and design teams to align delivery timelines, preempt
                release bottlenecks, and ensure seamless go-lives
              </li>
              <li>
                Delivered a full-stack Loan Disbursal System (Python, Java, React, Redis, SQL/NoSQL, AWS) for 50k+
                customers, launching an MVP within 4 agile sprints
              </li>
            </ul>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            <div>
              <p>Associate Software Engineer</p>
              <p class="experience-company-name">Accenture</p>
            </div>
            <span class="duration">June 2021 to September 2023</span>
          </button>
          <div class="accordion-body">
            <ul>
              <li>
                Architected a cross-platform health analytics application using Python, Flask, GCP, and React Native;
                served 75K+ users and enabled real-time tracking of health metrics across Android and iOS applications
              </li>
              <li>
                Optimized SQL query response time from ~112 seconds to ~6 seconds through strategic indexing and
                optimization techniques, significantly improving data retrieval speed and overall user experience
              </li>
            </ul>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            <div>
              <p>Full Stack Development Intern</p>
              <p class="experience-company-name">Nirol</p>
            </div>
            <span class="duration">April 2020 to May 2020</span>
          </button>
          <div class="accordion-body">
            <ul>
              <li>
                Designed a TikTok style video sharing social network while managing a team of 5 interns using Python,
                Django, GraphQL, React, Redux
              </li>
              <li>
                Established core frontend and backend features via asynchronous Django services and Redux state management
                to track and display likes, comments, and follow/unfollow events to improve user interaction by 47%
              </li>
              <li>
                Wrote and optimized 20+ GraphQL APIs for user relationships and recommendation pipelines, leveraging data
                prefetching and query batching
              </li>
            </ul>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            <div>
              <p>Python Programming and Research Intern</p>
              <p class="experience-company-name">University of Mumbai</p>
            </div>
            <span class="duration">July 2019 to October 2019</span>
          </button>
          <div class="accordion-body">
            <ul>
              <li>
                Developed a robust Python pipeline to fetch and analyze thousands of tweets using the
                Twitter API, focusing on public reactions to the revocation of Article 370
              </li>
              <li>
                Performed advanced sentiment analysis using Python and NLP techniques, extracting meaningful
                insights from unstructured social media data.
              </li>
              <li>
                Created compelling visualizations with Matplotlib, highlighting trends and patterns in
                public opinion with clarity and precision
              </li>
              <li>
                Identified prominent thought leaders and influencers, providing a detailed assessment of
                citizens’ positive and negative attitudes toward the government’s action
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
