import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsStrip } from "@/components/SkillsStrip";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { BlogTeaserSection } from "@/components/BlogTeaserSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SkillsStrip />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <BlogTeaserSection posts={latestPosts} />
      <ContactSection />
      <Footer />
    </main>
  );
}
