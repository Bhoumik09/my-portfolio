"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import ProjectCard from "@/components/ui/project-card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Safar Saathi",
      period: "March 2024 - Present",
      description:
        "A full-stack ride-matching platform helping students and daily commuters connect with ideal travel partners.",
      highlights: [
        "Built a full-stack web application to match users based on route, time, budget, and gender preferences",
        "Implemented filters for cost and compatibility using Context API for global state management",
        "Designed a responsive, accessible UI with shadcn/ui and React Hook Form for seamless form handling",
        "Developed both frontend and backend with Next.js and TypeScript for type safety and performance",
        "Integrated Prisma ORM for PostgreSQL database management",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "shadcn/ui", "React Hook Form", "Context API"],
    },
    {
      title: "CollabSphere",
      period: "March 2024 - June 2024",
      description:
        "A collaborative platform designed to connect students with peers for successful project partnerships.",
      highlights: [
        "Developed an inclusive platform that enables introverts, ambiverts, and freshmen to find project partners easily",
        "Implemented intelligent matching algorithms to connect users based on skills and project interests",
        "Integrated Passport.js for secure authentication, ensuring user data protection and privacy",
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "CSS", "HTML", "Passport.js"],
    },
    {
      title: "Kitabi World",
      period: "October 2023 - January 2024",
      description: "A dynamic platform for browsing, purchasing, and reading books.",
      highlights: [
        "Developed a user-friendly platform with seamless browsing, purchasing, and reading functionalities",
        "Implemented advanced search and sorting features based on language, ratings, authors, and publishers",
        "Integrated a real-time rating system for enhanced user feedback experience",
        "Built a cart system for managing selected books with smooth purchasing process",
      ],
      technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <Code className="w-8 h-8 text-purple-400" />
            Personal Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
