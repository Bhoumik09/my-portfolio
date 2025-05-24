"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface Project {
  title: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <Card className="shadow-lg border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {project.period}
              </CardDescription>
            </div>
          </div>
          <p className="text-gray-300 mt-4">{project.description}</p>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-400">{highlight}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs border-gray-700 text-gray-300 hover:bg-purple-900/20 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
