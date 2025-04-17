"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar styling
      setScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.name.toLowerCase())

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // Handle hash links with smooth scrolling
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Dev<span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn("px-3", activeSection === item.name.toLowerCase() && "bg-muted text-primary")}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
            </Button>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-30 flex flex-col p-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "justify-start text-lg py-4 mb-2",
                activeSection === item.name.toLowerCase() && "bg-muted text-primary",
              )}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
            </Button>
          ))}
          <div className="mt-4 flex justify-center">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}
