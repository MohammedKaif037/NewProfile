"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6">
I'm a dedicated Software Engineer with  2.5 years of experience in building scalable backend systems and data-driven applications. My software development journey started during my information science studies, and it has evolved into a strong passion for creating robust, high-performance solutions.</p>

            <p className="text-lg mb-6">
            I specialize in building enterprise-grade applications using Java and Spring Boot, with expertise in data processing, microservices architecture, and AI integration. With a strong focus on backend development and data engineering, I am committed to writing clean, maintainable code and continually expanding my expertise in machine learning and artificial intelligence.
            </p>

            <p className="text-lg mb-8">
              When I'm not coding, you can find me exploring new AI frameworks, reading research papers, or experimenting with data analytics tools. I believe in continuous learning and sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline" className="text-sm py-1">
              Backend Specialist
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              Data Engineer
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              AI Enthusiast
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              Problem Solver
            </Badge>
            <Badge variant="outline" className="text-sm py-1">
              Performance-Focused
            </Badge>
          </div>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">Mohammed Kaif</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Bangalore, IN</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">2.5 Years</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium">Full-time</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">English:</span>
                      <span className="font-medium">Proficient</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Hindi:</span>
                      <span className="font-medium">Native</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Kannada:</span>
                      <span className="font-medium">Native</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Telugu:</span>
                      <span className="font-medium">Speak</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

