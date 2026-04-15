"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, BookOpen } from "lucide-react";

interface TimelineCardProps {
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  award: string;
}

export function TimelineCard({ title, subtitle, location, duration, award }: TimelineCardProps) {
  return (
    <Card className="overflow-hidden p-3">
      <Card className="border-muted/50">
        <CardHeader className="space-y-3">
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>

          {/* Meta Grid */}
          <div className="text-muted-foreground grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{location}</span>
            </div>

            <div className="flex items-start gap-2">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
              Awards: <span className="text-foreground font-medium">{award}</span>
            </div>

            <div className="flex items-start gap-2">
              <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{duration}</span>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Card>
  );
}
