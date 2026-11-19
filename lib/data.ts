// All site content lives here. Edit this file to update the portfolio —
// no need to touch the page markup.

export type Link = { label: string; href: string };

export const profile = {
  name: "Ardavan Shahrabi",
  headline: "Software developer working on AI products, data pipelines, and testing.",
  location: "Toronto, ON",
  email: "ardavan.shahrabi@dal.ca",
  github: "https://github.com/a-shahrabi",
  linkedin: "https://www.linkedin.com/in/a-shahrabi/",
  photo: "/1.jpeg",
  siteUrl: "https://ardavan-portfolio.vercel.app",
  formspreeEndpoint: "https://formspree.io/f/mkgodzzb",
  openToWork: {
    badge: "Open to work",
    roles: "a full-time role in software development, QA, or data/AI",
  },
};

export const about = [
  "I'm a software developer in Toronto with 2+ years of hands-on development experience. I build and test features on an AI-powered learning platform, do NLP and data work for a climate nonprofit, and contribute to an open-source neuroscience toolkit.",
  "I care about making things that work reliably. I like finding the root cause of a bug, catching problems before users do, and explaining technical work clearly to non-technical people.",
  "I graduated from Dalhousie University with First Class Honours in Computer Science and co-authored a peer-reviewed algorithms paper.",
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  summary?: string;
  bullets: string[];
  stack?: string[];
  links?: Link[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer (Contract)",
    company: "Retainium",
    companyUrl: "https://retainium.ca",
    period: "May 2025 – Present",
    location: "Remote",
    summary: "AI-powered math and STEM learning platform.",
    bullets: [
      "28 merged PRs across the React frontend, API routes, and PostgreSQL.",
      "Built chat file attachments in stages: a library file picker, a link-creation endpoint the ticket said wasn't needed, and a reusable picker component.",
      "Moved attachment saving into a single Postgres transaction, turning three silent failures into hard failures and deleting about 1,000 lines.",
      "Passed each user's role through the AI tool layer so AI agents can't do more than the user who calls them (24 permission tests).",
      "Flagged an AI tool that bypassed row-level security; the team removed it. Manual testing caught a publish bypass that AI-assisted research had missed.",
      "Root-caused flaky tests (2 of 15 runs failing, then 10 of 10 passing) and unblocked the integration suite (0 to 141 passing).",
      "Wrote MCP documentation covering 28 tools.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Supabase (PostgreSQL)", "Vitest", "Playwright", "GitHub Actions", "MCP", "Claude Code"],
  },
  {
    role: "ML/NLP Developer (Contract)",
    company: "Sprout Climate — ClimateLens project",
    period: "Aug 2025 – Present",
    location: "Remote",
    summary: "Climate nonprofit.",
    bullets: [
      "Built NLP pipelines on Reddit and Twitter data: topic modeling (BERTopic, LDA), transformer emotion classification, and dynamic topic modeling across 13 years (2009 to 2022).",
      "Found three incompatible emotion label sets that made results unreliable; held report sign-off and defined a reproducibility standard (model versions, label sets, thresholds, seeds).",
      "Built a CLI with seeded sampling and dry-run mode, and centralized file writes into one I/O layer.",
      "Smoke tests I added caught a bug silently overwriting raw input data, which I fixed.",
      "Built Plotly dashboards for non-technical stakeholders.",
    ],
    stack: ["Python", "pandas", "HuggingFace", "BERTopic", "spaCy", "Cohere API", "Plotly", "Azure ML", "pytest", "GitHub Actions"],
    links: [{ label: "ClimateLens repo", href: "https://github.com/Climate-Resilient-Communities/ClimateLens" }],
  },
  {
    role: "Open-Source Contributor",
    company: "BrainGlobe Atlas API",
    period: "Sep 2025 – Present",
    location: "Remote (project based in London, UK)",
    summary: "Python toolkit neuroscientists use to query reference brain atlases.",
    bullets: [
      "3 merged PRs (#665, #879, #972); 2 in review (#944, #978).",
      "Added a depth-based query over the brain-region tree with BFS ordering and 11 tests.",
      "Took on the validation update for the v2 atlas format and refactored validators.",
    ],
    links: [
      { label: "BrainGlobe repo", href: "https://github.com/brainglobe/brainglobe-atlasapi" },
      { label: "UCL case study", href: "https://www.ucl.ac.uk/research-innovation/case-studies/2026/may/brainglobe-template-builder" },
    ],
  },
  {
    role: "Machine Learning Research Collaborator",
    company: "University of Toronto",
    period: "May 2025 – Sep 2025",
    bullets: [
      "Helped develop course materials for an ML and data science class: assignments, slides, and coding exercises.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Dalhousie University",
    period: "Feb 2023 – Aug 2023",
    bullets: [
      "Worked on space-efficient indexing for genomic data, projected to cut memory use by about 50%, and reduced query time from hours to under an hour.",
    ],
  },
];

export const earlierExperience = [
  {
    role: "Sales Representative & Technical Support",
    company: "ByDesign Embroidery & Screen Print",
    period: "Dec 2023 – Dec 2024",
  },
  {
    role: "Student Coordinator",
    company: "ShiftKey Lab",
    period: "2023",
    note: "Python labs for 40+ students.",
  },
];

export type Project = {
  name: string;
  status?: string;
  award?: string;
  description: string[];
  tags?: string[];
  links?: Link[];
};

const brainglobePr = (n: number, state: "merged" | "in review"): Link => ({
  label: `#${n} (${state})`,
  href: `https://github.com/brainglobe/brainglobe-atlasapi/pull/${n}`,
});

export const projects: Project[] = [
  {
    name: "Agentic Shot",
    status: "In development",
    description: [
      "An agentic pipeline that turns a one-line scene description into a video shot. An LLM drafts a structured shot spec and generates a keyframe. A critic scores each field (subject, camera, lighting, mood, style), and only failing fields are revised. The best attempt is animated into video.",
      "Stage 1 is done. Next on the roadmap: an evaluation harness, multi-model routing, and multi-shot sequences.",
    ],
    tags: ["Python", "OpenAI API", "Flux via mflux (Apple Silicon)", "Runway", "Gradio"],
    links: [{ label: "GitHub", href: "https://github.com/a-shahrabi/agentic-shot" }],
  },
  {
    name: "ClimateLens",
    description: [
      "NLP pipelines on Reddit and Twitter data for a climate nonprofit: topic modeling, transformer emotion classification, and dynamic topic modeling across 13 years (2009 to 2022). Built at Sprout Climate.",
    ],
    tags: ["Python", "BERTopic", "HuggingFace", "spaCy", "Plotly"],
    links: [{ label: "GitHub", href: "https://github.com/Climate-Resilient-Communities/ClimateLens" }],
  },
  {
    name: "BrainGlobe Atlas API contributions",
    description: [
      "Open-source contributions to a Python toolkit neuroscientists use to query reference brain atlases. I added a depth-based query over the brain-region tree and took on the validation update for the v2 atlas format.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/brainglobe/brainglobe-atlasapi" },
      brainglobePr(665, "merged"),
      brainglobePr(879, "merged"),
      brainglobePr(972, "merged"),
      brainglobePr(944, "in review"),
      brainglobePr(978, "in review"),
    ],
  },
  {
    name: "WhoRU?",
    award: "1st Place, Volta Agentic AI Hackathon (Nov 2024)",
    description: [
      "AI networking app built by a team of 6 in 10 hours. My role: software developer and AI engineer. I built the database schema, the React frontend, and the OpenAI integration with a Python backend.",
    ],
    tags: ["React", "Python", "OpenAI"],
  },
];

export const publication = {
  authors: [
    { name: "I. Tatarnikov" },
    { name: "A. Shahrabi Farahani", me: true },
    { name: "S. Kashgouli" },
    { name: "T. Gagie" },
  ],
  title: "MONI Can Find k-MEMs",
  venue: "34th Annual Symposium on Combinatorial Pattern Matching (CPM 2023), LIPIcs vol. 259, 26:1–26:14",
  links: [
    { label: "DOI: 10.4230/LIPIcs.CPM.2023.26", href: "https://doi.org/10.4230/LIPIcs.CPM.2023.26" },
    { label: "arXiv", href: "https://arxiv.org/abs/2202.05085" },
  ] satisfies Link[],
};

export const education = [
  {
    degree: "Bachelor of Computer Science (Honours), First Class Honours",
    school: "Dalhousie University",
    location: "Halifax, NS",
    period: "2020 – 2024",
    detail: "GPA 3.93/4.3",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "Bash"] },
  { category: "Web", items: ["React", "Next.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"] },
  {
    category: "Data & ML",
    items: ["pandas", "NumPy", "scikit-learn", "PyTorch", "HuggingFace Transformers", "BERTopic", "spaCy", "Plotly", "Power BI"],
  },
  { category: "AI", items: ["OpenAI", "Cohere", "OpenRouter", "MCP", "Claude Code"] },
  {
    category: "Databases",
    items: ["PostgreSQL (row-level security, transactions)", "MySQL", "MongoDB", "Supabase"],
  },
  { category: "Testing", items: ["pytest", "Vitest", "Playwright"] },
  {
    category: "Infrastructure",
    items: ["Docker", "GitHub Actions (CI/CD)", "AWS", "Azure ML", "Vercel", "Git", "Linux"],
  },
];

export const certifications = [
  { name: "AWS Solutions Architect – Associate", status: "Exam scheduled Dec 2026" },
  { name: "HubSpot Inbound and Inbound Sales", status: "2026" },
  { name: "ISC2 Certified in Cybersecurity", status: "In progress" },
  { name: "Cisco CCNA", status: "In progress" },
];

export const volunteering = [
  {
    role: "Mentor & Judge",
    org: "NASA Space Apps Challenge (Toronto)",
    period: "Nov 2026",
    description:
      "Mentored 31+ teams over two days at an event with 350+ participants of all ages across 82 teams. Judged 14 teams on a panel.",
  },
];
