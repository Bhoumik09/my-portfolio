"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function ResponsibilitiesSection() {
  const responsibilities = [
    {
      title: "Technical Team Member - IOS CLUB",
      period: "July 2023 - Present",
      achievements: [
        "Successfully Managed Game Flix 2.0- Treasure Hunt in ADVITYA 2024 of VIT Bhopal University",
        "Maintained Club's Website",
      ],
      color: "blue",
    },
    {
      title: "Event Manager - VITronix",
      period: "Jan 2023 - Present",
      achievements: [
        "Led and coordinated events with over 200 participants, ensuring smooth operations and engagement",
        "Successfully organized three major events, demonstrating teamwork and strategic planning skills",
      ],
      color: "purple",
    },
  ]

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
            <Award className="w-8 h-8 text-purple-400" />
            Positions of Responsibility
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden group hover:shadow-purple-900/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white">
                      <span className="group-hover:text-purple-300 transition-colors duration-300">{item.title}</span>
                      <Badge variant="outline" className="border-gray-700 text-gray-300">
                        {item.period}
                      </Badge>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <span
                            className={`w-2 h-2 bg-${item.color}-500 rounded-full mt-2 flex-shrink-0`}
                            style={{ backgroundColor: item.color === "blue" ? "#3b82f6" : "#a855f7" }}
                          ></span>
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
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
