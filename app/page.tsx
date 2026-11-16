import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { ConsultingSection } from "@/components/ConsultingSection";
import { BlogTeaserSection } from "@/components/BlogTeaserSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { projectService } from "@/services/projectService";
import { getYearsOfExperience } from "@/data/experience";

export default async function Home() {
  const projects = await projectService.getAllProjects();
  const latestPosts = getAllPosts().slice(0, 3);
  const yearsOfExperience = getYearsOfExperience();

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection yearsOfExperience={yearsOfExperience} />
      <SkillsStrip />
      <ExperienceSection yearsOfExperience={yearsOfExperience} />
      <ProjectsSection projects={projects} />
      <OpenSourceSection />
      <BlogTeaserSection posts={latestPosts} />
      <ConsultingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
