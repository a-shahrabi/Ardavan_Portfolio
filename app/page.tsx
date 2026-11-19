import Image from "next/image";
import * as motion from "motion/react-client";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import ThemeToggle from "@/components/ui/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import HoverMenu from "@/components/HoverMenu";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import { profile, education, skills, experience, projects } from "@/lib/data";

const fadeIn = (from: { x?: number; y?: number }) => ({
  initial: { opacity: 0, ...from },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.8 },
});

const muted = "text-gray-600 dark:text-gray-400";
const strong = "font-bold text-black dark:text-white";
const cardClass =
  "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-block bg-linear-to-r from-slate-950 to-blue-800 bg-clip-text text-3xl font-semibold text-transparent dark:from-slate-200 dark:to-blue-400">
      {children}
    </h2>
  );
}

function Tag({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" }) {
  const sizing = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-2 text-sm";
  return <span className={`${sizing} rounded-full bg-gray-100 dark:bg-zinc-800`}>{children}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-slate-900 dark:text-white">
      <BackToTop />

      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          {...fadeIn({ x: -100 })}
          className="relative z-50 mb-12 flex items-center justify-between px-4 py-4"
        >
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={profile.photo}
              alt={`Profile picture of ${profile.name}`}
              className="cursor-pointer transition-all duration-300 hover:scale-110"
              width={100}
              height={100}
              priority
              quality={90}
            />
          </div>

          <div className="flex items-center space-x-4">
            <HoverMenu />
            <ThemeToggle />
          </div>
        </motion.header>

        <main className="space-y-10">
          {/* Intro */}
          <motion.div {...fadeIn({ x: 100 })} className="space-y-1">
            <h1 className="inline-block bg-linear-to-r from-slate-950 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-slate-200 dark:to-blue-400">
              {profile.name}
            </h1>
            <p className={muted}>{profile.title}</p>
            <p className={muted}>{profile.location}</p>
          </motion.div>

          {/* About */}
          <motion.section id="about" {...fadeIn({ x: -100 })} className="scroll-mt-8 space-y-3">
            <h2 className="text-lg">Hi There!</h2>
            <p className={`${muted} max-w-2xl text-sm`}>
              I&apos;m Ardavan Shahrabi, a Computer Science graduate from{" "}
              <span className={strong}>Dalhousie University</span> with a passion for{" "}
              <span className={strong}>algorithms</span>, full-stack development, and{" "}
              <span className={strong}>Machine Learning</span>. I love turning complex challenges into
              elegant solutions and building software that makes a real impact.
            </p>
            <p className={`${muted} max-w-2xl text-sm`}>
              My experience spans from winning a <span className={strong}>first-place hackathon</span>{" "}
              building an AI-driven networking app, to conducting academic research in combinatorial
              pattern matching where I helped reduce computational time by over 50% for genomic data
              processing. I hold certifications in Cybersecurity and DevOps.
            </p>
            <p className={`${muted} max-w-2xl text-sm`}>
              I&apos;m driven by creating accessible, inclusive technology that simplifies complex tasks
              and empowers users. Let&apos;s connect and build something awesome!
            </p>
          </motion.section>

          {/* Resume + socials */}
          <motion.div {...fadeIn({ x: 50 })} className="flex items-center space-x-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-full bg-linear-to-r from-slate-900 to-blue-700 px-4 text-sm font-medium text-white shadow-sm transition-transform hover:scale-105 focus:outline-hidden focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Resume
            </a>
            {[
              { href: profile.github, label: "GitHub", Icon: FaGithub },
              { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Education */}
          <motion.section id="education" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Education</SectionHeading>
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <p className={`${muted} text-sm`}>{edu.period}</p>
                <p className={`${muted} text-sm`}>{edu.location}</p>
                <p className="italic">{edu.school}</p>
                <p className="font-medium">{edu.degree}</p>
              </div>
            ))}
          </motion.section>

          {/* Skills */}
          <motion.section id="skills" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Skills &amp; Technologies</SectionHeading>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((group) => (
                <Card key={group.category} className={cardClass}>
                  <CardContent className="p-4">
                    <h3 className="mb-4 text-xl font-medium">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section id="experience" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Experience</SectionHeading>
            <ol className="relative ml-6 border-l-2 border-gray-200 dark:border-gray-800">
              {experience.map((job) => (
                <li key={`${job.company}-${job.role}`} className="mb-10 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-slate-900">
                    <span className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </span>
                  <div className="space-y-1">
                    <p className={`${muted} text-sm`}>{job.period}</p>
                    <p className={`${muted} text-sm`}>{job.location}</p>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-300">{job.role}</h3>
                    <p className="italic text-gray-800 dark:text-blue-400">{job.company}</p>
                  </div>
                  <p className={`${muted} mt-3 text-sm`}>{job.description}</p>
                </li>
              ))}
            </ol>
          </motion.section>

          {/* Projects */}
          <motion.section id="projects" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-6">
              {projects.map((project) => (
                <Card key={project.name} className={cardClass}>
                  <CardContent className="flex flex-col p-4">
                    <h3 className="mb-2 text-xl font-medium">{project.name}</h3>
                    <p className={`${muted} mb-4 text-sm`}>
                      {project.description}
                      {project.link && (
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-600 hover:underline dark:text-blue-400"
                        >
                          {project.link.label} →
                        </a>
                      )}
                    </p>

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="mb-2 font-medium">Key Features:</h4>
                        <ul className={`${muted} list-disc space-y-1 pl-4 text-sm`}>
                          {project.features.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag} size="sm">{tag}</Tag>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section id="contact" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-6 pr-4 md:pr-8">
                <p className={`${muted} rounded-lg border border-gray-100 bg-gray-50 p-4 leading-relaxed dark:border-zinc-800 dark:bg-zinc-900/50`}>
                  I&apos;m open to new opportunities, collaborations, and interesting projects. Whether you
                  have a question or just want to say hi, I&apos;ll do my best to get back to you as soon as
                  possible!
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-gray-100 p-3 dark:bg-zinc-800">
                      <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-gray-100 p-3 dark:bg-zinc-800">
                      <FaMapMarkerAlt className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{profile.location}</span>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="mb-4 text-lg font-medium">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {[
                      { href: profile.github, label: "GitHub", Icon: FaGithub },
                      { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
                    ].map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:text-black dark:bg-zinc-800 dark:text-gray-400 dark:hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pl-0 md:pl-4">
                <ContactForm />
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="mt-20 pb-8">
          <p className={`${muted} text-center text-sm`}>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, TailwindCSS and Motion. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
