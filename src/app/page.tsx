import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-5">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <ProjectsSection />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <ExperienceSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-lh py-5">
        <ContactSection />
      </section>
    </>
  );
}
