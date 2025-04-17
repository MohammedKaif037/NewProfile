import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="skills" className="py-16">
          <Skills />
        </section>

        <section id="projects" className="py-16">
          <Projects />
        </section>

        <section id="resume" className="py-16">
          <Resume />
        </section>

        <section id="education" className="py-16">
          <Education />
        </section>

        

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
