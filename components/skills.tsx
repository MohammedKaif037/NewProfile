"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Cloud, Palette, Wrench } from "lucide-react"

export default function Skills() {
  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "Tailwind CSS", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Python", level: 70 },
    { name: "Django", level: 65 },
    { name: "RESTful APIs", level: 85 },
    { name: "GraphQL", level: 70 },
  ]

  const databaseSkills = [
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Firebase", level: 75 },
    { name: "Redis", level: 60 },
  ]

  const devopsSkills = [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "Vercel", level: 80 },
  ]

  const SkillList = ({ skills }: { skills: { name: string; level: number }[] }) => (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </div>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Code className="h-4 w-4" /> Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" /> Backend
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" /> Database
            </TabsTrigger>
            <TabsTrigger value="devops" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" /> DevOps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <Card>
              <CardContent className="pt-6">
                <SkillList skills={frontendSkills} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend">
            <Card>
              <CardContent className="pt-6">
                <SkillList skills={backendSkills} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database">
            <Card>
              <CardContent className="pt-6">
                <SkillList skills={databaseSkills} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devops">
            <Card>
              <CardContent className="pt-6">
                <SkillList skills={devopsSkills} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-medium">UI/UX</h4>
                </div>
                <ul className="space-y-2">
                  <li>Figma</li>
                  <li>Responsive Design</li>
                  <li>Wireframing</li>
                  <li>User Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-medium">Tools</h4>
                </div>
                <ul className="space-y-2">
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Jira</li>
                  <li>Slack</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-medium">Methodologies</h4>
                </div>
                <ul className="space-y-2">
                  <li>Agile/Scrum</li>
                  <li>Test-Driven Development</li>
                  <li>CI/CD</li>
                  <li>Code Reviews</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

