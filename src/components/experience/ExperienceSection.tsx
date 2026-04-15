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

      <div className="flex flex-col items-center justify-center">
        <Tabs defaultValue="education" className="w-full max-w-3xl">
          <div className="flex justify-center">
            <AnimatedTabsList>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
            </AnimatedTabsList>
          </div>

          {/* EDUCATION */}
          <TabsContent value="education" className="mt-6 flex justify-center">
            <div className="relative pl-6">
              {/* Vertical Timeline Line */}
              <div className="via-border absolute top-0 bottom-0 left-[11px] w-px bg-linear-to-b from-[#87CEEB] to-transparent" />

              {/* Current Education - Featured with prominent hat */}
              <div className="relative pb-8">
                <div className="ring-background absolute top-1 left-0 flex h-6 w-6 -translate-x-[3px] items-center justify-center rounded-full bg-[#87CEEB] ring-4">
                  <GraduationCap className="text-primary-foreground h-3.5 w-3.5" />
                </div>
                <div className="ml-10">
                  <MagicCard className="flex h-full flex-col rounded-xl" mode="gradient">
                    <CurrentEducationCard />
                  </MagicCard>
                </div>
              </div>

              {/* Past Timeline Items with subtle hats */}
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pb-6 last:pb-0">
                  <div className="bg-muted ring-background absolute top-1 left-0 flex h-5 w-5 -translate-x-[2px] items-center justify-center rounded-full ring-4">
                    <GraduationCap className="text-muted-foreground h-3 w-3" />
                  </div>
                  <div className="ml-8">
                    <MagicCard className="flex h-full flex-col rounded-xl" mode="gradient">
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
      </div>
    </section>
  );
}
