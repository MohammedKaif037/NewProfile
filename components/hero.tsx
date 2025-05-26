"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col justify-center pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Mohammed kaif</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-6">Full-Stack Java Developer</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
          I build scalable web applications with a focus on Java, Spring Boot, and cloud solutions. With 2+ years of experience, I also work with React and Node.js to deliver full-stack solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/MohammedKaif037" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/mohammed-kaif-a7793923a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
           
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 md:mt-32 text-center"
      >
        <p className="text-muted-foreground mb-4">Currently working with</p>
        <div className="flex flex-wrap justify-center gap-8">
          {["Java", "Spring Boot", "Hibernate", "RESTful APIs", "MySQL", "PostgreSQL", "AWS (EC2, S3)", "Docker", "Maven",  "JUnit", "Mockito"].map((tech) => (
            <div key={tech} className="text-lg font-medium">
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

