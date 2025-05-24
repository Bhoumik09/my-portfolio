import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ResponsibilitiesSection from "@/components/sections/responsibilities-section"
import ContactSection from "@/components/sections/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ResponsibilitiesSection />
      <ContactSection />
    </div>
  )
}
