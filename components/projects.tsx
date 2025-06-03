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
      image: "/snippet.png",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/MohammedKaif037/SnippetManager",
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
      github: "https://github.com/MohammedKaif037/CodePulse",
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
      github: "https://github.com/MohammedKaif037/Ehchance-Store",
      demo: "https://vibecart-demo.vercel.app",
      longDescription: 
        "VibeCart is a cutting-edge e-commerce platform that revolutionizes the shopping experience by aligning product recommendations with the user's current mood. Using AI-powered mood detection (via facial expressions or interactive quizzes), VibeCart curates personalized product suggestions that enhance or complement the user's emotional state. The platform includes advanced features like mood analytics, product reviews with emoji reactions, and a 3D/AR product viewer. Users can manage their shopping carts, track orders, generate invoices, and even subscribe to receive mood-based products regularly. With a fully responsive design, VibeCart ensures a seamless shopping experience across desktops, tablets, and mobile devices. The platform combines the power of AI, e-commerce, and modern web technologies to create a truly unique and engaging shopping journey.",
      challenges: 
        "Developing accurate mood detection algorithms, integrating multiple APIs for AR/3D viewing, and ensuring smooth performance across devices.",
      solutions: 
        "Used computer vision libraries for mood detection, integrated third-party AR/3D tools, and optimized the frontend with lazy loading and efficient state management using Zustand.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Zustand", "Nodemailer", "PDFKit"]
    },
    {
      id: 4,
      title: "AQI AI Dashboard",
      description: "A modern dashboard that visualizes real-time and historical Air Quality Index (AQI) data with AI-powered health insights and alerts.",
      image: "/AQI.png",
      tags: ["Next.js", "AI", "Tailwind CSS", "Supabase", "Chart.js"],
      github: "https://github.com/MohammedKaif037/aqi_ai",
      demo: "https://aqi-ai-dashboard.vercel.app",
      longDescription: "The AQI AI Dashboard is a Next.js-based web application designed to monitor, analyze, and visualize air quality data across Indian cities. It fetches current and historical AQI metrics using Supabase as the backend and provides users with detailed insights powered by AI. The app includes interactive line charts for trend visualization, comparison features between cities, notification management, and customizable user settings. With support for light/dark themes, responsive design, and Radix UI components, it delivers a smooth and accessible experience across all devices.",
      challenges: "Fetching accurate real-time AQI data from open APIs, simulating mock data when no data was available, integrating charting libraries with dynamic data, and implementing responsive navigation with collapsible sidebar logic.",
      solutions: "Used mock data generation based on realistic patterns when actual data wasn't available. Integrated Recharts for beautiful, responsive data visualization and used Radix UI and React hooks to manage state and theme switching. Built reusable UI components with TypeScript for maintainability.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Recharts",
        "Zod",
        "React Hook Form",
        "next-themes",
        "Sonner",
        "Lucide Icons",
        "Supabase"
      ]
    },
    {
  id: 5,
  title: "APInspect: API Testing Tool",
  description: "A comprehensive API testing tool designed to help developers test, debug, and document their APIs with a user-friendly interface for HTTP requests and response management.",
  image: "/APInspect.png",
  tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  github: "https://github.com/MohammedKaif037/APIInspect/tree/main/apinspect%20(1)",
  demo: "https://apinspect-demo.vercel.app",
  longDescription: "APInspect is a full-featured API testing tool built with Next.js and TypeScript that provides developers with everything needed to test, debug, and document APIs. The application features a comprehensive HTTP request builder supporting all methods, an advanced response viewer with JSON formatting, environment variables management for different deployment stages, request collections and history tracking, multiple authentication methods (Basic, Bearer, API Key, OAuth), test scripts for response validation, and code snippet generation in multiple programming languages. With its modular architecture and local storage persistence, APInspect offers a seamless experience for API development workflows.",
  challenges: "Building a complex state management system for multiple interconnected features, implementing robust environment variable substitution across all request components, creating a flexible authentication system supporting multiple methods, and designing an intuitive test interface for response validation.",
  solutions: "Implemented unidirectional data flow with centralized state management in the root component. Created utility functions for environment variable processing and form data handling. Built modular components with clear separation of concerns and used local storage utilities for data persistence. Integrated Shadcn UI components for consistent design and user experience.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Fetch API",
    "Local Storage API",
    "JavaScript",
    "OAuth 2.0"
  ]
}
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
{/*                     <Button variant="outline" size="icon" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button> */}
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
            <DialogContent className="max-w-4xl w-full h-[85vh] p-0 overflow-hidden">
              <div className="h-full flex flex-col">
                <DialogHeader className="flex-shrink-0 p-6 pb-4 border-b">
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </DialogDescription>
                </DialogHeader>

                {/* Scrollable Content Area */}
                <div 
                  className="flex-1 overflow-y-scroll px-6 py-4"
                  style={{ maxHeight: 'calc(85vh - 180px)' }}
                >
                  <div className="space-y-6">
                    <div className="aspect-video overflow-hidden rounded-md">
                      <img
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Overview</h4>
                      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Challenges</h4>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          {selectedProject.challenges}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Solutions</h4>
                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          {selectedProject.solutions}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fixed Footer */}
                <div className="flex-shrink-0 border-t p-6">
                  <div className="flex justify-between">
{/*                     <Button asChild>
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        View Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button> */}
                    <Button variant="outline" asChild>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        View Source Code
                        <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </motion.div>
    </div>
  )
}
