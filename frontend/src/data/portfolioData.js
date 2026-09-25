// ==========================================================
// Ye file poore portfolio ka "content source" hai.
// Agar koi bhi text/data change karna ho (naam, skills, projects,
// experience waghera), to sirf yahan edit karein — components
// khud-ba-khud update ho jayenge.
// ==========================================================

export const profile = {
  name: "Zainab Gul",
  title: "Full-Stack Developer",
  tagline: "Clean Code · Responsive Design",
  location: "Misri Banda, Akora Khattak, Nowshera, Pakistan",
  email: "zzany1771@gmail.com",
  phone: "+92 370 5802799",
  about:
    "Motivated and detail-oriented Computer Science graduate from Northern University Nowshera, specializing in React.js frontend development with backend integration in PHP (Laravel) and Node.js. Skilled at translating design concepts into clean, component-driven interfaces and building reliable, API-connected applications. Combines a strong technical foundation with proven leadership, communication, and multilingual ability — gained through competitive debating, community service, and university sports — to bring both capability and collaborative energy to a team.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
  { name: "PHP (Laravel)", level: 82 },
  { name: "MySQL", level: 80 },
  { name: "RESTful APIs", level: 85 },
  { name: "HTML5 / CSS3", level: 92 },
];

export const softSkills = [
  "Problem Solving",
  "UI/UX Focused",
  "Communication",
  "Team Collaboration",
];

export const experience = [
  {
    role: "Frontend Developer",
    org: "Northern University Nowshera",
    period: "Web Project Experience",
    points: [
      "Engineered responsive, component-driven interfaces with React.js, applying modular state management for clean, maintainable code.",
      "Integrated PHP backend APIs and RESTful services, enabling seamless frontend-to-backend data flow.",
      "Improved cross-device performance and compatibility through focused frontend optimization.",
      "Strengthened application reliability through systematic debugging, interface testing, and code refactoring.",
      "Bridged technical and non-technical stakeholders by clearly communicating project specifications and requirements.",
    ],
  },
  {
    role: "Web Developer",
    org: "ZeroCodeLogic",
    period: "June 2025 – September 2025",
    points: [
      "Worked as a Web Developer, contributing to client web development projects with consistent diligence and professionalism.",
      "Recognized for strong commitment, enthusiasm, and highly satisfactory performance throughout the role.",
    ],
  },
];

export const projects = [
  {
    title: "Course Folder Management System (CFMS)",
    subtitle: "Final Year Project (FYP)",
    stack: ["React.js", "Laravel (PHP)", "MySQL"],
    description:
      "Designed and built an automated, web-based platform that digitizes academic course portfolios — covering syllabus tracking, lecture materials, and accreditation compliance. Implemented secure role-based access control for administrators, faculty, and academic auditors, along with marks distribution records and automated generation of standardized course folders.",
    highlights: [
      "Role-based access: Admin, Teacher, and HOD dashboards",
      "CLO/PLO mapping and accreditation-ready reporting",
      "Session-wide deadline tracking with on-time/late submission status",
    ],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Northern University Nowshera",
  period: "2022 – 2026",
};

export const certifications = [
  "Pakistan Universities Debating Championship (Held at KMU) — Certificate of participation in national-level debating and public speaking.",
  "Programming and Database Fundamentals — Certified training in programming logic and MySQL database administration.",
  "Web Application & Frontend Development — Certified in responsive UI implementation and full-stack integration.",
  "Blood Donation Certificate — Voluntary donor, Shaukat Khanum Memorial Cancer Hospital and Research Centre.",
  "Northern University Cricket Tournament — Certificate of participation in inter-departmental cricket.",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
  { name: "Punjabi", level: "Fluent" },
  { name: "Pashto", level: "Native" },
];
