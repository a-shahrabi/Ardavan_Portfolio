import Image from "next/image";
import * as motion from "motion/react-client";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import ThemeToggle from "@/components/ui/theme-toggle";
import { Card, CardContent } from "@/components/ui/card";
import HoverMenu from "@/components/HoverMenu";
import BackToTop from "@/components/BackToTop";
import ContactForm from "@/components/ContactForm";
import {
  profile,
  about,
  experience,
  earlierExperience,
  projects,
  publication,
  education,
  skills,
  certifications,
  volunteering,
  type Link,
} from "@/lib/data";

const fadeIn = (from: { x?: number; y?: number }) => ({
  initial: { opacity: 0, ...from },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.8 },
});

const muted = "text-gray-600 dark:text-gray-400";
const linkClass = "text-blue-700 hover:underline dark:text-blue-400";
const cardClass =
  "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105";

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FaEnvelope },
];

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

function Badge({ children, tone }: { children: React.ReactNode; tone: "green" | "amber" | "blue" }) {
  const tones = {
    green: "border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/50 dark:text-green-300",
    amber: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-300",
    blue: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

function ExternalLinks({ links }: { links: Link[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {link.label} →
          </a>
        </li>
      ))}
    </ul>
  );
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
              alt={`Photo of ${profile.name}`}
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

        <main className="space-y-12">
          {/* Hero */}
          <motion.div {...fadeIn({ x: 100 })} className="space-y-3">
            <div className="space-y-1">
              <h1 className="inline-block bg-linear-to-r from-slate-950 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-slate-200 dark:to-blue-400">
                {profile.name}
              </h1>
              <p className={muted}>{profile.headline}</p>
              <p className={muted}>{profile.location}</p>
            </div>
            <a href="#contact" className="inline-block">
              <Badge tone="green">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                {profile.openToWork.badge}
              </Badge>
            </a>
          </motion.div>

          {/* About */}
          <motion.section id="about" {...fadeIn({ x: -100 })} className="scroll-mt-8 space-y-3">
            <h2 className="text-lg">Hi There!</h2>
            {about.map((paragraph) => (
              <p key={paragraph} className={`${muted} text-sm leading-relaxed`}>
                {paragraph}
              </p>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
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
                    <p className={`${muted} text-sm`}>
                      {job.period}
                      {job.location && <> · {job.location}</>}
                    </p>
                    <h3 className="font-medium text-indigo-900 dark:text-indigo-300">{job.role}</h3>
                    <p className="italic text-gray-800 dark:text-blue-400">
                      {job.companyUrl ? (
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </p>
                    {job.summary && <p className={`${muted} text-sm`}>{job.summary}</p>}
                  </div>
                  <ul className={`${muted} mt-3 list-disc space-y-1.5 pl-4 text-sm`}>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {job.stack && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <Tag key={s} size="sm">{s}</Tag>
                      ))}
                    </div>
                  )}
                  {job.links && (
                    <div className="mt-3">
                      <ExternalLinks links={job.links} />
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Earlier experience</h3>
              <ul className="space-y-2 text-sm">
                {earlierExperience.map((job) => (
                  <li key={job.company}>
                    <span className="font-medium">{job.role}</span>, {job.company}{" "}
                    <span className={muted}>
                      · {job.period}
                      {job.note && <> · {job.note}</>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section id="projects" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-6">
              {projects.map((project) => (
                <Card key={project.name} className={cardClass}>
                  <CardContent className="space-y-3 p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-medium">{project.name}</h3>
                      {project.status && <Badge tone="amber">{project.status}</Badge>}
                    </div>
                    {project.award && <Badge tone="blue">🏆 {project.award}</Badge>}
                    {project.description.map((paragraph) => (
                      <p key={paragraph} className={`${muted} text-sm`}>
                        {paragraph}
                      </p>
                    ))}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag} size="sm">{tag}</Tag>
                        ))}
                      </div>
                    )}
                    {project.links && <ExternalLinks links={project.links} />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Publication */}
          <motion.section id="publication" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-6">
            <SectionHeading>Publication</SectionHeading>
            <div className="space-y-2">
              <h3 className="font-medium">&ldquo;{publication.title}&rdquo;</h3>
              <p className={`${muted} text-sm`}>
                {publication.authors.map((a, i) => (
                  <span key={a.name}>
                    {a.me ? <strong className="text-black dark:text-white">{a.name}</strong> : a.name}
                    {i < publication.authors.length - 2 ? ", " : i === publication.authors.length - 2 ? ", and " : ""}
                  </span>
                ))}
              </p>
              <p className={`${muted} text-sm italic`}>{publication.venue}</p>
              <ExternalLinks links={publication.links} />
            </div>
          </motion.section>

          {/* Education */}
          <motion.section id="education" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-6">
            <SectionHeading>Education</SectionHeading>
            {education.map((edu) => (
              <div key={edu.school} className="space-y-1">
                <p className={`${muted} text-sm`}>
                  {edu.period} · {edu.location}
                </p>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="italic">{edu.school}</p>
                <p className={`${muted} text-sm`}>{edu.detail}</p>
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

          {/* Certifications */}
          <motion.section id="certifications" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-6">
            <SectionHeading>Certifications</SectionHeading>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">{cert.name}</span>
                  <span className={`${muted} rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-zinc-800`}>
                    {cert.status}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Volunteering */}
          <motion.section id="volunteering" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-6">
            <SectionHeading>Volunteering</SectionHeading>
            {volunteering.map((v) => (
              <div key={v.org} className="space-y-1">
                <p className={`${muted} text-sm`}>{v.period}</p>
                <h3 className="font-medium text-indigo-900 dark:text-indigo-300">{v.role}</h3>
                <p className="italic text-gray-800 dark:text-blue-400">{v.org}</p>
                <p className={`${muted} pt-2 text-sm`}>{v.description}</p>
              </div>
            ))}
          </motion.section>

          {/* Contact */}
          <motion.section id="contact" {...fadeIn({ y: 100 })} className="scroll-mt-8 space-y-8">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="space-y-6">
              <p className={`${muted} rounded-lg border border-gray-100 bg-gray-50 p-4 leading-relaxed dark:border-zinc-800 dark:bg-zinc-900/50`}>
                I&apos;m looking for {profile.openToWork.roles}. If you have a role, a project, or a
                question, send me a message. I&apos;ll get back to you as soon as I can.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
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

              <ContactForm />
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
