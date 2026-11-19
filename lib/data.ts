// All site content lives here. Edit this file to update the portfolio —
// no need to touch the page markup.

export const profile = {
  name: "Ardavan Shahrabi",
  title: "Software Developer & Machine Learning Engineer",
  location: "Ontario, Canada",
  email: "Ardavan.shahrabi@gmail.com",
  github: "https://github.com/a-shahrabi/",
  linkedin: "https://www.linkedin.com/in/a-shahrabi/",
  resume: "/resume.pdf",
  photo: "/1.jpeg",
  siteUrl: "https://ardavan-portfolio.vercel.app",
  formspreeEndpoint: "https://formspree.io/f/mkgodzzb",
};

export const education = [
  {
    period: "Sep 2020 – May 2024",
    location: "Halifax, NS",
    school: "Dalhousie University",
    degree:
      "Bachelor of Computer Science with Honours (First Class Honours), GPA: 3.93 / 4.3",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "R"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express", "MongoDB", "SQL", "Spring Boot"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "CI/CD", "Docker", "GitLab", "Agile/Scrum"],
  },
];

export type Experience = {
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "Sep 2025 – Present",
    location: "London, UK (Remote)",
    role: "Open-source Contributor",
    company: "Atlas API – BrainGlobe",
    description:
      "Implemented a hierarchical brain-structure query feature (get_structures_at_hierarchy_level) for BrainGlobe Atlas API (open-source neuroscience toolkit), enabling depth-based filtering of anatomical structures and proposing a fix for GitHub issue #623. Added robust input validation, error handling, and a test suite with 16 unit tests while keeping all 22 existing tests passing, improving reliability and establishing patterns for future contributors.",
  },
  {
    period: "Aug 2025 – Present",
    location: "Toronto, ON",
    role: "Machine Learning Engineer (Volunteer) – NLP Team",
    company: "Climate Resilient Communities",
    description:
      "Integrated BERTopic topic modeling with MMR representation for climate anxiety analysis on 5,000+ social media posts. Resolved complex Python dependency conflicts (PyTorch, Transformers, NumPy compatibility issues). Documented Cohere API deprecation and implemented fallback solution, preventing project delays. Collaborated via Git/GitHub on production ML pipeline processing Twitter and Reddit data.",
  },
  {
    period: "May 2025 – Present",
    location: "Toronto, ON",
    role: "Software Developer (Contract)",
    company: "retainium.ca (Startup)",
    description:
      "Authored Jest/React Testing Library test suite validating minimum dimension constraints, mouse event simulation, and callback functions to ensure production-ready resize functionality. Implemented RBAC and refined schema/state management to harden data access and improve maintainability. Enhanced UI/UX and performance through structured GitHub issues, code reviews, and incremental refactors. Worked in an Agile team using PR-based collaboration, version control, and testing pipelines.",
  },
  {
    period: "May 2025 – Sep 2025",
    location: "Toronto, ON",
    role: "Machine Learning Research Collaborator",
    company: "University of Toronto",
    description:
      "Collaborated with a university professor to develop technical course materials for a Machine Learning and Data Science class. Assisted in designing assignments, lecture slides, and coding exercises covering core ML topics (supervised/unsupervised learning, model evaluation, data preprocessing). Built and tested machine learning models using Python, scikit-learn, and pandas for use in instructional content and student projects. Conducted code reviews and provided feedback on ML pipelines and model performance for coursework examples.",
  },
  {
    period: "Mar 2025 – Dec 2025",
    location: "Toronto, ON",
    role: "AI Software Developer (Contract)",
    company: "Canadian Multicultural Inventors Museum",
    description:
      "Built a React/Next.js learning platform with Supabase backend for youth AI/ML education. Designed PostgreSQL schema with row-level security and RBAC, ensuring secure and persistent progress tracking. Created gamified modules, quizzes, and a real-time leaderboard using Supabase Realtime APIs.",
  },
  {
    period: "Dec 2023 – Dec 2024",
    location: "Halifax, NS",
    role: "Sales Representative",
    company: "ByDesign Embroidery & Screen Print",
    description:
      "Managed end-to-end custom apparel orders for corporate, government, and community clients, from first inquiry to final delivery. Maintained ongoing communication and follow-ups with key accounts, helping build long-term relationships and referrals.",
  },
  {
    period: "Sep 2023 – Dec 2023",
    location: "Halifax, NS",
    role: "Software Developer (Project) — JuniorDevForge",
    company: "Dalhousie University",
    description:
      "Built a collaboration platform for junior devs using Node.js, React, MongoDB, and Express. Designed database schemas and implemented clean UI/UX for seamless user flow.",
  },
  {
    period: "Feb 2023 – Aug 2023",
    location: "Halifax, NS",
    role: "Research Assistant",
    company: "Dalhousie University",
    description:
      "Engineered space-efficient indexing for genomic data, projected to reduce memory usage by 50%. Enhanced data query speed, cutting processing time from hours to under an hour for large datasets.",
  },
];

export type Project = {
  name: string;
  description: string;
  link?: { href: string; label: string };
  features?: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "JuniorDevForge",
    description:
      "Collaboration platform for junior developers to form teams and work on real-world projects. Built with a team of 6, designed the MongoDB database architecture and user interface.",
    link: { href: "https://junior-dev-forge.vercel.app/", label: "View live" },
    tags: ["Next.js", "React", "MongoDB", "Express"],
  },
  {
    name: "MONI-k",
    description:
      "Genomic data indexing tool using efficient algorithms in C. Co-authored research paper accepted at the Annual Symposium on Combinatorial Pattern Matching.",
    link: {
      href: "https://ui.adsabs.harvard.edu/abs/2022arXiv220205085T/abstract",
      label: "View paper",
    },
    tags: ["C", "Algorithms", "Data Structures"],
  },
  {
    name: "Maverick",
    description:
      "Led a 5-developer agile team designing and implementing a task management website with RESTful API. Implemented CI/CD pipelines and runners with GitLab for reliable development, achieving 66% test coverage. Facilitated mob programming sessions to enhance code ownership among all team members. Completed the project with the highest grade in the class.",
    features: [
      "Agile Team Leadership: Led a 5-developer team using agile methodologies, ensuring efficient collaboration and timely delivery of the task management platform.",
      "RESTful API: Designed and implemented a RESTful API for seamless communication between the front-end and back-end of the website.",
      "CI/CD Integration: Set up and maintained CI/CD pipelines and GitLab runners to automate testing and deployment.",
      "Mob Programming: Facilitated mob programming sessions to promote team collaboration and code ownership.",
    ],
    tags: ["Java", "Spring Boot", "JUnit", "React", "Node.js"],
  },
];
