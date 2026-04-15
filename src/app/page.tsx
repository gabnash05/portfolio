import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-5">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education" className="py-5">
        <h2 className="font-heading mb-8 text-3xl font-bold">Education</h2>
        <p>Your education content here...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-lh py-5">
        <h2 className="font-heading mb-8 text-3xl font-bold">Contact</h2>
        <p>Your contact content here...</p>
      </section>
    </>
  );
}
