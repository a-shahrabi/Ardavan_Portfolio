"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaArrowLeft } from "react-icons/fa"
import image1 from '../../../public/2.jpeg'

export default function Project1() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <Image 
            src={image1} 
            alt="project 1" 
            className="w-full rounded-lg"
            priority
          />
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Project1</h1>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">
                NEXT.js
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">
                TailwindCSS
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">
                Framer Motion
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm">
                shadcn
              </span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed description of your project goes here. Explain what the project does,
                the challenges you faced, and how you solved them.
              </p>
              
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>Feature 1 description</li>
                <li>Feature 2 description</li>
                <li>Feature 3 description</li>
              </ul>
              
              <h2 className="text-2xl font-semibold">Implementation Details</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Technical details about how you implemented the project, what technologies you used,
                and why you made certain technical decisions.
              </p>
            </div>

            <div className="flex gap-4">
              <Button 
                className="rounded-full !bg-gradient-to-r !from-slate-900 !to-blue-700 text-white transition-transform hover:scale-105"
                onClick={() => window.open('your-demo-link', '_blank')}
              >
                View Demo
              </Button>
              <Button 
                variant="outline"
                className="rounded-full transition-transform hover:scale-105"
                onClick={() => window.open('your-github-link', '_blank')}
              >
                View Code
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}