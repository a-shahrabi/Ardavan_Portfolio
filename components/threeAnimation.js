"use client"
import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Text } from '@react-three/drei'
import * as THREE from 'three'

// Animated cube component
function AnimatedCube(props) {
    const mesh = useRef()
    
    // Animation loop for rotation
    useFrame((state, delta) => {
      mesh.current.rotation.x += delta * 0.5
      mesh.current.rotation.y += delta * 0.2
    })
}  