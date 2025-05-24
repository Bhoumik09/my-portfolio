"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-8 h-8" />
            Education
          </motion.h2>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:shadow-purple-900/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  Bachelor of Technology in Computer Science and Engineering
                </CardTitle>
                <CardDescription className="text-lg text-gray-400">
                  Vellore Institute of Technology, Bhopal | 2022-2026 | CGPA: 8.22
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
