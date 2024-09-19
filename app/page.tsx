import ContactSection from "@/components/layouts/ContactSection";
import HeroSection from "@/components/layouts/HeroSection";
import ProjectsSection from "@/components/layouts/ProjectSection";
import SkillsSection from "@/components/layouts/SkillSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
