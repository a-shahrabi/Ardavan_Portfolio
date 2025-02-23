"use client"
import Image from "next/image";
import ThemeToggle from '../components/ui/theme-toggle';

import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import image1 from '../public/2.jpeg'
import image2 from '../public/3.jpeg'
import image3 from '../public/4.jpeg'
import image4 from '../public/5.jpeg'
import image5 from '../public/6.jpeg'
import image6 from '../public/7.jpeg'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header initial = {{opacity: 0, x: -100}}
        animate = {{opacity: 1, x: 0}}
        transition = {{duration: 0.8}} className="flex items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image 
              src="/1.jpeg"  
              alt="profile picture" 
              className="cursor-pointer transition-all duration-300 hover:scale-110"
              width={100}  
              height={100} 
            />
          </div>
          
          <div className="cursor-pointer">
            <ThemeToggle/>
          </div>
          
        </motion.header>
        <main className = "space-y-10">
          <section className = "space-y-10">

          <motion.div
          initial = {{opacity: 0, x: 100}}
          animate = {{opacity: 1, x: 0}}
          transition = {{duration: 0.8}}
          className= "space-y-1" 
          >
            <h1 className="text-4xl front-bold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
            Ardavan Shahrabi
          </h1>
            <p className = "text-gray-600 dark:text-gray-400">Software Developer & Machine Learning Engineer</p>
            {/* <p className = "text-gray-600 dark:text-gray-400">Certified DevOps</p> */}

            <p className = "text-gray-600 dark:text-gray-400">Ontario, Canada</p>

          </motion.div>

          <motion.div
          initial = {{opacity: 0, x: -100}}
          animate = {{opacity: 1, x: 0}}
          transition = {{duration: 0.8}}
          className = "space-y-3"
          >
          <h2 className = "text-lg "> Hi There!
            <p className = "text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
            I’m Ardavan Shahrabi, a recent Computer Science graduate with a passion for problem-solving, <span className = "font-bold text-black dark:text-white">algorithms</span>, and building impactful software. I love turning complex challenges into elegant solutions and writing code that makes people’s lives easier.

            I have experience in full-stack development, <span className = "font-bold text-black dark:text-white">DevOps</span>, and cybersecurity, with certifications in Cybersecurity from <span className = "font-bold text-black dark:text-white">Dalhousie University</span> and DevOps from ShiftKey Lab at Dalhousie University. Whether it’s securing systems, optimizing performance, or automating workflows, I enjoy diving deep into technology to create efficient and scalable solutions.

            Recently, I played a key role in developing an AI-driven networking application, collaborating with a talented team in a high-pressure 10-hour <span className="font-bold text-black dark:text-white">hackathon</span> where we secured <span className = "font-bold text-black dark:text-white bold">first place.</span> I worked across multiple areas, from database architecture to OpenAI API integration, ensuring the project’s success and technical excellence.

            Beyond competitions, my work includes academic research in combinatorial pattern matching, where I helped optimize query processing for large-scale genomic datasets. My research aimed to significantly reduce data processing time and memory usage, making large-scale analyses more efficient.

            I’m always eager to learn, build, and innovate—whether it’s developing intuitive applications, enhancing system security, or solving intricate coding problems. Let’s connect and create something awesome!  {" "}
            </p>

          </h2>
          </motion.div>

          <motion.div
          initial = {{opacity: 0, x: 50}}
          animate = {{opacity: 1, x: 0}}
          transition = {{duration: 0.8}}
          className = "flex items-center space-x-4"
          >
            <Button 
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="rounded-full !bg-gradient-to-r !from-slate-900 !to-blue-700 text-white transition-transform hover:scale-105"
              >
            Resume
            </Button>
              <Link href = "https://github.com/a-shahrabi/" target="_blank" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className = "w-6 h-6"/>
              </Link>

              <Link href = "https://www.linkedin.com/in/a-shahrabi/" target="_blank" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className = "w-6 h-6"/>
              </Link>

              {/* <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className = "w-6 h-6"/>
              </Link> */}

              {/* <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaInstagram className = "w-6 h-6"/>
              </Link> */}

          </motion.div>

          <motion.section 
          initial = {{opacity: 0, y: 100}}
          animate = {{opacity: 1, y: 0}}
          transition = {{duration: 0.8}}
          className = "space-y-8">
            <h2 
            className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
            Education
          </h2>

          <div className = "space-y-2">
            <div className = "flex items-centre justify-between">
              <div className="space-y-1"> 
                <p className = "text-sm text-gray-600 dark:text-gray-400">Sep, 2020 - May, 2024</p>
                <p className = "italic">Dalhousie University</p>
                <p className = "font-medium">Bachelor of Computer Science with honours (First Class Honours), (GPA: 3.93 / 4.3)
                 </p>
                <p className = "text-blue-600 dark:text-ble-400"></p>
              </div>
            </div>
            <p className = "text-gray-600 dark:text-gray-400"></p>
          </div>

          </motion.section>

          </section>
          <motion.section 
          initial = {{opacity: 0, y: 100}}
          animate = {{opacity: 1, y: 0}}
          transition = {{duration: 0.8}}
          className = "space-y-8"
          >
            <h2 
            className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
            Experience
          </h2>
          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">

                <p className = "text-sm text-gray-600 dark:text-gray-400"> Dec, 2023 - January, 2025</p>
                <p className = "font-medium text-indigo-900">IT Help Desk</p>
                <p className = "text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
              </div>
              <p></p>
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
              text Info
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">

                <p className = "text-sm text-gray-600 dark:text-gray-400"> Dec, 2023 - January, 2025</p>
                <p className = "font-medium text-indigo-900">IT Help Desk</p>
                <p className = "text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
              </div>
              <p></p>
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
              text Info
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">

                <p className = "text-sm text-gray-600 dark:text-gray-400"> Dec, 2023 - January, 2025</p>
                <p className = "font-medium text-indigo-900">IT Help Desk</p>
                <p className = "text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
              </div>
              <p></p>
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
              text Info
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">
                <p className = "text-sm text-gray-600 dark:text-gray-400"> Dec, 2023 - January, 2025</p>
                <p className = "font-medium text-indigo-900">IT Help Desk</p>
                <p className = "text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
              </div>
              <p></p>
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
              Led the developmetn of cloud of santa maria using lablab services,
              established auto CI/CD pipelines and automated deployment processes, 
              resulting in 60% faster release cycles
            </p>
          </div>

          </motion.section>

          <motion.section 
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
      <div className="flex gap-6"> 
       
        <div className="w-1/3">
          <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>

       
        <div className="w-2/3 flex flex-col">
          <div>
            <h3 className="text-xl font-medium mb-2">Portfolio Website</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A modern, responsive portfolio website built with Next.js and TailwindCSS.
              Features dark mode, animations, and responsive design.
              Led the developmetn of cloud of santa maria using lablab services,
              
            </p>
            
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Dark/Light mode toggle</li>
                <li>Smooth page transitions</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>

            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">TailwindCSS</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Framer Motion</span>
            </div>
          </div>

          {/* Arrow button */}
          <div className="flex justify-end mt-4">
            <Button variant="ghost" size="icon">
              <FaArrowRight className="w-4 h-4"/>
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

</div>

<div className="space-y-6"> 
  <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 cursor-pointer"> 
    <CardContent className="p-4">
      <div className="flex gap-6"> 
       
        <div className="w-1/3">
          <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>

       
        <div className="w-2/3 flex flex-col">
          <div>
            <h3 className="text-xl font-medium mb-2">Portfolio Website</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A modern, responsive portfolio website built with Next.js and TailwindCSS.
              Features dark mode, animations, and responsive design.
              Led the developmetn of cloud of santa maria using lablab services,
              
            </p>
            
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Dark/Light mode toggle</li>
                <li>Smooth page transitions</li>
                <li>Responsive design for all devices</li>
              </ul>
            </div>

            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">TailwindCSS</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Framer Motion</span>
            </div>
          </div>

          {/* Arrow button */}
          <div className="flex justify-end mt-4">
            <Button variant="ghost" size="icon">
              <FaArrowRight className="w-4 h-4"/>
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

</div>
            <footer className="mt-20 pb-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                © 2024 Ardavan Shahrabi. Built with Next.js and TailwindCSS. All rights reserved.
              </p>
            </footer>
          </motion.section>
        </main>
      </div>
    </div>
  );
}