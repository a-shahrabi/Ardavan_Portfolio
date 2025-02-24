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
                <p className = "text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
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

                <p className = "text-sm text-gray-600 dark:text-gray-400"> Nov, 2024 - Present</p>
                <p className = "text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
                <p className = "font-medium text-indigo-900">Founder & Developer</p>
                <p className = "text-black-600 dark:text-blue-400 italic">WhoRU? (Startup)</p>
              </div>
            
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
            What started as an ambitious idea in a high-pressure AI hackathon has now evolved into a full-fledged startup. Our AI-powered networking app is designed to help professionals seamlessly capture, organize, and recall key details about the people they meet.

            From intelligent voice transcription to smart suggestions, we're continuously refining the platform—iterating on AI capabilities, conducting user testing, and ensuring the product aligns with real-world networking needs.

            This journey began with a winning hackathon project, but our vision extends far beyond that. We’re transforming an innovative prototype into a market-ready solution, redefining how professionals build and maintain meaningful connections.
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">

                <p className = "text-sm text-gray-600 dark:text-gray-400"> Dec, 2023 - January, 2025</p>
                <p className = "text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
                <p className = "font-medium text-indigo-900">IT Help Desk</p>
                <p className = "text-black-600 dark:text-blue-400 italic">ByDesign Embroidery & Screen Print</p>
              </div>
              
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
            As an IT Support Specialist, I provided hands-on technical support, ensuring company systems ran smoothly and securely. From setting up workstations for new employees to troubleshooting software and hardware issues, I worked to maintain a seamless digital workspace.

            Beyond solving immediate technical problems, I focused on empowering users. I developed an internal knowledge base with 10+ step-by-step user guides covering essential IT procedures, from printer setup to remote access. Additionally, I led bi-weekly training sessions for teams of 5-10 employees, equipping them with the skills to navigate Microsoft Office and company-specific software confidently.

            By combining technical expertise with user education, I helped bridge the gap between IT and everyday workflows—making technology more accessible, efficient, and secure.
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">
                <p className = "text-sm text-gray-600 dark:text-gray-400"> Feb, 2023 - Aug, 2023</p>
                <p className = "text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
                <p className = "font-medium text-indigo-900">Research Assistant</p>
                <p className = "text-black-600 dark:text-blue-400 italic">Dalhousie University</p>
              </div>
              
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
            As a Research Assistant at Dalhousie University, I contributed to cutting-edge work in combinatorial pattern matching, co-authoring a research paper published in Volume 259, pages 26:1-26:14, 2023. My focus was on optimizing algorithms for large-scale data processing, with real-world applications in genomics and beyond.

            By refining query processing techniques, I helped reduce computational time by over 50%, significantly accelerating data retrieval. Additionally, I developed space-efficient indexing methods, cutting memory usage in half and enabling more scalable solutions for handling vast genomic datasets.

            This research has the potential to transform how large datasets are processed, reducing analysis times from several hours to under an hour—opening doors to faster, more efficient insights in data-intensive fields.
            </p>
          </div>

          <div className = "space-y-2">
            <div className = "flex items-center justify-between"> 
              <div className = "space-y-1">
                <p className = "text-sm text-gray-600 dark:text-gray-400"> June, 2023 - Oct, 2023</p>
                <p className = "text-sm text-gray-600 dark:text-gray-400">Halifax, NS</p>
                <p className = "font-medium text-indigo-900">Student Coordinator at Shiftkey Lab (Volunteer)</p>
                <p className = "text-black-600 dark:text-blue-400 italic">Dalhousie University</p>
              </div>
              
            </div>
            <p className = "text-gray-600 dark:text-gray-400 text-sm">
            As a Research Assistant at Dalhousie University, I contributed to cutting-edge work in combinatorial pattern matching, co-authoring a research paper published in Volume 259, pages 26:1-26:14, 2023. My focus was on optimizing algorithms for large-scale data processing, with real-world applications in genomics and beyond.

            By refining query processing techniques, I helped reduce computational time by over 50%, significantly accelerating data retrieval. Additionally, I developed space-efficient indexing methods, cutting memory usage in half and enabling more scalable solutions for handling vast genomic datasets.

            This research has the potential to transform how large datasets are processed, reducing analysis times from several hours to under an hour—opening doors to faster, more efficient insights in data-intensive fields.
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
      <div className="flex flex-col"> 
       
        <div className="w-1/3">
          {/* <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          /> */}
        </div>

       
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
                <li>Responsive Design: The website is fully responsive, ensuring it looks great and functions perfectly on all devices, from desktops to mobile phones.</li>
              </ul>
            </div>

            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">TailwindCSS</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Framer Motion</span>
            </div>
          </div>

         
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
    <div className="flex flex-col"> 
       
        <div className="w-1/3">
          {/* <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          /> */}
        </div>

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
                <li>MongoDB Database Integration: Designed and implemented a scalable database architecture to manage user data, project information, and team collaborations efficiently.</li>
                <li>User-Friendly Interface: The platform's interface was built with a focus on usability, incorporating design thinking principles to make it easy for users to navigate and interact with.</li>
                <li>Seamless Deployment: The platform was successfully deployed, allowing junior developers to access it anytime to collaborate on projects.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Next.js</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">React</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">MongoDB</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Express</span>
            </div>
          </div>

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
    <div className="flex flex-col"> 
       
        <div className="w-1/3">
          {/* <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          /> */}
        </div>

       
        <div className="w-full flex flex-col">
          <div>
            <h3 className="text-xl font-medium mb-2">MONI-k</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            MONI-k is a project focused on indexing large text datasets for genetics studies. 
            I implemented efficient data structures and algorithms in C to enhance the indexing process, 
            enabling faster and more accurate data retrieval for genetic analysis. My work contributed to 
            optimizing the data processing capabilities of the project, which is crucial for large-scale genomic studies.
            Additionally, I co-authored a paper detailing the project, which was accepted for presentation at the Annual 
            Symposium on Combinatorial Pattern Matching. This paper discusses the algorithms and data structures used in the 
            project, showcasing our approach to improving text indexing in the context of genetics.
            </p>
            
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="text-sm list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Efficient Data Indexing: Developed data structures and algorithms to efficiently index large-scale genetic datasets, improving processing speed and accuracy.</li>
                <li>Genetics-Focused Algorithms: Specialized in algorithms that optimize text indexing for genomic data, addressing the unique challenges of large genetic datasets.</li>
                <li>Paper Publication: Co-authored a research paper accepted by the Annual Symposium on 
                  Combinatorial Pattern Matching, contributing to the academic community.<a 
        href="https://www.google.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Annual Symposium on Combinatorial Pattern Matching
      </a></li>
              </ul>
            </div>

            
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">C</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Algorithm</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs">Data Structure</span>
            </div>
          </div>

         
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
    <div className="flex flex-col"> 
       
        <div className="w-1/3">
          {/* <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          /> */}
        </div>

        <div className="w-full flex flex-col">
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
    <div className="flex flex-col"> 
       
        <div className="w-1/3">
          {/* <Image 
            src={image1} 
            alt="project 1" 
            className="rounded-lg w-full h-48 object-cover"
          /> */}
        </div>

       
        <div className="w-full flex flex-col">
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