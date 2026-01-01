"use client"
import Image from "next/image";
import ThemeToggle from '../components/ui/theme-toggle';
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import HoverMenu from "../components/HoverMenu";
import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";


export default function Home() {

  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // This sets the button to loading state
    setIsSubmitting(true);
    
    // The form will still submit to Formspree naturally
    // This timeout resets the button after 3 seconds if the page doesn't reload
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      
       
        {showBackToTop && (
          <motion.button
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg z-40"
          >
            <FaArrowUp />
          </motion.button>
        )}
      
      <div className="mx-auto max-w-xl px-4 py-20">
        {/* Single header - removed duplicate */}
        <motion.header 
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.8}} 
          className="flex items-center justify-between mb-12 top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm py-4 px-4"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image 
  src="/1.jpeg"  
  alt="Profile picture of Ardavan Shahrabi"  // More descriptive alt text
  className="cursor-pointer transition-all duration-300 hover:scale-110"
  width={100}  
  height={100}
  priority  
  quality={90}  // Higher quality for your profile picture
/>
          </div>
          
          <div className="flex items-center space-x-4">
            <HoverMenu />
            <div className="cursor-pointer">
              <ThemeToggle/>
            </div>
          </div>
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-1" 
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
                Ardavan Shahrabi
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Software Developer & Machine Learning Engineer</p>
              <p className="text-gray-600 dark:text-gray-400">Ontario, Canada</p>
            </motion.div>

            <motion.div
              id="about"
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"
            >
              <h2 className="text-lg">Hi There!</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  I&apos;m Ardavan Shahrabi, a Computer Science graduate from <span className="font-bold text-black dark:text-white">Dalhousie University</span> with a passion for <span className="font-bold text-black dark:text-white">algorithms</span>, full-stack development, and <span className="font-bold text-black dark:text-white">Machine Learning</span>. I love turning complex challenges into elegant solutions and building software that makes a real impact.
</p>

<p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  My experience spans from winning a <span className="font-bold text-black dark:text-white">first-place hackathon</span> building an AI-driven networking app, to conducting academic research in combinatorial pattern matching where I helped reduce computational time by over 50% for genomic data processing. I hold certifications in Cybersecurity and DevOps.
</p>

<p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  I&apos;m driven by creating accessible, inclusive technology that simplifies complex tasks and empowers users. Let&apos;s connect and build something awesome!
</p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="flex items-center space-x-4"
            >
              <Button 
      onClick={() => window.open('/resume.pdf', '_blank')}
      className="rounded-full !bg-gradient-to-r !from-slate-900 !to-blue-700 text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-black"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.open('/resume.pdf', '_blank');
        }
      }}
      aria-label="Download Resume"
        tabIndex={0}
      >
        Resume
      </Button>
                    <motion.div
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
>
    <Link 
      href="https://github.com/a-shahrabi/" 
      target="_blank" 
      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
    >
      <FaGithub className="w-6 h-6"/>
    </Link>
      </motion.div>
      <motion.div
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
>
  <Link 
    href="https://www.linkedin.com/in/a-shahrabi/" 
    target="_blank" 
    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
  >
    <FaLinkedin className="w-6 h-6"/>
  </Link>
</motion.div>
            </motion.div>

            <motion.section 
              id="education"
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
                Education
              </h2>

              <div className="space-y-2">
                <div className="flex items-centre justify-between">
                  <div className="space-y-1"> 
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sep, 2020 - May, 2024</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
                    <p className="italic">Dalhousie University</p>
                    <p className="font-medium">Bachelor of Computer Science with honours (First Class Honours), (GPA: 3.93 / 4.3)</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="skills"
              initial={{opacity: 0, y: 100}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block mb-6">
                Skills & Technologies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Programming Languages */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Python</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Java</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">C</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">R</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Frontend */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">React</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">TailwindCSS</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Framer Motion</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">HTML/CSS</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Backend */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-4">Backend & Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Express</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">SQL</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Spring Boot</span>
                    </div>
                  </CardContent>
                </Card>

                {/* DevOps & Tools */}
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-medium mb-4">DevOps & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Git</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">CI/CD</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Docker</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">GitLab</span>
                      <span className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">Agile/Scrum</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          </section>

          <motion.section 
  id="experience"
  initial={{opacity: 0, y: 100}}
  animate={{opacity: 1, y: 0}}
  transition={{duration: 0.8}}
  className="space-y-8"
>
  <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
    Experience
  </h2>
  
  <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-6">
    {/* Atlas API - Open-source Contributor */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2025 - Present</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">London, UK (Remote)</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Open-source Contributor</p>
        <p className="text-black-600 dark:text-blue-400 italic">Atlas API – BrainGlobe</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Implemented a hierarchical brain-structure query feature (get_structures_at_hierarchy_level) for BrainGlobe Atlas API (open-source neuroscience toolkit), enabling depth-based filtering of anatomical structures and proposing a fix for GitHub issue #623. Added robust input validation, error handling, and a test suite with 16 unit tests while keeping all 22 existing tests passing, improving reliability and establishing patterns for future contributors.
      </p>
    </div>

    {/* Machine Learning Engineer - Climate Resilient Communities */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2025 - Present</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Toronto, ON</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Machine Learning Engineer (Volunteer) – NLP Team</p>
        <p className="text-black-600 dark:text-blue-400 italic">Climate Resilient Communities</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Integrated BERTopic topic modeling with MMR representation for climate anxiety analysis on 5,000+ social media posts. Resolved complex Python dependency conflicts (PyTorch, Transformers, NumPy compatibility issues). Documented Cohere API deprecation and implemented fallback solution, preventing project delays. Collaborated via Git/GitHub on production ML pipeline processing Twitter and Reddit data.
      </p>
    </div>

    {/* Software Developer - retainium.ca */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">May 2025 - Present</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Toronto, ON</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Software Developer (Contract)</p>
        <p className="text-black-600 dark:text-blue-400 italic">retainium.ca (Startup)</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Authored Jest/React Testing Library test suite validating minimum dimension constraints, mouse event simulation, and callback functions to ensure production-ready resize functionality. Implemented RBAC and refined schema/state management to harden data access and improve maintainability. Enhanced UI/UX and performance through structured GitHub issues, code reviews, and incremental refactors. Worked in an Agile team using PR-based collaboration, version control, and testing pipelines.
      </p>
    </div>

    {/* Machine Learning Research Collaborator - UofT */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">May 2025 - Sep 2025</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Toronto, ON</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Machine Learning Research Collaborator</p>
        <p className="text-black-600 dark:text-blue-400 italic">University of Toronto</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Collaborated with a university professor to develop technical course materials for a Machine Learning and Data Science class. Assisted in designing assignments, lecture slides, and coding exercises covering core ML topics (supervised/unsupervised learning, model evaluation, data preprocessing). Built and tested machine learning models using Python, scikit-learn, and pandas for use in instructional content and student projects. Conducted code reviews and provided feedback on ML pipelines and model performance for coursework examples.
      </p>
    </div>

    {/* AI Software Developer - Canadian Multicultural Inventors Museum */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Mar 2025 - Dec 2025</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Toronto, ON</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">AI Software Developer (Contract)</p>
        <p className="text-black-600 dark:text-blue-400 italic">Canadian Multicultural Inventors Museum</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Built a React/Next.js learning platform with Supabase backend for youth AI/ML education. Designed PostgreSQL schema with row-level security and RBAC, ensuring secure and persistent progress tracking. Created gamified modules, quizzes, and a real-time leaderboard using Supabase Realtime APIs.
      </p>
    </div>

    {/* Sales Representative - ByDesign */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Dec 2023 - Dec 2024</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Sales Representative</p>
        <p className="text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Managed end-to-end custom apparel orders for corporate, government, and community clients, from first inquiry to final delivery. Maintained ongoing communication and follow-ups with key accounts, helping build long-term relationships and referrals.
      </p>
    </div>

    {/* Software Developer - JuniorDevForge */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2023 - Dec 2023</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Software Developer (Project) — JuniorDevForge</p>
        <p className="text-black-600 dark:text-blue-400 italic">Dalhousie University</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Built a collaboration platform for junior devs using Node.js, React, MongoDB, and Express. Designed database schemas and implemented clean UI/UX for seamless user flow.
      </p>
    </div>

    {/* Research Assistant - Dalhousie */}
    <div className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-3 ring-8 ring-white dark:ring-black">
        <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      </span>
      <div className="space-y-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">Feb 2023 - Aug 2023</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
        <p className="font-medium text-indigo-900 dark:text-indigo-300">Research Assistant</p>
        <p className="text-black-600 dark:text-blue-400 italic">Dalhousie University</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
        Engineered space-efficient indexing for genomic data, projected to reduce memory usage by 50%. Enhanced data query speed, cutting processing time from hours to under an hour for large datasets.
      </p>
    </div>
  </div>
</motion.section>

          <motion.section 
            id="projects"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block mb-6">
              Projects
            </h2>
            <div className="space-y-6"> 
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"> 
                <CardContent className="p-4">
                  <div className="flex flex-col"> 
                    <div className="w-full flex flex-col">
                      <div>
                        <h3 className="text-xl font-medium mb-2">Portfolio Website</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          I created a modern and interactive portfolio website to showcase my skills, projects, and experience. The website is built with Next.js, ensuring fast page loads and excellent SEO. I incorporated Framer Motion to add smooth, engaging animations for a dynamic user experience.
                          The design is made using ShadCN, which helped me craft a sleek,
                          responsive interface with modern design elements.
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Dark/Light Mode Toggle: Easily switch between dark and light themes for a personalized browsing experience.</li>
                            <li>Smooth Page Transitions: Seamless transitions between pages powered by Framer Motion, creating a smooth and engaging user experience.</li>
                            <li>Responsive Design: The website is fully responsive, ensuring it looks great and functions perfectly on all devices, from desktops to mobile phones.
                              <a 
                                href="https://ardavan-portfolio.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                Click here
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">TailwindCSS</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Framer Motion</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6"> 
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"> 
                <CardContent className="p-4">
                  <div className="flex flex-col"> 
                    <div className="w-full flex flex-col">
                      <div>
                        <h3 className="text-xl font-medium mb-2">JuniorDevForge</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          As part of a team of 6, I helped develop JuniorDevForge, a platform designed to support junior developers by enabling 
                          collaborative project development and providing access to industry-relevant resources. The platform allows users to form 
                          teams and work together on real-world projects, fostering learning and growth in a practical setting.
                          I contributed to the project by designing and implementing the database architecture with MongoDB, ensuring efficient data 
                          management and scalability. Additionally, I applied design thinking principles to create an intuitive and user-friendly 
                          interface, enhancing the overall user experience. The platform was successfully deployed, empowering junior developers to 
                          collaborate, learn, and build impactful projects.
                        </p>
                      
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Collaborative Project Development: Enables junior developers to form teams and work on real-world projects together, promoting teamwork and skill growth.</li>
                            <li>Seamless Deployment: The platform was successfully deployed, allowing junior developers to access it anytime to collaborate on projects.</li>
                            <li>MongoDB Database Integration: Designed and implemented a scalable database architecture to manage user data, project information, and team collaborations efficiently.</li>
                            <li>User-Friendly Interface: The platform&apos;s interface was built with a focus on usability, incorporating design thinking principles to make it easy for users to navigate and interact with.
                              <a 
                                href="https://junior-dev-forge.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                Click here
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">React</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">MongoDB</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Express</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6"> 
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"> 
                <CardContent className="p-4">
                  <div className="flex flex-col"> 
                    <div className="w-full flex flex-col">
                      <div>
                        <h3 className="text-xl font-medium mb-2">MONI-k</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          MONI-k is a project focused on indexing large text datasets for genetics studies. 
                          I implemented efficient data structures and algorithms in C to enhance the indexing process, 
                          enabling faster and more accurate data retrieval for genetic analysis. My work contributed to 
                          optimizing the data processing capabilities of the project, which is crucial for large-scale genomic studies.
                          Additionally, I co-authored a paper detailing the project, which was accepted for presentation at the Annual 
                          Symposium on Combinatorial Pattern Matching.
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Efficient Data Indexing: Developed data structures and algorithms to efficiently index large-scale genetic datasets, improving processing speed and accuracy.</li>
                            <li>Genetics-Focused Algorithms: Specialized in algorithms that optimize text indexing for genomic data, addressing the unique challenges of large genetic datasets.</li>
                            <li>Paper Publication: Co-authored a research paper accepted by the Annual Symposium on Combinatorial Pattern Matching.
                              <a 
                                href="https://ui.adsabs.harvard.edu/abs/2022arXiv220205085T/abstract" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                Click here
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">C</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Algorithm</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Data Structure</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6"> 
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"> 
                <CardContent className="p-4">
                  <div className="flex flex-col"> 
                    <div className="w-full flex flex-col">
                      <div>
                        <h3 className="text-xl font-medium mb-2">Maverick</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Led a 5-developer agile team designing and implementing a task management website with RESTful API. 
                          Implemented CI/CD pipelines and runners with GitLab for reliable development, achieving 66% test coverage. 
                          Facilitated mob programming sessions to enhance code ownership among all team members. 
                          Completed the project with the highest grade in the class.
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Agile Team Leadership: Led a 5-developer team using agile methodologies, ensuring efficient collaboration and timely delivery of the task management platform.</li>
                            <li>RESTful API: Designed and implemented a RESTful API for seamless communication between the front-end and back-end of the website.</li>
                            <li>CI/CD Integration: Set up and maintained CI/CD pipelines and GitLab runners to automate testing and deployment.</li>
                            <li>Mob Programming: Facilitated mob programming sessions to promote team collaboration and code ownership.</li>
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Java</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Spring Boot</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">JUnit</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">React</span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Node.js</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </motion.section>

          <motion.section 
            id="contact"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block mb-6">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info - with more padding on the right */}
              <div className="space-y-6 pr-4 md:pr-8">
                <p className="text-gray-600 dark:text-gray-400 p-4 bg-gray-50 dark:bg-zinc-900/50 rounded-lg border border-gray-100 dark:border-zinc-800 leading-relaxed">
                  I'm open to new opportunities, collaborations, and interesting projects. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you as soon as possible!
                </p>
                
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <a href="mailto:Ardavan.shahrabi@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Ardavan.shahrabi@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Ontario, Canada
                    </span>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/a-shahrabi/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/a-shahrabi/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form - with left padding for more separation */}
              <div className="pl-0 md:pl-4">
                <form 
                  action="https://formspree.io/f/mkgodzzb" 
                  method="POST" 
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors text-base"
                        placeholder="YourEmail@Example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors text-base"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors text-base"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors text-base"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <div>
                  <button
  type="submit"
  disabled={isSubmitting}  
  className="rounded-full bg-gradient-to-r from-slate-900 to-blue-700 dark:from-blue-600 dark:to-slate-800 text-white px-6 py-2 transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"  /* Add disabled styles */
>
  {isSubmitting ? (  /* Replace button text with conditional */
    <span className="flex items-center">
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    </span>
  ) : "Send Message"}
</button>
                  </div>
                  
                  {/* Fixed Formspree redirect URL */}
                  <input type="hidden" name="_next" value="https://ardavan-portfolio.vercel.app/thank-you" />
                </form>
              </div>
            </div>
          </motion.section>

          <footer className="mt-20 pb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              © 2025 Ardavan Shahrabi. Built with Next.js, TailwindCSS and Framer motion. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}