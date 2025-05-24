"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProfileImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateMovement = (axis: "x" | "y") => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0

    // Make movement more subtle (reduced from 50 to 80)
    const moveAmount =
      axis === "x" ? (mousePosition.x - windowWidth / 2) / 80 : (mousePosition.y - windowHeight / 2) / 80

    // Add limits to prevent excessive movement
    return Math.max(-5, Math.min(5, moveAmount))
  }

  return (
    <motion.div
      className="relative w-80 h-80 rounded-full border-4 border-gray-800 overflow-hidden"
      style={{
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
      }}
      animate={{
        x: calculateMovement("x"),
        y: calculateMovement("y"),
      }}
      transition={{ type: "spring", stiffness: 40, damping: 30, mass: 1.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-white">BC</div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-purple-500/20" />

      {/* Placeholder for actual image */}
      <img
        src="/placeholder.svg?height=320&width=320"
        alt="Bhoumik Chopra"
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-900/30"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}
