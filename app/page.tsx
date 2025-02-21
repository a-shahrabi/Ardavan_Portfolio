"use client"
import Image from "next/image";
import ThemeToggle from '../components/ui/theme-toggle';

import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header initial = {{opacity: 0, x: -100}}
        animate = {{opacity: 1, x: 0}}
        transition = {{duration: 0.8}} className="flex-items-center justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image 
              src="/1.jpeg"  
              alt="profile picture" 
              className="cursor-pointer transition-all duration-300 hover:scale-110"
              width={100}  
              height={100} 
            />
          </div>
          <ThemeToggle/>
        </motion.header>
        <main className = "space-y-10">
          <section className = "space-y-10">

          <motion.div
          initial = {{opacity: 0, x: 100}}
          animate = {{opacity: 1, x: 0}}
          transition = {{duration: 0.8}}
          className= "space-y-1" 
          >
            <h1 className = "text-4xl front-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Ardavan Shahrabi</h1>
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
            <Button className = "rounded-full bg-gradient-to-r from-rose-400 to-indigo-600 text-white transition-transform hover:scale-105"> 
              
              Resume</Button>
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

          </section>
          
        </main>
      </div>
    </div>
  );
}
