const projectImage = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const fallbackProjects = [
  {
    "slug": "campusstay-platform",
    "number": "01",
    "title": "CampusStay — Hostel & Boarding Platform",
    "description": "An academic platform for managing student accommodation and related services. The project includes documented workflows for hostel discovery, booking requests, property administration, maintenance, and meal subscriptions.",
    "stack": "PHP, MySQL, HTML, CSS, UML",
    "category": "Full Stack",
    "status": "Academic project · In progress",
    "highlights": [
      "Prepared requirements and role-based workflows for students, landlords, caretakers, meal hosts, and administrators.",
      "Designed UML activity diagrams and a database structure for listings, bookings, maintenance, and meal services.",
      "Started the PHP/MySQL application foundation using a local XAMPP-style development environment."
    ],
    "scopeNote": "Some features described here are designed requirements rather than completed application functionality.",
    "image": projectImage("campusstay-platform.jpg"),
    "imageAlt": "CampusStay student hostel booking dashboard concept with accommodation cards and map",
    "visual": "dashboard",
    "demoUrl": "",
    "githubUrl": "",
    "order": 1
  },
  {
    "slug": "network-traffic-triage",
    "number": "02",
    "title": "Network Traffic Triage Tool",
    "description": "A browser-based educational tool that analyzes exported Wireshark packet-list CSV files locally. It summarizes traffic patterns and explains why unusual activity may deserve closer investigation.",
    "stack": "HTML, CSS, JavaScript, Wireshark CSV",
    "category": "Web Apps",
    "status": "Educational project · Version 1",
    "highlights": [
      "Reads packet-list CSV files directly in the browser without uploading network data to a server.",
      "Summarizes common protocols and top talkers, with heuristics for ports, bursts, and other unusual patterns.",
      "Provides plain-English investigation suggestions and an exportable report for learning SOC-style triage."
    ],
    "scopeNote": "Anomalies are investigation leads, not automatic evidence of an attack or malware.",
    "image": projectImage("network-traffic-triage.jpg"),
    "imageAlt": "Network traffic triage dashboard concept with packet charts and investigation alerts",
    "visual": "dashboard",
    "demoUrl": "",
    "githubUrl": "",
    "order": 2
  },
  {
    "slug": "mern-portfolio",
    "number": "03",
    "title": "Personal Portfolio — React & MERN",
    "description": "A responsive personal portfolio converted from HTML and CSS into reusable React components. An Express API and MongoDB support project information and contact submissions when the backend is running.",
    "stack": "React, Vite, Node.js, Express, MongoDB",
    "category": "Full Stack",
    "status": "Personal project · In progress",
    "highlights": [
      "Organized the website into Home, About, Skills, Projects, Services, and Contact components.",
      "Added interactive project filters, project-detail dialogs, responsive navigation, and skills displays.",
      "Built an Express API with MongoDB models for portfolio projects and contact messages."
    ],
    "scopeNote": "Database-backed features depend on a configured and running backend; this portfolio is still being refined.",
    "image": projectImage("mern-portfolio.jpg"),
    "imageAlt": "MERN portfolio website concept displayed on laptop and mobile with full-stack architecture",
    "visual": "components",
    "demoUrl": "",
    "githubUrl": "",
    "order": 3
  },
  {
    "slug": "react-portfolio-components",
    "number": "04",
    "title": "Responsive React UI Components",
    "description": "Reusable interface components developed for my portfolio, including a mobile navigation menu, skill cards, progress indicators, project filters, carousel controls, and detail dialogs.",
    "stack": "React, JSX, CSS, Responsive Design",
    "category": "UI Components",
    "status": "Frontend component work",
    "highlights": [
      "Implemented responsive navigation and accessible controls for smaller screens.",
      "Created category filtering and carousel-style project browsing with React state.",
      "Styled reusable skill cards, progress visuals, and project-detail overlays."
    ],
    "scopeNote": "These components belong to the portfolio project; they are not a separate published component library.",
    "image": projectImage("react-portfolio-components.jpg"),
    "imageAlt": "React interface component gallery concept with buttons, forms, cards and charts",
    "visual": "components",
    "demoUrl": "",
    "githubUrl": "",
    "order": 4
  },
  {
    "slug": "html-css-portfolio",
    "number": "05",
    "title": "Responsive Portfolio — HTML & CSS",
    "description": "The original multi-section personal website built with semantic HTML and CSS. It features a responsive layout, animated profile presentation, skills visualizations, and a project slider.",
    "stack": "HTML, CSS, Responsive Layouts, CSS Animations",
    "category": "Web Apps",
    "status": "Earlier frontend version",
    "highlights": [
      "Built Home, About, Skills, Portfolio, Services, and Contact sections in a single-page layout.",
      "Created animated headings, a profile-image treatment, skill bars, and circular skill indicators.",
      "Used CSS-based navigation and a project slider before converting the website to React."
    ],
    "scopeNote": "This is the earlier static version of the same portfolio, not an unrelated commercial website.",
    "image": projectImage("html-css-portfolio.jpg"),
    "imageAlt": "Responsive HTML and CSS personal portfolio concept shown on laptop and smartphone",
    "visual": "dashboard",
    "demoUrl": "",
    "githubUrl": "",
    "order": 5
  }
];
