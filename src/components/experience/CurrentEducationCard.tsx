"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, BookOpen } from "lucide-react";
import { Map } from "./Map";

export function CurrentEducationCard() {
  return (
    <Card className="w-150 overflow-hidden p-3">
      <div className="relative">
        <Map lat={8.2398} lng={124.2448} />
      </div>

      <Card className="border-muted/50">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                Mindanao State University – Iligan Institute of Technology
              </CardTitle>

              <p className="text-muted-foreground text-sm">
                Bachelor of Science in Computer Science
              </p>
            </div>

            <Badge variant="secondary">Current</Badge>
          </div>

          {/* Meta Grid */}
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
