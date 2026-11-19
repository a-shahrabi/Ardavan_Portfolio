"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

// Order matches the order of sections on the page
const menuItems = [
  { title: "About Me", href: "#about", icon: "👨‍💻" },
  { title: "Education", href: "#education", icon: "🎓" },
  { title: "Skills", href: "#skills", icon: "🛠️" },
  { title: "Experience", href: "#experience", icon: "💼" },
  { title: "Projects", href: "#projects", icon: "🚀" },
  { title: "Contact", href: "#contact", icon: "📬" },
];

export default function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on Escape or when tapping/clicking outside the menu
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="relative"
      // Only open on hover for real mice — on touch screens a tap fires both
      // "enter" and "click", which used to open and immediately close the menu.
      onPointerEnter={(e) => e.pointerType === "mouse" && setIsOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setIsOpen(false)}
    >
      <motion.button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center space-x-2 rounded-full bg-linear-to-r from-slate-900 to-blue-700 px-4 py-2 text-white dark:from-blue-700 dark:to-slate-900"
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Menu</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
          aria-hidden="true"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Page sections"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
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
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3 text-xl" aria-hidden="true">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
