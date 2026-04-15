"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiQt,
  SiPython,
  SiExpo,
  SiExpress,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";
import {
  ArchitectureServiceAWSLambda,
  ResourceAmazonSimpleStorageServiceBucket,
  ArchitectureServiceAmazonDynamoDB,
  ArchitectureServiceAmazonTextract,
  ArchitectureServiceAmazonBedrock,
  ResourceAmazonElasticContainerServiceContainer2,
} from "aws-react-icons";
import { CodeIcon } from "lucide-react";
import type { Technology } from "@/components/ui/bento-grid";

const projects = [
  {
    name: "EFAS: Evacuation Facility Administration System",
    description:
      "Web-based disaster platform for LGUs to coordinate evacuations, track households, and manage aid distribution.",
    href: "https://github.com/gabnash05/evacuation-facility-administration-system",
    technologies: [
      ["React", SiReact],
      ["TypeScript", SiTypescript],
      ["TailwindCSS", SiTailwindcss],
      ["Flask", SiFlask],
      ["PostgreSQL", SiPostgresql],
      ["Docker", SiDocker],
    ] as Technology[],
    background: "/projects/efas-1.png",
    hoverBackground: "/projects/efas-2.png",
  },
  {
    name: "AScribe",
    description:
      "An AI-powered study assistant that processes uploaded notes to generate summaries, flashcards, and quizzes using cloud-based OCR and large language models.",
    href: "https://github.com/gabnash05/ascribe-old",
    technologies: [
      ["React", SiReact],
      ["TypeScript", SiTypescript],
      ["AWS S3", ResourceAmazonSimpleStorageServiceBucket],
      ["AWS Lambda", ArchitectureServiceAWSLambda],
      ["AWS DynamoDB", ArchitectureServiceAmazonDynamoDB],
      ["AWS Textract", ArchitectureServiceAmazonTextract],
      ["AWS Bedrock", ArchitectureServiceAmazonBedrock],
    ] as Technology[],
    background: "/projects/ascribe-1.png",
    hoverBackground: "/projects/ascribe-2.png",
  },
  {
    name: "Pixel Pursuit",
    description:
      "Cross-platform scavenger hunt app where players scan QR codes to earn points and compete on live leaderboards.",
    href: "https://github.com/gabnash05/pixel-pursuit",
    technologies: [
      ["React Native (Expo)", SiExpo],
      ["NativeWind/Tailwind", SiTailwindcss],
      ["Express.js", SiExpress],
      ["PostgreSQL", SiPostgresql],
      ["AWS EC2", ResourceAmazonElasticContainerServiceContainer2],
    ] as Technology[],
    background: "/projects/pixel-pursuit-1.png",
    hoverBackground: "/projects/pixel-pursuit-2.png",
  },
  {
    name: "UtiliTrack",
    description:
      "A desktop application designed for rental property owners to track, manage, and analyze utility expenses across their units. ",
    href: "https://github.com/KnightmareLeon/residential-rentals-utilities-tracker",
    technologies: [
      ["PyQt", SiQt],
      ["Python", SiPython],
      ["PostgreSQL", SiPostgresql],
      ["Matplotlib", SiPython],
    ] as Technology[],
    background: "/projects/utilitrack-1.png",
    hoverBackground: "/projects/utilitrack-2.png",
  },
  {
    name: "Lexis",
    description:
      "A simple student information system for managing student profiles, college departments, and academic programs",
    href: "https://github.com/gabnash05/ssis-web",
    technologies: [
      ["Vue.js", SiVuedotjs],
      ["TailwindCSS", SiTailwindcss],
      ["Flask", SiPython],
      ["PostgreSQL", SiPostgresql],
    ] as Technology[],
    background: "/projects/lexis-1.png",
    hoverBackground: "/projects/lexis-2.png",
  },
  {
    name: "Cube Timer",
    description: "A desktop application for timing and managing Rubik's Cube solves.",
    technologies: [
      ["PyQt", SiQt],
      ["Python", SiPython],
      ["MySQL", SiMysql],
    ] as Technology[],
    href: "https://github.com/gabnash05/cube-timer",
    background: "/projects/cubetimer-1.png",
    hoverBackground: "/projects/cubetimer-1.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 py-16">
      <h2 className="font-heading mb-8 text-3xl font-bold">Projects</h2>
      <BentoGrid>
        {projects.map((project) => (
          <BentoCard
            key={project.name}
            name={project.name}
            className="col-span-1"
            background={project.background}
            hoverBackground={project.hoverBackground}
            Icon={CodeIcon}
            description={project.description}
            href={project.href}
            technologies={project.technologies}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
