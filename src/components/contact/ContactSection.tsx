"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FaEnvelopeOpen, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    setLoading(true);

    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        form.reset();
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully.",
        error: (err) => err.message || "Failed to send message.",
      }
    );

    setLoading(false);
  }

  return (
    <section id="contact" className="w-full space-y-10">
      <h2 className="font-heading text-center text-3xl font-bold">Contact</h2>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* LEFT - FORM */}
        <div className="md:flex-3">
          <MagicCard className="rounded-xl p-3" mode="gradient">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold">Get in Touch</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  If you like what I do, feel free to reach out for formal inquiries or just to
                  chat.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="company" className="hidden" autoComplete="off" />

                {/* Name */}
                <div className="flex gap-2">
                  <input
                    name="firstName"
                    placeholder="First name"
                    required
                    className="bg-background w-1/2 rounded-md border px-3 py-2 focus:ring-1 focus:ring-[#87CEEB] focus:outline-none"
                  />
                  <input
                    name="lastName"
                    placeholder="Last name"
                    required
                    className="bg-background w-1/2 rounded-md border px-3 py-2 focus:ring-1 focus:ring-[#87CEEB] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-background w-full rounded-md border px-3 py-2 focus:ring-1 focus:ring-[#87CEEB] focus:outline-none"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={5}
                  className="bg-background w-full rounded-md border px-3 py-2 focus:ring-1 focus:ring-[#87CEEB] focus:outline-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: "#87CEEB" }}
                  className={cn(
                    "w-full rounded-md px-4 py-2 text-white transition",
                    "hover:opacity-90 disabled:opacity-50",
                    "focus:ring-2 focus:ring-[#87CEEB] focus:ring-offset-2 focus:outline-none"
                  )}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </MagicCard>
        </div>

        {/* RIGHT - CONTACT LINKS */}
        <div className="flex min-w-0 flex-col justify-center text-sm md:flex-1">
          <ContactItem
            icon={<FaEnvelopeOpen className="h-4 w-4 shrink-0" />}
            label="Email"
            value="kimgabriel.nasayao@g.msuiit.edu.ph"
            href="mailto:kimgabriel.nasayao@g.msuiit.edu.ph"
          />

          <ContactItem
            icon={<FaFacebook className="h-4 w-4 shrink-0" />}
            label="Facebook"
            value="Kim Gabriel Nasayao"
            href="https://www.facebook.com/kimgabriel.nasayao"
          />

          <ContactItem
            icon={<FaLinkedin className="h-4 w-4 shrink-0" />}
            label="FaLinkedin"
            value="Kim Gabriel (Gab) Nasayao"
            href="https://linkedin.com/in/kim-gabriel-nasayao"
          />

          <ContactItem
            icon={<FaGithub className="h-4 w-4 shrink-0" />}
            label="FaGithub"
            value="gabnash05"
            href="https://github.com/gabnash05"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="hover:bg-muted flex items-center gap-3 rounded-md border-none p-3 transition focus:outline-none"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-muted-foreground text-xs">{label}</span>
        <span className="font-medium wrap-break-word">{value}</span>
      </div>
    </a>
  );
}
