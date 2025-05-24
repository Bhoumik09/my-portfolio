"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <Briefcase className="w-8 h-8 text-purple-400" />
            Experience
          </motion.h2>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden group hover:shadow-purple-900/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span className="group-hover:text-purple-300 transition-colors duration-300">
                    ISABE Student Developer (College Representative)
                  </span>
                  <Badge variant="outline" className="border-gray-700 text-gray-300">
                    Jan 2025 - Present
                  </Badge>
                </CardTitle>
                <CardDescription className="text-gray-400">
                  International Society for Air Breathing Engines (ISABE) | Remote
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Sole backend developer for the new ISABE web portal, maintaining infrastructure, APIs, and database operations",
                    "Representing college in an official capacity to ensure long-term development and upkeep of ISABE's online presence",
                    "Implemented secure, scalable backend solutions using Node.js, Express, and PostgreSQL",
                    "Coordinating with the web team to deliver features, resolve bugs, and optimize system performance",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
