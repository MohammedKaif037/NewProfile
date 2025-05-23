"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
  longDescription: string
  challenges: string
  solutions: string
  technologies: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const projects: Project[] = [
    {
      id: 1,
      title: "SnippetVault",
      description: "A modern code snippet manager built with Next.js and Supabase.",
      image: "/public/logo.svg",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/yourusername/snippet-vault",
      demo: "https://snippet-vault.vercel.app",
      longDescription: 
        "SnippetVault is a feature-rich code snippet manager designed to help developers efficiently store, organize, and retrieve their code snippets. It offers a seamless user experience with advanced features like tag-based organization, powerful search capabilities, and light/dark mode support. The platform supports user authentication, allowing users to securely manage their snippets, mark favorites, archive old snippets, and sync data across devices. With its intuitive interface and robust functionality, SnippetVault caters to both casual coders and professional developers. The application also includes guest mode for users who want to try the platform without creating an account. Built using Next.js, TypeScript, and Supabase, SnippetVault ensures scalability, security, and ease of use.",
      challenges: 
        "Implementing real-time syncing across devices, optimizing search performance for large datasets, and ensuring secure storage of private snippets.",
      solutions: 
        "Leveraged Supabase's real-time database capabilities for syncing, implemented efficient indexing and filtering for search, and used Supabase Auth for secure user authentication and data privacy.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "Monaco Editor", "Prism"]
    },
    {
      id: 2,
      title: "CodePulse",
      description: "An AI-powered coding habit tracker to help developers build consistent coding habits.",
      image: "/placeholder.svg?height=200&width=200",
      tags: ["Next.js", "Supabase", "AI", "Tailwind CSS"],
      github: "https://github.com/yourusername/codepulse",
      demo: "https://codepulse-demo.vercel.app",
      longDescription: 
        "CodePulse is an innovative platform designed to help developers track their coding habits, monitor progress, and receive personalized guidance to improve their skills. The platform integrates AI-powered features such as a chat assistant, daily coding challenges, and personalized learning recommendations. Users can track their coding activity, view streak calendars, and analyze their progress through detailed charts and gamified XP systems. The onboarding process collects user preferences and goals, tailoring the experience to individual needs. CodePulse also includes task and project management tools, allowing users to organize their coding work effectively. With its sleek design and advanced functionality, CodePulse empowers developers to stay motivated and continuously grow their skills.",
      challenges: 
        "Integrating AI-driven insights, ensuring accurate tracking of coding activity, and designing a user-friendly interface for complex features.",
      solutions: 
        "Used the ChatAnywhere API for AI integration, implemented robust activity tracking with Supabase, and adopted a clean, intuitive UI design using shadcn/ui components.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "ChatAnywhere API", "Vercel"]
    },
    
    {
      id: 3,
      title: "VibeCart",
      description: "A mood-based e-commerce platform that recommends products tailored to how you're feeling.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Supabase", "AI", "Tailwind CSS"],
      github: "https://github.com/yourusername/vibecart",
      demo: "https://vibecart-demo.vercel.app",
      longDescription: 
        "VibeCart is a cutting-edge e-commerce platform that revolutionizes the shopping experience by aligning product recommendations with the user's current mood. Using AI-powered mood detection (via facial expressions or interactive quizzes), VibeCart curates personalized product suggestions that enhance or complement the user's emotional state. The platform includes advanced features like mood analytics, product reviews with emoji reactions, and a 3D/AR product viewer. Users can manage their shopping carts, track orders, generate invoices, and even subscribe to receive mood-based products regularly. With a fully responsive design, VibeCart ensures a seamless shopping experience across desktops, tablets, and mobile devices. The platform combines the power of AI, e-commerce, and modern web technologies to create a truly unique and engaging shopping journey.",
      challenges: 
        "Developing accurate mood detection algorithms, integrating multiple APIs for AR/3D viewing, and ensuring smooth performance across devices.",
      solutions: 
        "Used computer vision libraries for mood detection, integrated third-party AR/3D tools, and optimized the frontend with lazy loading and efficient state management using Zustand.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Zustand", "Nodemailer", "PDFKit"]
    },
  ]

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <motion.div key={project.id} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project)}>
                    Details
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center mx-4">
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </DialogDescription>
              </DialogHeader>

              <div className="aspect-video overflow-hidden rounded-md mb-4">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Overview</h4>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Challenges</h4>
                    <p>{selectedProject.challenges}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Solutions</h4>
                    <p>{selectedProject.solutions}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      View Source Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </motion.div>
    </div>
  )
}

