import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Roboto_Slab } from "next/font/google";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/theme-toggle";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const robotoSlabHeading = Roboto_Slab({ subsets: ["latin"], variable: "--font-heading" });

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gab's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
        robotoSlabHeading.variable
      )}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-background sticky top-0 z-10 border-b">
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
                      <a href="#contact" className="block px-4 py-2 font-sans">
                        Contact
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ModeToggle />
            </div>
          </header>

          <main className="mx-auto w-full max-w-4xl flex-1 px-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
