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
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground mb-6">Full-Stack Developer</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            I build responsive web applications with modern technologies. Specializing in React, Node.js, and cloud
            solutions with 2 years of professional experience.
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/placeholder.svg?height=320&width=320"
              alt="Alex Johnson"
              className="object-cover w-full h-full"
            />
          </div>
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
          {["React", "Node.js", "TypeScript", "AWS", "MongoDB"].map((tech) => (
            <div key={tech} className="text-lg font-medium">
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

