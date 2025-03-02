"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const HoverMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const menuItems = [
    { title: 'About Me', href: '#about', icon: '👨‍💻' },
    { title: 'Education', href: '#education', icon: '🎓' },
    { title: 'Experience', href: '#experience', icon: '💼' },
    { title: 'Projects', href: '#projects', icon: '🚀' },
    { title: 'Skills', href: '#skills', icon: '🛠️' },
    { title: 'Contact', href: '#contact', icon: '📬' },
  ]
  
  return (
    <div className="relative">
      <motion.button
        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-700 dark:from-blue-700 dark:to-slate-900 text-white"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Menu</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          ▼
        </motion.span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-60 rounded-xl shadow-xl py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link 
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HoverMenu