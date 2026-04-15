import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ProfilePhoto } from "@/components/about/ProfilePhoto";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        {/* PHOTO — appears FIRST on mobile */}
        <div className="order-1 shrink-0 md:order-2">
          <ProfilePhoto className="mx-auto md:mx-0" size={210} />
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 flex-1 text-center md:order-1 md:text-left">
          <h1 className="font-heading mb-4 text-4xl font-bold">Hi, I&apos;m Gab</h1>

          <p className="mx-auto my-5 max-w-[40rem] leading-relaxed font-light md:mx-0">
            I&apos;m a 21 year old Aspiring Software Engineer from the Philippines
          </p>

          <p className="mx-auto max-w-[40rem] leading-relaxed md:mx-0">
            A{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={0}>
              Full-stack
            </AnimatedShinyText>{" "}
            enthusiast that&apos;s{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={0.6}>
              backend
            </AnimatedShinyText>{" "}
            focused and dabbles in{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={1.2}>
              AI integration.
            </AnimatedShinyText>
          </p>

          {/* LINKS */}
          <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm md:justify-start">
            <a
              href="/Nasayao_Resume.pdf"
              download
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Download className="size-4" />
              Resume
            </a>

            <div className="bg-border hidden h-4 w-px sm:block" />

            <a
              href="https://github.com/gabnash05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>

            <div className="bg-border hidden h-4 w-px sm:block" />

            <a
              href="https://linkedin.com/in/kim-gabriel-nasayao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaLinkedin className="size-4" />
              LinkedIn
            </a>

            <div className="bg-border hidden h-4 w-px sm:block" />

            <a
              href="mailto:kimgabriel.nasayao@g.msuiit.edu.ph"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaRegEnvelope className="size-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
