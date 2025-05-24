"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0,rgba(0,0,0,0.8)_70%)]"></div>
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-900"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            initial={{ opacity: 0.02 }}
            animate={{
              opacity: [0.02, 0.04, 0.02],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 text-gray-400"
          >
            I'm always open to discussing new opportunities and interesting projects.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm hover:border-purple-500 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              bhoma090105@gmail.com
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 bg-black/50 hover:bg-gray-800 backdrop-blur-sm hover:border-purple-500 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91-9871037727
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
