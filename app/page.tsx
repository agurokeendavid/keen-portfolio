import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsStrip />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
