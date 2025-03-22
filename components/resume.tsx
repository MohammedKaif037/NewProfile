"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, Award } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Resume() {
  const workExperience = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      description: [
        "Developed and maintained multiple client-facing web applications using React, Next.js, and Node.js.",
        "Implemented RESTful APIs and GraphQL endpoints for frontend consumption.",
        "Collaborated with UX/UI designers to implement responsive designs and improve user experience.",
        "Participated in code reviews and mentored junior developers.",
        "Reduced application load time by 40% through code optimization and implementing lazy loading.",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Remote",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Built responsive web applications using React and TypeScript.",
        "Worked with REST APIs to fetch and display data.",
        "Implemented state management using Redux and Context API.",
        "Collaborated with backend developers to design and implement API endpoints.",
        "Participated in daily stand-ups and sprint planning in an Agile environment.",
      ],
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "InnovateTech",
      location: "Boston, MA",
      period: "Jan 2021 - May 2021",
      description: [
        "Assisted in developing and maintaining company websites using HTML, CSS, and JavaScript.",
        "Learned and applied React fundamentals to small projects.",
        "Fixed bugs and implemented minor features under supervision.",
        "Participated in team meetings and gained exposure to professional development workflows.",
      ],
    },
  ]

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Developer - Associate",
      organization: "Amazon Web Services",
      date: "Dec 2022",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
    },
    {
      id: 2,
      title: "Professional Scrum Master I (PSM I)",
      organization: "Scrum.org",
      date: "Aug 2022",
      description: "Demonstrated understanding of Scrum framework and ability to apply it in real-world scenarios.",
    },
    {
      id: 3,
      title: "MongoDB Certified Developer",
      organization: "MongoDB University",
      date: "Mar 2022",
      description:
        "Validated skills in building applications using MongoDB, including data modeling, querying, and indexing.",
    },
  ]

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Resume</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> Experience
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award className="h-4 w-4" /> Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="space-y-6">
              {workExperience.map((job) => (
                <Card key={job.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-muted-foreground">{job.period}</p>
                        <p className="text-sm">{job.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="space-y-6">
              {certifications.map((cert) => (
                <Card key={cert.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.organization}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <p className="text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                    <p>{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

