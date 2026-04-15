"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface MapProps {
  lat: number;
  lng: number;
}

export function Map({ lat, lng }: MapProps) {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  // Initialize map
  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    let isMounted = true;

    const initMap = async () => {
      try {
        // Dynamically import Leaflet
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");

        // Clean up existing map
        if (mapRef.current) {
          mapRef.current.remove();
        }

        // Create map instance
        const map = L.map(mapContainerRef.current as HTMLElement).setView([lat, lng], 16);

        // Add tile layer
        const tileUrl = isDark
          ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          : "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";

        L.tileLayer(tileUrl, {
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
        }).addTo(map);

        // Create custom pulsing dot marker - LARGER SIZE
        const pulsingDotIcon = L.divIcon({
          className: "custom-pulsing-dot",
          html: `
            <div class="relative w-6 h-6">
              <div class="absolute w-full h-full rounded-full animate-ping opacity-75" style="background: ${isDark ? "white" : "black"}"></div>
              <div class="absolute w-full h-full rounded-full" style="background: ${isDark ? "white" : "black"}"></div>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        // Add marker
        L.marker([lat, lng], { icon: pulsingDotIcon }).addTo(map);

        // Add center button using Leaflet control
        const CenterControl = L.Control.extend({
          options: {
            position: "topright",
          },
          onAdd: function () {
            const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
            container.innerHTML = `
              <button class="bg-background hover:bg-muted text-foreground rounded-md px-3 py-1 text-sm shadow transition-colors" style="cursor: pointer; border: none;">
                Center
              </button>
            `;
            container.onclick = () => map.setView([lat, lng], 16);
            return container;
          },
        });

        const centerControl = new CenterControl();
        centerControl.addTo(map);
        mapRef.current = map;
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, isDark, isClient]);

  if (!isClient) {
    return (
      <div className="bg-muted relative h-64 w-full animate-pulse overflow-hidden rounded-xl">
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-[16/10] md:aspect-[16/9]">
      <div ref={mapContainerRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
