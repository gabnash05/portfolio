"use client";

import { Tabs, AnimatedTabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CurrentEducationCard } from "./CurrentEducationCard";
import { TimelineCard } from "./TimelineCard";
import { GraduationCap } from "lucide-react";
import { MagicCard } from "../ui/magic-card";

export default function ExperienceSection() {
  const timelineItems = [
    {
      title: "Bukidnon National High School",
      subtitle: "High School",
      location: "Malaybalay City, Bukidnon 8700, Philippines",
      award: "With Highest Honors",
      duration: "2017 – 2022",
    },
  ];

  return (
    <section id="experience" className="w-full space-y-6">
      <h2 className="font-heading text-center text-3xl font-bold">Experience & Education</h2>

      <Tabs defaultValue="education" className="mx-auto max-w-150">
        {/* Tabs */}
        <div className="flex justify-center">
          <AnimatedTabsList>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
          </AnimatedTabsList>
        </div>

        {/* EDUCATION */}
        <TabsContent value="education" className="mt-6">
          <div className="relative w-full">
            {/* Timeline line (desktop only) */}
            <div className="via-border absolute top-2 bottom-0 left-4 hidden w-px bg-linear-to-b from-[#87CEEB] to-transparent md:block" />

            {/* CURRENT */}
            <div className="relative pb-6 md:pb-8">
              {/* Icon (desktop only) */}
              <div className="ring-background absolute top-2 left-4 hidden h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#87CEEB] ring-4 md:flex">
                <GraduationCap className="text-primary-foreground h-3.5 w-3.5" />
              </div>

              <div className="w-full md:pl-10">
                <MagicCard className="w-full rounded-xl" mode="gradient">
                  <CurrentEducationCard />
                </MagicCard>
              </div>
            </div>

            {/* PAST */}
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pb-6 last:pb-0">
                <div className="bg-muted ring-background absolute top-2 left-4 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full ring-4 md:flex">
                  <GraduationCap className="text-muted-foreground h-3 w-3" />
                </div>

                <div className="w-full md:pl-8">
                  <MagicCard className="w-full rounded-xl" mode="gradient">
                    <TimelineCard {...item} />
                  </MagicCard>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* WORK */}
        <TabsContent value="work">
          <div className="flex justify-center">
            <div className="text-muted-foreground p-10 text-center text-sm">
              None yet. But this could be you. Just saying.
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
