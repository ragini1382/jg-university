"use client";

import { useState } from "react";
import {
  BookMarked,
  Briefcase,
  Code,
  FlaskConical,
  Scale,
  Trophy,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const partners = [
  "IBM",
  "ISRO",
  "SAC",
  "Tata Consultancy",
  "Cognizant",
  "ICICI Bank",
  "Godrej",
  "Coding Pro",
  "Yudiz",
];

const categories = [
  {
    name: "Management",
    icon: Briefcase,
    color: "#C9A84C",
    duration: "2–3 Years",
    courses: [
      "MBA",
      "BBA",
      "PGDM",
      "Executive MBA",
      "Ph.D. in Management",
    ],
    highlights: [
      "Industry mentorship",
      "Live case studies",
      "Corporate immersion",
    ],
  },
  {
    name: "Commerce",
    icon: BookMarked,
    color: "#3B82F6",
    duration: "3 Years",
    courses: [
      "B.Com",
      "M.Com",
      "BBA (Finance)",
      "Professional Accounting",
      "CFA Prep Track",
    ],
    highlights: [
      "CA/CS foundation",
      "FinTech modules",
      "Banking internships",
    ],
  },
  {
    name: "Computing & Tech",
    icon: Code,
    color: "#8B5CF6",
    duration: "3–4 Years",
    courses: [
      "B.Tech CSE",
      "B.Tech AI & ML",
      "M.Tech",
      "BCA",
      "MCA",
    ],
    highlights: [
      "IIoT lab access",
      "Cloud certifications",
      "Hackathon culture",
    ],
  },
  {
    name: "Science",
    icon: FlaskConical,
    color: "#22C55E",
    duration: "3–4 Years",
    courses: [
      "B.Sc Physics",
      "B.Sc Chemistry",
      "B.Sc Biotechnology",
      "M.Sc",
      "Integrated Ph.D.",
    ],
    highlights: [
      "Research labs",
      "Publication support",
      "Field expeditions",
    ],
  },
  {
    name: "Law",
    icon: Scale,
    color: "#EF4444",
    duration: "3–5 Years",
    courses: [
      "BA LLB",
      "BBA LLB",
      "LLB",
      "LLM",
      "Diploma in IP Law",
    ],
    highlights: [
      "Moot court",
      "Legal aid clinic",
      "Supreme Court visits",
    ],
  },
  {
    name: "Certificate",
    icon: Trophy,
    color: "#F59E0B",
    duration: "6–12 Months",
    courses: [
      "Data Analytics",
      "Digital Marketing",
      "Cyber Security",
      "UI/UX Design",
      "Entrepreneurship",
    ],
    highlights: [
      "Stackable credits",
      "Weekend batches",
      "Placement assist",
    ],
  },
];

export default function Programmes() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useReveal<HTMLElement>();
  const active = categories[activeTab];

  return (
    <section
      id="programmes"
      ref={sectionRef}
      className="relative border-t border-[#C9A84C]/30 py-28"
      style={{
        background: "linear-gradient(180deg, #0A1628 0%, #112240 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p
          className="reveal font-mono-label mb-4 text-center text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
        >
          — Academics
        </p>
        <h2
          className="reveal font-display mx-auto mb-12 max-w-3xl text-center text-4xl font-bold leading-tight text-white lg:text-5xl"
        >
          58+ Programmes Across{" "}
          <span className="block italic text-gold-gradient">5 Schools</span>
        </h2>

        {/* Tabs */}
        <div className="reveal mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300"
              style={
                activeTab === i
                  ? {
                      backgroundColor: cat.color,
                      color: "#0A1628",
                    }
                  : {
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.6)",
                      background: "transparent",
                    }
              }
            >
              <cat.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active content card */}
        <div className="reveal glass-card mx-auto max-w-4xl rounded-2xl p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: `${active.color}25` }}
            >
              <active.icon className="h-7 w-7" style={{ color: active.color }} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                {active.name}
              </h3>
              <span
                className="font-mono-label mt-1 inline-block rounded-full px-3 py-1 text-xs"
                style={{
                  backgroundColor: `${active.color}20`,
                  color: active.color,
                }}
              >
                {active.duration}
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8892A4]">
                Courses Offered
              </h4>
              <ul className="space-y-2">
                {active.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-white/90">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: active.color }}
                    />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8892A4]">
                Highlights
              </h4>
              <div className="space-y-2">
                {active.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-lg bg-[#0A1628]/60 px-4 py-3 text-sm text-white/85"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: active.color }}
          >
            Explore {active.name} Programmes →
          </a>
        </div>

        {/* Partner marquee */}
        <div className="reveal mt-16 overflow-hidden">
          <div className="marquee-track gap-12">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 px-8 font-mono-label text-sm uppercase tracking-widest text-white/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
