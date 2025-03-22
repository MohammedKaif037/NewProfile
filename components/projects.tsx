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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A comprehensive e-commerce solution built with the MERN stack. Features include product catalog, user authentication, shopping cart, payment processing with Stripe, and an admin dashboard for inventory management.",
      challenges:
        "Implementing real-time inventory updates, secure payment processing, and optimizing performance for mobile devices.",
      solutions:
        "Used WebSockets for real-time updates, implemented Stripe's secure checkout, and adopted a mobile-first design approach with responsive components.",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "AWS S3"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A task management application that allows teams to collaborate on projects in real-time. Features include task creation, assignment, status tracking, comments, and notifications.",
      challenges: "Managing real-time updates across multiple users and ensuring data consistency.",
      solutions:
        "Leveraged Firebase Realtime Database for synchronization and implemented optimistic UI updates for a responsive feel.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React Query", "React DnD"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Mapbox", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A weather dashboard that provides current conditions and forecasts based on user location or search. Includes interactive maps, hourly and daily forecasts, and weather alerts.",
      challenges: "Handling API rate limits and displaying complex weather data in an intuitive way.",
      solutions:
        "Implemented caching strategies to reduce API calls and designed custom visualizations for weather data.",
      technologies: ["React", "OpenWeather API", "Mapbox GL", "Chart.js", "Geolocation API"],
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "A mobile-responsive fitness tracking application with progress visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "GraphQL", "MongoDB", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A fitness tracking application that allows users to log workouts, track progress, set goals, and visualize improvements over time with interactive charts.",
      challenges: "Creating an intuitive mobile experience and generating meaningful visualizations from workout data.",
      solutions:
        "Used React Native for a native-like experience and implemented D3.js for custom, interactive data visualizations.",
      technologies: ["React Native", "GraphQL", "Apollo Client", "MongoDB", "D3.js", "JWT"],
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "A social platform for sharing and discovering recipes with user interactions.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Django", "PostgreSQL", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A recipe sharing platform where users can discover, share, and save recipes. Features include user profiles, recipe ratings, comments, and personalized recommendations.",
      challenges: "Building a recommendation system and handling image uploads efficiently.",
      solutions:
        "Implemented a collaborative filtering algorithm for recommendations and used AWS S3 for scalable image storage.",
      technologies: ["Vue.js", "Vuex", "Django", "Django REST Framework", "PostgreSQL", "AWS S3", "Elasticsearch"],
    },
    {
      id: 6,
      title: "Real Estate Listing App",
      description: "A property listing application with map integration and filtering options.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Google Maps API", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A real estate listing application that allows users to search for properties with various filters, view property details, and contact agents. Includes map integration for location-based searches.",
      challenges: "Implementing complex search filters and optimizing map performance with many markers.",
      solutions:
        "Used MongoDB geospatial queries for efficient location-based searches and implemented marker clustering for map performance.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Cloudinary", "JWT"],
    },
    {
      id: 7,
      title: "Budget Tracker",
      description: "A personal finance application for tracking expenses and income.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Chart.js", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A personal finance application that helps users track income, expenses, and savings goals. Features include transaction categorization, budget setting, and visual reports of spending patterns.",
      challenges: "Creating intuitive data visualization and implementing secure financial data storage.",
      solutions:
        "Used Chart.js for interactive financial reports and Firebase with strict security rules for data protection.",
      technologies: ["React", "Firebase", "Chart.js", "Tailwind CSS", "React Hook Form"],
    },
    {
      id: 8,
      title: "Learning Management System",
      description: "An educational platform for course creation and student progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      longDescription:
        "A learning management system that allows instructors to create courses, upload materials, and track student progress. Students can enroll in courses, complete assignments, and receive feedback.",
      challenges: "Managing course content delivery and implementing a flexible assessment system.",
      solutions:
        "Used AWS S3 for content storage and developed a modular assessment framework that supports various question types.",
      technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "AWS S3", "Socket.io", "JWT"],
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

