export const experiences = [
  {
    title: "Software Engineer Co-op",
    company: "Hometap",
    duration: "January 2025 to June 2025",
    items: [
      "Contributed towards engineering core services for third-party integrations into our in-house Loan Management System (LMS) using Python, Django REST Framework, Pydantic, React, and TypeScript to boost system reliability, confidence, and expand service delivery across more states in the US",
      "Partnered with cross-functional teams to deliver staged migration updates across agile sprints with help of bi-weekly meetings, documentation, CI / CD pipelines, and monitored version control",
      "Regularly monitored Sentry events and logs to comprehend user behavior, identify bugs, and improve overall application health and test infrastructure",
      "Drove static typing adoption using TypeScript and Pydantic, ensured code quality via 80+ code reviews, clean code and design patterns ",
      "Leveraged test-driven development to increase test coverage by adding unit tests, integration tests, and end-to-end tests using Pytest and Cypress",
      "Further developed and maintained the Home Equity Dashboard for improved user experience and smoother third-party integrations"
    ]
  },
  {
    title: "Software Engineer",
    company: "Think360.ai (Think Analytics)",
    duration: "September 2021 to June 2023",
    items: [
      "Rebuilt a broken legacy KYC pipeline, owning end-to-end identity verification — OCR, documents, bank data, credit, criminal, and PEP checks – with composite OCR scoring across 2 in-house and 1 third-party API raising accuracy from ~30% to ~85%",
      "Recovered 35% of previously denied loan applicants by eliminating false positives and negatives in identity verification through optimized API calls across 6+ third-party integrations",
      "Cut KYC pipeline latency and AWS spend via Redis caching (TTL + LRU eviction) for high-frequency lookups, then decoupled the pipeline into a Kafka async layer with 3 vertical-specific consumer groups (Insurance, Legal, Business) — enabling replay, horizontal scaling, and new-client onboarding at flat infra cost",
      // "Scaled the microservice across 3 business verticals using Docker, Kafka-based asynchronous communication, and GitHub Actions CI/CD, resulting in a 36% improvement in the client conversion funnel",
      "Launched a Regulatory Audit Dashboard aggregating ~9M documents and loan metadata for 3M+ end-users into a single source of truth, increasing internal team query throughput by ~50% across product, QA, compliance, and legal",
      "Led bi-weekly demos across product, engineering, and design teams to align delivery timelines, preempt release bottlenecks, and ensure seamless go-lives",
      "Regularly conducted Product and POC demos for CXOs and business heads in order to ensure go-live readiness, compliance, and strategic releases",
      "Launched UpSell - a user-focused platform with multi-bank integration to upsell financial products to existing users",
      "Owned the user-facing OneApp (Loan Origination System) and a backend Loan Disbursal System, serving 3M+ end users - capturing the user data that fed the KYC pipeline and audit dashboard",

      // "Reconstructed a legacy KYC microservice to reduce identity verification time, validation, and processing delays by 23%",
      // "Drove a 27% revenue increase by introducing event-driven, AWS Lambda-based serverless workflows to offload non-critical processing, supplemented by caching and performance-focused architectural optimizations",
      // "Expanded this horizontally scalable microservice to support 3 business verticals by decoupling workflows with Kafka-based asynchronous communication and standardizing containerized deployments, driving a 36% improvement in client conversion",
      // "Launched a Regulatory Audit Dashboard handling 3M+ daily active users under strict government compliance, cutting service response time by 22%",
      // "Led bi-weekly demos across product, engineering, and design teams to align delivery timelines, preempt release bottlenecks, and ensure seamless go-lives",
      // "Delivered a full-stack Loan Origination System (LOS) using Python, FastAPI, React, Redis, PostgreSQL, AWS to serve 100k+ users within 4 agile sprints",
      // "Piloted an Android app in Java and Kotlin, adapting Jetpack architecture components (ViewModel, LiveData, Room, Navigation Component) to enforce MVVM patters, offer financial services and loan information, leverage platform-specific features, and enhance user experience"
      "Developed a cross-platform mobile application proof-of-concept for a financial ledger management system over a weekend, used in a prospective client pitch to demonstrate the platform's fit for financial services workflows"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    duration: "June 2021 to September 2021",
    items: [
      "Architected a cross-platform health and data analytics application to serve 75K+ users and enable real-time tracking of health metrics across Android and iOS applications",
      "Optimized SQL query latency from ~112s to ~6s by adding targeted indexes, eliminating full table scans, and restructuring inefficient JOIN operations"
    ]
  },
  {
    title: "Full Stack Engineering Intern",
    company: "Nirol",
    duration: "April 2020 to October 2020",
    items: [
      "Designed a YouTube style video sharing social network while managing a team of 5 interns using Python, Django, GraphQL, React, Bootstrap, Redux",
      "Established core frontend and backend features via asynchronous Django services and Redux state management to track and display likes,comments, and follow/unfollow events to improve user interaction by 47%",
      "Wrote and optimized 20+ GraphQL APIs for user relationships and recommendation pipelines, leveraging data prefetching and query batching"
    ]
  },
  {
    title: "Research and Programming Intern",
    company: "University of Mumbai",
    duration: "July 2019 to December 2019",
    items: [
      "Developed a robust Python pipeline to fetch and analyze millions of tweets using the Twitter API, focusing on public reactions to the revocation of Article 370",
      "Performed advanced sentiment analysis using Python and NLP techniques, extracting meaningful insights from unstructured social media data.",
      "Created compelling visualizations with Matplotlib, highlighting trends and patterns in public opinion with clarity and precision",
      "Identified prominent thought leaders and influencers, providing a detailed assessment of citizens’ positive and negative attitudes toward the government’s action"
    ]
  },
];