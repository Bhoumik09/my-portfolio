"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"

export default function SkillsSection() {
  const skills = {
    "Development Stack": [
      "C++",
      "JavaScript",
      "TypeScript",
      "Dart",
      "HTML/CSS",
      "React.js",
      "Flutter",
      "Node.js",
      "Prisma",
      "Tailwind CSS",
    ],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Supabase", "MongoDB"],
    "Academic & Interests": ["DSA", "DBMS", "OOP", "Full Stack Web Development"],
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <Code className="w-8 h-8 text-purple-400" />
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden group hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader>
                    <CardTitle className="text-lg text-white group-hover:text-purple-300 transition-colors duration-300">
                      {category}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.05 * idx }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="text-sm border-gray-700 text-gray-300 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
