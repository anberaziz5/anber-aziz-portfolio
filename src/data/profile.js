export const profile = {
  name: 'Anber Aziz',
  title: 'Software Engineer & MERN Stack Developer',
  tagline: 'Building clean, performant systems — from frontend pixels to backend infrastructure.',
  email: 'anberaziz6@gmail.com',
  location: 'Shadman 1, Lahore, Pakistan',
  university: 'Lahore College for Women University',
  github: 'https://github.com/anberaziz5',
  githubHandle: 'https://github.com/anberaziz5',
  linkedin: 'https://linkedin.com/in/anber-aziz-70b028266',
  linkedinHandle: 'linkedin.com/in/anber-aziz-70b028266',
  resumeUrl: '/anber_aziz_cv.pdf',
  summary:
    "Final-year Software Engineering student at Lahore College for Women University with hands-on experience in full-stack web development and IT infrastructure. Proven ability to optimise performance, ship clean code, and troubleshoot complex systems.",
  objective:
    "Passionate about Machine Learning, AI, and Progressive Web Applications, I'm seeking a graduate role where I can contribute to impactful products while continuing to grow as an engineer.",
}

export const skillCategories = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'C++', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'Responsive / Web Design', level: 90 },
      { name: 'Performance Optimisation', level: 80 },
      { name: 'SEO', level: 78 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 76 },
      { name: 'REST API Development', level: 80 },
      { name: 'DevOps Basics', level: 65 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'SQL (Relational DBs)', level: 82 },
      { name: 'DBMS Design', level: 80 },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Google Cloud', level: 70 },
      { name: 'MS Office', level: 88 },
    ],
  },
]

export const projects = [
  {
    id: 'cyberguard',
    title: 'CyberGuard',
    subtitle: 'Final Year Project',
    description:
      'A network security monitoring system built as my Final Year Project — combining real-time traffic analysis, intrusion alerting, and a web dashboard to give administrators visibility into network health and threats, drawing on my background in network infrastructure and CCTV/security systems.',
    tech: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'Network Security'],
    github: 'https://github.com/anberaziz5',
    demo: '#',
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    subtitle: 'NovaSole Pakistan — Internship Project',
    description:
      'Developed and maintained frontend and backend components of a live e-commerce platform during my internship. Improved load times through image compression and caching, fixed cross-browser issues, and implemented SEO best practices that increased organic traffic.',
    tech: ['JavaScript', 'HTML', 'CSS', 'SEO', 'Performance Optimisation'],
    github: 'https://github.com/anberaziz5',
    demo: '#',
    featured: true,
  },
  {
    id: 'campus-network-infra',
    title: 'Campus Network & Surveillance Support',
    subtitle: 'MITE — IT Internship Project',
    description:
      'Supported installation, configuration, and maintenance of network infrastructure serving 230+ students and staff, alongside monitoring campus-wide CCTV surveillance systems and resolving technical faults to maintain uninterrupted security operations.',
    tech: ['Network Administration', 'CCTV Systems', 'Troubleshooting'],
    github: 'https://github.com/anberaziz5',
    demo: '#',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Web Development Intern',
    company: 'NovaSole Pakistan',
    location: 'Kasur, Pakistan',
    duration: 'Jun 2024 – Sep 2024',
    points: [
      'Developed and maintained frontend and backend components of an e-commerce platform, improving overall functionality and user experience.',
      'Optimised website performance through image compression, caching, and cross-browser compatibility fixes — achieving measurable load-time improvements.',
      'Implemented SEO best practices, contributing to increased organic traffic.',
      'Conducted systematic testing and debugging, resolving critical issues and maintaining code quality aligned with industry standards.',
    ],
  },
  {
    role: 'IT Intern',
    company: "Mubashar's Institute of Technical Education (MITE)",
    location: 'Kasur, Pakistan',
    duration: 'May 2024 – Jun 2024',
    points: [
      'Supported installation, configuration, and maintenance of network infrastructure serving 230+ students and staff.',
      'Monitored and maintained campus-wide CCTV surveillance systems, promptly resolving technical faults to maintain security operations.',
      'Provided first-line technical troubleshooting for computer systems, minimising downtime and ensuring operational continuity.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Lahore College for Women University',
    location: 'Lahore, Pakistan',
    duration: 'Sep 2022 – Expected 2026',
    details: [
      'Relevant coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Software Design, Machine Learning.',
      'Active participant in university tech events and programming competitions.',
    ],
  },
]

export const certifications = [
  {
    title: 'Final Year Project — CyberGuard',
    issuer: 'Lahore College for Women University',
    description: 'Network security monitoring system developed as the culmination of the BS Software Engineering program.',
  },
  {
    title: 'MERN Stack Development',
    issuer: 'Self-Directed / Project-Based',
    description: 'Practical full-stack development across MongoDB, Express, React, and Node.js, applied in internship and FYP work.',
  },
]

export const languages = [
  { name: 'Urdu', level: 'Native / Mother Tongue' },
  { name: 'English', level: 'Proficient — C1 (Listening, Reading, Writing) | B2 (Speaking)' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
