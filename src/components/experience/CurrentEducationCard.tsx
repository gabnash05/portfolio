"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen } from "lucide-react";
import { Map } from "./Map";

export function CurrentEducationCard() {
  return (
    <Card className="w-full overflow-hidden p-3 sm:p-4">
      {/* MAP */}
      <div className="relative w-full">
        <Map lat={8.2398} lng={124.2448} />
      </div>

      {/* CONTENT */}
      <Card className="border-muted/50 mt-3 sm:mt-4">
        <CardHeader className="space-y-3">
          {/* HEADER */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="text-base leading-tight font-semibold sm:text-lg">
                Mindanao State University – Iligan Institute of Technology
              </CardTitle>

              <p className="text-muted-foreground text-sm">
                Bachelor of Science in Computer Science
              </p>
            </div>

            <Badge variant="secondary" className="w-fit">
              Current
            </Badge>
          </div>

          {/* META GRID */}
          <div className="text-muted-foreground grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Iligan City, Philippines</span>
            </div>

            <div className="flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Current GPA: <span className="text-foreground font-medium">1.17</span>
              </span>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
              <span>2023 – Present (Expected 2027)</span>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Card>
  );
}
