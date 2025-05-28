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
      title: "Java Developer",
      company: "AIROBOSOFT Products and Services LLP",
      location: "Remote",
      period: "Nov 2022 - Mar 2025",
      description: [
        "Developed and optimized RESTful APIs using Spring Boot, enhancing performance by 25%.",
        "Implemented Microservices Architecture with Spring Boot and Docker.",
        "Managed CI/CD pipelines using Jenkins and reduced production downtime by 40%.",
        "Used Cassandra for NoSQL data storage and wrote unit tests with JUnit and Mockito.",
        "Worked in Agile/Scrum environment with cross-functional teams."
      ],
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "10Seconds Company",
      location: "Remote",
      period: "Aug 2022 - Sep 2022",
      description: [
        "Worked on building web applications using Django framework with Python backend.",
        "Created models and views, and used MySQL for data storage and queries.",
        "Developed user authentication and basic CRUD features for internal applications.",
        "Improved frontend responsiveness with Bootstrap and ensured smooth backend integration.",
        "Gained hands-on experience in deploying Django apps and working in version-controlled environments using Git."
      ],
    },
  ]

  const certifications = [
    {
      id: 1,
      title: "AWS Educate Introduction to Cloud 101",
      organization: "Amazon Web Services (AWS)",
      date: "Mar 2025",
      description: "Fundamentals of cloud computing including services, infrastructure, and global infrastructure overview.",
    },
    {
      id: 2,
      title: "Career Essentials in Generative AI",
      organization: "Microsoft and LinkedIn",
      date: "May 2024",
      description: "Covered topics like Generative AI, AI Ethics, and its practical applications in the modern workplace.",
    },
    {
      id: 3,
      title: "Python Essentials 2",
      organization: "Cisco",
      date: "Sep 2023",
      description: "Advanced Python topics including OOP, exceptions, file handling, and pip usage.",
    },
    {
      id: 4,
      title: "Python Essentials 1",
      organization: "Cisco",
      date: "Aug 2023",
      description: "Basic Python concepts such as variables, conditionals, loops, and analytical problem solving.",
    },
    {
      id: 5,
      title: "CPA: Programming in C++",
      organization: "C++ Institute",
      date: "Oct 2022",
      description: "Validated knowledge of C++ programming including syntax, OOP, and standard libraries.",
    },
    {
      id: 6,
      title: "AI Appreciate Badge - AI For All",
      organization: "CBSE and Intel",
      date: "Sep 2022",
      description: "Recognized for foundational understanding of Artificial Intelligence and its ethical use.",
    },
    {
      id: 7,
      title: "C++ Data Structures and Algorithms",
      organization: "DevTown",
      date: "Sep 2022",
      description: "Learned core data structures and algorithm techniques using C++.",
    },
    {
      id: 8,
      title: "Introduction to Digital Transformation with Google Cloud",
      organization: "Coursera",
      date: "Jul 2022",
      description: "Explored cloud digital transformation and key business enablers using Google Cloud.",
    },
    {
      id: 9,
      title: "Python 3 Ultimate Guide 2022",
      organization: "Udemy",
      date: "Jun 2022",
      description: "Comprehensive course covering Python basics to advanced topics including file I/O, modules, and error handling.",
    },
    {
      id: 10,
      title: "Artificial Intelligence",
      organization: "DevTown",
      date: "Sep 2022",
      description: "Covered core AI concepts and introductory machine learning principles.",
    },
    {
      id: 11,
      title: "Prompt Engineering Guide",
      organization: "Udemy",
      date: "Aug 2022",
      description: "Learned techniques for effective prompt crafting for AI and LLM-based applications.",
    },
  ];
  

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
        <Button asChild className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1DgwHW0MHekJEMHvB-E-F8OvXlUY2hjMo/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
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

