// app/page.tsx
export default function Home() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="min-h-screen py-16">
        <h2 className="font-heading mb-8 text-3xl font-bold">About</h2>
        <p>Your about content here...</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16">
        <h2 className="font-heading mb-8 text-3xl font-bold">Projects</h2>
        <p>Your projects content here...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-16">
        <h2 className="font-heading mb-8 text-3xl font-bold">Contact</h2>
        <p>Your contact content here...</p>
      </section>
    </>
  );
}
