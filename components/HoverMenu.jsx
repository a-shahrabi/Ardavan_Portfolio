"use client"
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const HoverMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

}