"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LightRays } from "../ui/light-rays";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-10 overflow-hidden border-b">
      <LightRays count={5} speed={14} length="200px" blur={24} />
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#about" className="block px-4 py-3 font-sans">
                  About
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#projects" className="block px-4 py-2 font-sans">
                  Projects
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#education" className="block px-4 py-2 font-sans">
                  Education
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#contact" className="block px-4 py-2 font-sans">
                  Contact
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <AnimatedThemeToggler className="hover:bg-muted cursor-pointer rounded-md p-2 transition-colors" />
      </div>
    </header>
  );
}
