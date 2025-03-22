"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2017 - 2021",
      description:
        "Graduated with honors. Focused on software engineering, web development, and database systems. Participated in hackathons and coding competitions.",
      achievements: [
        "Dean's List: 2018-2021",
        "Senior Project: Developed a real-time collaborative coding platform",
        "Teaching Assistant for Introduction to Web Development",
      ],
    },
    {
      id: 2,
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Tech Academy",
      location: "San Francisco, CA",
      period: "Jan 2021 - Apr 2021",
      description:
        "Intensive 12-week program focused on modern web development technologies and practices. Built multiple full-stack applications using the MERN stack.",
      achievements: [
        "Capstone Project: E-commerce platform with payment integration",
        "Recognized for Best Team Project",
      ],
    },
  ]

  const courses = [
    "Advanced JavaScript Concepts",
    "React and Redux Masterclass",
    "Node.js API Development",
    "AWS for Developers",
    "Data Structures and Algorithms",
    "UI/UX Design Fundamentals",
  ]

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="space-y-8">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    </div>
                    <p className="text-lg">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mb-4">{edu.description}</p>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Achievements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Additional Courses & Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="bg-muted/50">
                <CardContent className="py-4 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{course}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

