import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";

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
        <h2 className="font-heading mb-8 text-3xl font-bold">Contact</h2>
        <p>Your contact content here...</p>
      </section>
    </>
  );
}
