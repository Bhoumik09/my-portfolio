"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import ProfileImage from "@/components/ui/profile-image"

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval: NodeJS.Timeout | null = null
    const originalText = "BHOUMIK CHOPRA"
    textElement.dataset.value = originalText

    // Set initial text
    textElement.innerText = originalText

    const startAnimation = () => {
      let iteration = 0

      // Clear any existing interval
      if (interval) clearInterval(interval)

      // Start new animation sequence
      interval = setInterval(() => {
        // Create the new text by deciding which characters to scramble
        textElement.innerText = originalText
          .split("")
          .map((letter, index) => {
            // If we've iterated past this index, return the original letter
            if (index < iteration) {
              return originalText[index]
            }

            // Otherwise return a random letter
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("")

        // If we've completed all letters, stop the animation
        if (iteration >= originalText.length) {
          clearInterval(interval as NodeJS.Timeout)
          interval = null
        }

        iteration += 1 / 3
      }, 50) // Slightly slower for better readability
    }

    // Initial animation with a slight delay
    const initialTimeout = setTimeout(() => {
      startAnimation()
    }, 500)

    // Set up animation to repeat occasionally
    const animationInterval = setInterval(() => {
      // Only restart if not currently animating
      if (!interval) {
        startAnimation()
      }
    }, 10000) // Repeat every 10 seconds instead of 5 for less distraction

    return () => {
      if (interval) clearInterval(interval)
      clearInterval(animationInterval)
      clearTimeout(initialTimeout)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0,rgba(0,0,0,0.8)_70%)]"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-800"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              opacity: 0.03,
              transform: `scale(${Math.random() * 2 + 0.5})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="overflow-hidden"
            >
              <h1
                ref={textRef}
                data-value="BHOUMIK CHOPRA"
                className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 py-2"
              >
                BHOUMIK CHOPRA
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-xl mb-2 text-gray-300">Bachelor of Technology - Computer Science</p>
              <p className="text-lg mb-6 text-gray-400">Vellore Institute of Technology, Bhopal</p>
              <p className="text-lg mb-8 text-gray-400">Roll No.: 22BCE10108 | CGPA: 8.22</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Button variant="outline" className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm">
                <Phone className="w-4 h-4 mr-2" />
                +91-9871037727
              </Button>
              <Button variant="outline" className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm">
                <Mail className="w-4 h-4 mr-2" />
                bhoma090105@gmail.com
              </Button>
              <Button variant="outline" className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-500 mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
