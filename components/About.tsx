"use client";

import { Globe, Lightbulb, Shield, Zap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const statBoxes = [
  { value: "60+", label: "Years of Legacy" },
  { value: "17", label: "Colleges" },
  { value: "UGC", label: "Approved" },
];

const cards = [
  {
    icon: Lightbulb,
    title: "Interdisciplinary Approach",
    description:
      "Cross-school learning paths that connect management, science, and technology for holistic development.",
    bg: "bg-[#C9A84C]/15",
    iconColor: "text-[#C9A84C]",
  },
  {
    icon: Zap,
    title: "Immersive Learning",
    description:
      "Hands-on labs, live projects, and simulation-based pedagogy that brings theory to life.",
    bg: "bg-[#0A1628]/8",
    iconColor: "text-[#0A1628]",
  },
  {
    icon: Globe,
    title: "Whole Brain Pedagogy",
    description:
      "Balanced analytical and creative thinking frameworks designed for the modern workforce.",
    bg: "bg-[#C9A84C]/15",
    iconColor: "text-[#C9A84C]",
  },
  {
    icon: Shield,
    title: "Faculty from Industry",
    description:
      "Learn from practitioners who bring real-world expertise directly into the classroom.",
    bg: "bg-[#0A1628]/8",
    iconColor: "text-[#0A1628]",
  },
];

export default function About() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-white py-28"
    >
      <div className="mx-auto mb-16 h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left column */}
        <div>
          <p
            className="reveal font-mono-label mb-4 text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
            style={{ transitionDelay: "0s" }}
          >
            — Our Story
          </p>
          <h2
            className="reveal font-display mb-6 text-4xl font-bold leading-tight text-[#0A1628] lg:text-5xl"
            style={{ transitionDelay: "0.07s" }}
          >
            A University Built for the{" "}
            <span className="italic text-gold-gradient">Future</span>
          </h2>
          <p
            className="reveal mb-4 text-base leading-relaxed text-[#4A5568]"
            style={{ transitionDelay: "0.14s" }}
          >
            Founded in 1965 under the visionary ASIA Charitable Trust, JG
            University has grown into one of Gujarat&apos;s most respected
            institutions — nurturing generations of leaders across disciplines.
          </p>
          <p
            className="reveal mb-10 text-base leading-relaxed text-[#4A5568]"
            style={{ transitionDelay: "0.21s" }}
          >
            As a UGC-approved university, we combine academic rigour with
            experiential learning, industry partnerships, and a commitment to
            innovation that prepares students for global careers.
          </p>

          <div className="reveal grid grid-cols-3 gap-4" style={{ transitionDelay: "0.28s" }}>
            {statBoxes.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#C9A84C]/25 bg-[#FAF7F2] px-4 py-5 text-center"
              >
                <p className="stat-number font-display text-2xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[#8892A4]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — 2x2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal card-lift rounded-2xl border border-[#C9A84C]/25 bg-white p-6"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
              >
                <card.icon className={`h-6 w-6 ${card.iconColor}`} />
              </div>
              <h3 className="font-display mb-2 text-lg font-semibold text-[#0A1628]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4A5568]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
