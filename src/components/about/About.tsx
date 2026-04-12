import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ProfilePhoto } from "@/components/about/ProfilePhoto";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16">
        <div className="flex-1">
          <h1 className="font-heading mb-4 text-4xl font-bold">Hi, I'm Gab</h1>
          <p className="my-5 max-w-100 leading-relaxed font-light">
            I'm a 21 year old Aspiring Software Engineer from the Philippines
          </p>
          <p className="max-w-100 leading-relaxed">
            A{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={0}>
              Full-stack
            </AnimatedShinyText>{" "}
            enthusiast that's{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={0.6}>
              backend
            </AnimatedShinyText>{" "}
            focused and dabbles in{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={1.2}>
              AI integration
            </AnimatedShinyText>{" "}
            and{" "}
            <AnimatedShinyText className="font-bold italic" color="hsl(var(--accent))" delay={1.8}>
              Machine Learning
            </AnimatedShinyText>
            .
          </p>

          <div className="text-muted-foreground mt-6 flex items-center gap-4 text-sm">
            <a
              href="/Nasayao_Resume.pdf"
              download
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Download className="size-4" />
              Resume
            </a>

            <div className="bg-border h-4 w-px" />

            <a
              href="https://github.com/gabnash05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>

            <div className="bg-border h-4 w-px" />

            <a
              href="https://linkedin.com/in/kim-gabriel-nasayao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaLinkedin className="size-4" />
              LinkedIn
            </a>

            <div className="bg-border h-4 w-px" />

            <a
              href="mailto:kimgabriel.nasayao@g.msuiit.edu.ph"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <FaRegEnvelope className="size-4" />
              Email
            </a>
          </div>
        </div>

        <ProfilePhoto className="shrink-0" size={250} />
      </div>
    </section>
  );
}
