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
            <p className = "text-gray-600 dark:text-gray-400">Ontario, Canada</p>

          </motion.div>

          <motion.div
          initial = {{opacity: 0, x: -100}}
          animate = {{opacity: 1, x: 0}}
          transition = {{duration: 0.8}}
          className = "space-y-3"
          >
          <h2 className = "text-lg font-semibold"> Building Solutions for Tomorrow
            <p className = "text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Expert in clod architecture with {" "}

              <span className = "text-black dark:text-white">AWS</span> and {" "}
              <span className = "text-black dark:text-white">Azure</span>.
              specialize in designing and implementing large-scale distributed systems. 
              With deep expertise in {" "}
              <span className = "text-black dark:text-white">Python, Machine Learning, JavaScript, React, NEXT.js</span>
            </p>

            <p className = "text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Beyond technical architecture, I'm passionate about DevOps ractices and 
              building resilient systems that can scale effectively while maintaining 
              heigh availability and performance.
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
  className="rounded-full !bg-gradient-to-r !from-slate-900 !to-blue-700 text-white transition-transform hover:scale-105"
>
  Resume
</Button>
              <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className = "w-6 h-6"/>
              </Link>

              <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedin className = "w-6 h-6"/>
              </Link>

              <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaTwitter className = "w-6 h-6"/>
              </Link>

              <Link href = "#" className = "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaInstagram className = "w-6 h-6"/>
              </Link>

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
                <p className = "font-medium">Computer Science</p>
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
          initial = {{opacity: 0, y: 100}}
          animate = {{opacity: 1, y: 0}}
          transition = {{duration: 0.8}}
          >
            <h2 
            className="text-3xl font-semibold bg-gradient-to-r from-slate-950 to-blue-800 dark:from-slate-200 dark:to-blue-400 bg-clip-text text-transparent inline-block">
            Projects
          </h2>
          <div className = "grid grid-cols-1 mdgrid-col-3 gap-3">
            <Card className = "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer"> 
              <CardContent className = "p-4">
                <Image src = {image1} alt = "project 1" className = "rounded-lg mb-4"/>

                <div className = "flex items-center justify-between">
                  <div>
                    <h3 className = "font-medium">Project1</h3>
                    <p className = "text-sm text-gray-600 dark:text-gray-400">NEXT.js, TailwindCSS, Framer Motion, shadcn</p>

                  </div>
                  <Button variant = "ghost" size = "icon"><FaArrowRight className="w-4 h-4"/></Button>
                </div>
              </CardContent>
            </Card>
          </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
