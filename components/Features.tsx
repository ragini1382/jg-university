"use client";

import {
  Building2,
  CheckCircle2,
  FlaskConical,
  Library,
  Microscope,
  TreePine,
  Wifi,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const facilityCards = [
  {
    icon: FlaskConical,
    title: "IIoT Lab",
    description:
      "Industry 4.0 ready lab with sensors, PLCs, and real-time data analytics platforms.",
  },
  {
    icon: Microscope,
    title: "R&D + Incubation",
    description:
      "On-campus incubation centre supporting student startups from ideation to launch.",
  },
  {
    icon: Library,
    title: "Tech-enabled Library",
    description:
      "Digital archives, e-journals, and collaborative study zones open around the clock.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description:
      "High-speed connectivity across all academic blocks, hostels, and common areas.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "Smart classrooms, auditoriums, and sports complexes built for holistic growth.",
  },
  {
    icon: TreePine,
    title: "Green Campus",
    description:
      "Sustainable practices, solar power, and landscaped green spaces across 50+ acres.",
  },
];

const checklist = [
  "NEP 2020 compliant",
  "Faculty with industry experience",
  "Foreign university collaborations",
  "Hands-on industry use-cases",
  "Full Pay On-The-Job Training",
  "Cross-cultural internships",
  "Capstone projects",
  "24×7 facility access",
];

export default function Features() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[#FAF7F2] py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono-label mb-4 text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
              — Campus Life
            </p>
            <h2 className="font-display text-4xl font-bold text-[#0A1628] lg:text-5xl">
              World-Class Facilities
            </h2>
          </div>
          <p className="flex items-end text-base leading-relaxed text-[#4A5568]">
            Our campus is designed to inspire — combining cutting-edge technology,
            collaborative spaces, and a vibrant community that fuels innovation
            at every step of your academic journey.
          </p>
        </div>

        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilityCards.map((card, i) => (
            <div
              key={card.title}
              className="reveal card-lift rounded-2xl border border-[#C9A84C]/25 bg-white p-6"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/15">
                <card.icon className="h-6 w-6 text-[#C9A84C]" />
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

        <div
          className="reveal rounded-2xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, #112240 100%)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono-label mb-3 text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
                — Why JG
              </p>
              <h3 className="font-display text-3xl font-bold text-white lg:text-4xl">
                Built to give you every{" "}
                <span className="italic text-gold-gradient">advantage</span>
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
