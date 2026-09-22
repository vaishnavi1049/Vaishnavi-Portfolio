export const personalInfo = {
  name: "Vaishnavi Gajbar",
  role: "Full Stack Developer",
  tagline: "Crafting scalable, high-performance web systems, government portals & enterprise platforms.",
  bio: "Full Stack Developer with 1+ year of professional experience engineering robust, scalable web applications, CMS platforms, and government solutions using React.js, Node.js, Express.js, PostgreSQL, and MySQL. Specialized in REST API development, database optimization, and secure role-based access architectures.",
  location: "Pune, Maharashtra, India",
  phone: "+91-8788379686",
  email: "vaishnavigajbar104@gmail.com",
  github: "https://github.com/Vaishnavi-gajbar",
  githubUsername: "Vaishnavi-gajbar",
  linkedin: "https://linkedin.com/in/vaishnavi-gajbar-360713256",
  availability: "Open for Full Stack & Frontend/Backend Roles",
  stats: [
    { label: "Years Experience", value: "1+", description: "Building scalable enterprise & government solutions" },
    { label: "Enterprise Apps Built", value: "6+", description: "Production deployments & CMS systems" },
    { label: "Performance Boost", value: "35%", description: "Achieved via API & database query optimization" },
    { label: "Academic CGPA", value: "8.87", description: "B.Sc. Computer Science Graduate" }
  ]
};

export const technicalSkills = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", isKey: true, description: "Component architecture, Virtual DOM & Lifecycle" },
      { name: "JavaScript (ES6+)", level: "Advanced", isKey: true, description: "Async/Await, closures, modern ES syntax" },
      { name: "Tailwind CSS", level: "Advanced", isKey: true, description: "Utility-first responsive layouts & themes" },
      { name: "Redux Toolkit", level: "Proficient", isKey: true, description: "Global state management & sliced reducers" },
      { name: "React Hooks", level: "Advanced", isKey: true, description: "Custom hooks, useMemo, useCallback, useContext" },
      { name: "React Router", level: "Advanced", isKey: false, description: "Dynamic routing, nested routes, route guards" },
      { name: "HTML5 / CSS3", level: "Advanced", isKey: false, description: "Semantic markup, Flexbox, CSS Grid & animations" },
      { name: "Bootstrap", level: "Proficient", isKey: false, description: "Rapid UI prototyping and grid systems" },
      { name: "Responsive UI Design", level: "Advanced", isKey: true, description: "Mobile-first, cross-browser compatibility" }
    ]
  },
  {
    category: "Backend & APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Advanced", isKey: true, description: "Event-driven runtime & asynchronous backend logic" },
      { name: "Express.js", level: "Advanced", isKey: true, description: "RESTful endpoints, middleware & server routing" },
      { name: "REST API Development", level: "Advanced", isKey: true, description: "Scalable API design, error handling & status codes" },
      { name: "JWT Authentication", level: "Proficient", isKey: true, description: "Token-based secure authentication & session control" },
      { name: "Role-Based Access (RBAC)", level: "Advanced", isKey: true, description: "Admin, officer, and user permission models" },
      { name: "API Integration", level: "Advanced", isKey: false, description: "Third-party services, webhooks & backend sync" }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", isKey: true, description: "Relational modeling, indexing, joins & query tuning" },
      { name: "MySQL", level: "Advanced", isKey: true, description: "Schema design, normalization & stored procedures" },
      { name: "MongoDB", level: "Proficient", isKey: false, description: "NoSQL document collections & aggregation pipelines" },
      { name: "Database Optimization", level: "Advanced", isKey: true, description: "Query optimization, indexing, 35% speed improvement" }
    ]
  },
  {
    category: "DevOps & Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: "Proficient", isKey: true, description: "Containerization, Dockerfile, multi-stage builds" },
      { name: "AWS Services", level: "Proficient", isKey: true, description: "Certified AWS Cloud Practitioner" },
      { name: "AWS EC2", level: "Proficient", isKey: false, description: "Compute instances provisioning & hosting" },
      { name: "AWS S3", level: "Proficient", isKey: false, description: "Secure object storage for media & documents" },
      { name: "AWS Lambda", level: "Proficient", isKey: false, description: "Serverless execution & microservices" }
    ]
  },
  {
    category: "Tools & Ecosystem",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", isKey: true, description: "Version control, branching, PRs & code review" },
      { name: "Postman", level: "Advanced", isKey: true, description: "API testing, automated collections & mock testing" },
      { name: "Linux / CLI", level: "Proficient", isKey: false, description: "Shell scripting, server management & deployments" },
      { name: "VS Code", level: "Advanced", isKey: false, description: "Extensions, debugging & workflow efficiency" },
      { name: "Advanced Excel", level: "Advanced", isKey: false, description: "Data analysis, pivot tables, VLOOKUP & reporting" },
      { name: "Python", level: "Proficient", isKey: false, description: "Scripting, algorithmic problem solving & data logic" }
    ]
  }
];

export const projects = [
  {
    id: "pmpml-transport",
    title: "Pune Mahanagar Parivahan Mahamandal Ltd (PMPML)",
    subtitle: "Maharashtra Government Public Transport System",
    category: "Government",
    isGovernment: true,
    featured: true,
    tagline: "CMS-driven dynamic public transit platform with live bus tracking and route schedule visualization.",
    description: "Engineered a mission-critical government portal and CMS platform for Pune's city bus transport authority (PMPML). Implemented a comprehensive role-based admin panel, enabling seamless management of bus routes, stops, real-time alerts, and timetable schedules for thousands of daily commuters.",
    bullets: [
      "Built a CMS-driven dynamic web application with a secure role-based administrative control panel.",
      "Enabled real-time management of routes, transit stops, schedules, dynamic banners, and emergency notifications through the CMS.",
      "Implemented interactive live bus tracking with visual route maps and timetable schedules.",
      "Designed scalable backend REST APIs and optimized PostgreSQL database queries for large-scale transit data.",
      "Delivered a production-ready, government-grade system in close collaboration with cross-functional engineering teams."
    ],
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    liveUrl: "https://pmpmluat.dvijtech.com/",
    metrics: [
      { label: "Deployment", value: "Government Grade" },
      { label: "Module Type", value: "Live Bus Tracking & CMS" },
      { label: "Database", value: "PostgreSQL High Scale" }
    ],
    highlights: [
      "Role-Based Admin Access",
      "Live Transit Visualization",
      "Dynamic Route & Schedule CMS",
      "Dockerized Production Build"
    ]
  },
  {
    id: "dgipr-media",
    title: "Directorate General of Information & Public Relations (DGIPR)",
    subtitle: "Government of Maharashtra State Media CMS",
    category: "Government",
    isGovernment: true,
    featured: true,
    tagline: "State-wide centralized media management system used across all districts and divisions of Maharashtra.",
    description: "Developed a secure, high-capacity centralized media and content dissemination system for the Government of Maharashtra (DGIPR). The platform manages press releases, high-resolution media galleries, video archives, and official government publications with a multi-level approval workflow.",
    bullets: [
      "Built a centralized media management system utilized across all administrative districts and divisions of Maharashtra.",
      "Implemented a role-based CMS and admin dashboard handling multi-tier media uploads, review workflows, and user activity auditing.",
      "Enabled secure cataloging of high-res photos, press videos, and gazette documents with instant full-text search and filtering.",
      "Optimized RESTful APIs and database schemas for high-volume media storage, fast streaming retrieval, and multi-tenant scalability.",
      "Delivered a production-ready, high-security government-grade portal compliant with public sector governance standards."
    ],
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Coverage", value: "All Maharashtra Districts" },
      { label: "Media Handling", value: "Photos, Videos & Docs" },
      { label: "Architecture", value: "State-Wide Role CMS" }
    ],
    highlights: [
      "State-wide Multi-District Portal",
      "Multi-Tier Approval Workflow",
      "High-Volume Media Retrieval",
      "Secure RBAC Permissions"
    ]
  },
  {
    id: "task-presence",
    title: "Task Presence (Workzenn)",
    subtitle: "Enterprise Project & Team Management Platform",
    category: "Enterprise",
    featured: true,
    tagline: "Collaborative SaaS platform for agile project tracking, team boards, live chat, and workload orchestration.",
    description: "Engineered an all-in-one internal project management and productivity suite for corporate engineering and operations teams. Features flexible Kanban sprint boards, task assignment workflows, real-time messaging, document collaboration, and granular access tiers.",
    bullets: [
      "Engineered an internal project management system for agile sprint planning, task tracking, and cross-team collaboration.",
      "Implemented interactive project workspaces, tasks, assignees/reporters, drag-and-drop Kanban boards, team chats, and live notifications.",
      "Enabled encrypted file sharing, meeting notes, and collaborative documentation with role-based access control (RBAC).",
      "Designed high-performance RESTful APIs and normalized PostgreSQL relational databases for real-time team synchronization."
    ],
    techStack: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    liveUrl: "https://workzenn.in/",
    metrics: [
      { label: "Platform", value: "Workzenn Enterprise" },
      { label: "Features", value: "Boards, Chats, Docs, RBAC" },
      { label: "Status", value: "Active in Production" }
    ],
    highlights: [
      "Kanban & Sprint Tracking",
      "Real-Time Team Collaboration",
      "Role-Based Access Control",
      "Integrated File & Notes Sharing"
    ]
  },
  {
    id: "dvijtech-corporate",
    title: "Dvijtech Global Solution Website",
    subtitle: "Modern Corporate Web Portal & Experience",
    category: "Web Development",
    featured: false,
    tagline: "High-performance company website built from scratch with modern responsive UI and fluid animations.",
    description: "Designed and built the full official corporate presence for Dvijtech Global Solution from the ground up, highlighting digital transformation services, enterprise case studies, technology stacks, and customer acquisition channels.",
    bullets: [
      "Designed and developed a complete static company web portal from scratch using modern React.js.",
      "Implemented a pixel-perfect, highly responsive user interface with Tailwind CSS ensuring optimal rendering on all screen sizes.",
      "Engineered refined color palettes, smooth scroll animations, and interactive elements that improved user engagement."
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://dvijtech.com/",
    metrics: [
      { label: "Design", value: "Modern & Clean" },
      { label: "Responsiveness", value: "100% Mobile Ready" },
      { label: "Performance", value: "Fast Load Time" }
    ],
    highlights: [
      "Custom Brand Design",
      "Fluid Interactive Animations",
      "Cross-Device Optimization"
    ]
  },

  {
    id: "khanapur-grampanchayat",
    title: "Khanapur Gram Panchayat Website",
    subtitle: "Government Static Website with Bilingual Support",
    category: "Government",
    isGovernment: true,
    featured: false,
    tagline: "Bilingual (Marathi & English) village administration website built for a local government body.",
    description: "Built the official static website for Khanapur Gram Panchayat, giving villagers and visitors easy access to information about the panchayat and its services. The site supports both Marathi and English so it is accessible to the local community.",
    bullets: [
      "Developed a complete static government website for Khanapur Gram Panchayat using React.js and JavaScript.",
      "Implemented multi-language support (Marathi and English) so citizens can switch languages seamlessly.",
      "Used React Icons to create a clean, intuitive, and easy-to-navigate interface for rural and first-time users.",
      "Delivered a responsive layout that works across mobile, tablet, and desktop screens."
    ],
    techStack: ["React.js", "JavaScript", "React Icons", "i18n (Marathi / English)"],
    metrics: [
      { label: "Type", value: "Government Static Website" },
      { label: "Languages", value: "Marathi & English" },
      { label: "Responsiveness", value: "Mobile Ready" }
    ],
    highlights: [
      "Bilingual Language Toggle",
      "Local Government Portal",
      "Clean, Accessible UI"
    ]
  },
  {
    id: "vedant-enterprises",
    title: "Vedant Enterprises Website",
    subtitle: "Corporate Static Website",
    category: "Web Development",
    featured: false,
    tagline: "Modern, responsive company website presenting Vedant Enterprises' services and brand online.",
    description: "Worked on the official static website for Vedant Enterprises, focusing on a polished, responsive user interface that presents the company's services and builds credibility with visitors.",
    bullets: [
      "Developed the company's static web portal using React.js and JavaScript.",
      "Styled a modern, fully responsive interface with Tailwind CSS for a consistent look on every device.",
      "Structured reusable components for faster page development and easier future updates."
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://vedantit.in/",
    metrics: [
      { label: "Type", value: "Corporate Website" },
      { label: "Responsiveness", value: "100% Mobile Ready" },
      { label: "Status", value: "Live" }
    ],
    highlights: [
      "Modern Responsive Design",
      "Reusable Component Structure",
      "Live Production Site"
    ]
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    subtitle: "Role-Based Inventory & Asset Tracking Platform",
    category: "Enterprise",
    featured: false
    tagline: "Role-based software for managing stock like solar equipment and laptops across Admin, Manager, and Employee roles.",
    description: "Created an inventory management application to track and manage stock such as solar equipment, laptops, and other assets. The platform provides separate experiences and permissions for admins, managers, and employees.",
    bullets: [
      "Built a full-stack inventory system to manage items such as solar equipment, laptops, and other company assets.",
      "Implemented role-based access for Admin, Manager, and Employee with protected routes and role-specific views.",
      "Structured navigation and protected pages using React Router for a smooth multi-page experience.",
      "Developed backend logic with Node.js to handle inventory operations and user access.",
      "Designed a clean, responsive dashboard UI using Tailwind CSS."
    ],
    techStack: ["React.js", "JavaScript", "Node.js", "React Router", "Tailwind CSS"],
    metrics: [
      { label: "User Roles", value: "Admin, Manager, Employee" },
      { label: "Inventory Types", value: "Solar, Laptops & More" },
      { label: "Access Model", value: "Role-Based (RBAC)" }
    ],
    highlights: [
      "Role-Based Dashboards",
      "Multi-Category Inventory Tracking",
      "Protected Routing"
    ]
  },

];

export const experiences = [
  {
    id: "dvijtech",
    role: "Full Stack Developer",
    company: "Dvijtech Global Solution Pvt Ltd",
    location: "Pune, Maharashtra, India (On-site)",
    period: "June 2025 – Present",
    type: "Full Time • On-site",
    isCurrent: true,
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MySQL", "Docker", "Tailwind CSS", "Redux Toolkit", "Git"],
    bullets: [
      "Built 6+ scalable enterprise full-stack web applications for government and enterprise use, using React.js, Node.js, and PostgreSQL.",
      "Designed and developed responsive static websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.",
      "Developed and optimized ERP, CRM, government, and enterprise applications, streamlining business processes.",
      "Improved application performance by 35% through API and database query optimization.",
      "Designed and integrated RESTful APIs, ensuring seamless communication between frontend, backend, and database systems.",
      "Collaborated with cross-functional teams using Git and Docker to deliver responsive, maintainable, production-ready applications."
    ]
  },
  {
    id: "forstu",
    role: "Operations Executive",
    company: "FORSTU Edutech Solutions Pvt Ltd",
    location: "Pune, Maharashtra, India (On-site)",
    period: "August 2023 – May 2025",
    type: "Full Time • On-site",
    technologies: ["Excel", "Advanced Excel", "PowerPoint", "VLOOKUP", "Word Documentation", "Data Analysis"],
    bullets: [
      "Managed large-scale student data, reports, and documentation with high accuracy using Excel and Advanced Excel.",
      "Automated Excel dashboards and reporting processes, reducing manual effort and improving operational efficiency.",
      "Coordinated project activities, monitored progress, and ensured timely completion of assigned tasks.",
      "Assigned and supervised daily tasks for interns, providing guidance and tracking performance.",
      "Conducted student interviews and eligibility verification for scholarship and educational programs.",
      "Prepared analytical reports, presentations, and documentation for management using Excel, PowerPoint, and Word."
    ]
  }
];

export const education = {
  degree: "B.Sc. in Computer Science",
  field: "Computer Science & Software Development",
  institution: "Marathwada Mitra Mandal's College",
  location: "Pune, Maharashtra, India",
  period: "2019 – 2022",
  grade: "CGPA: 8.87 / 10",
  highlights: [
    "Core foundation in Data Structures, Algorithms, Database Management Systems (DBMS), and Web Technologies.",
    "Graduated with Distinction with an outstanding 8.87 CGPA.",
    "Active participation in technical symposiums, coding competitions, and software workshops."
  ]
};

export const certifications = [
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner Certified",
    issuer: "Amazon Web Services (AWS)",
    badgeText: "AWS Certified",
    iconName: "CloudCheck",
    description: "Demonstrated foundational understanding of AWS cloud concepts, security, core services (EC2, S3, Lambda), architecture principles, and billing models."
  },
  {
    id: "python-cert",
    title: "Python Course Certification",
    issuer: "Professional Certification Program",
    badgeText: "Python Certified",
    iconName: "Code2",
    description: "In-depth training in Python programming, object-oriented principles, data structures, automation scripts, and algorithmic problem solving."
  }

];
