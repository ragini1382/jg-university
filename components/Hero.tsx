"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, GraduationCap, Play } from "lucide-react";

const stats = [
  { value: "17+", label: "Colleges" },
  { value: "58+", label: "Programmes" },
  { value: "10K+", label: "Alumni" },
  { value: "A+", label: "NAAC Grade" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      section.style.setProperty("--mx", String(mx));
      section.style.setProperty("--my", String(my));
    };

    section.addEventListener("mousemove", onMouseMove);
    return () => section.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-mesh relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      style={{ "--mx": "0", "--my": "0" } as React.CSSProperties}
    >
      {/* Parallax decorative elements */}
      <div
        className="pointer-events-none absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-[#C9A84C]"
        style={{
          transform: `translate(calc(var(--mx) * 12px), calc(var(--my) * 12px))`,
        }}
      />
      <div
        className="pointer-events-none absolute right-[15%] top-[30%] h-4 w-4 rotate-45 bg-[#0A1628]/10"
        style={{
          transform: `translate(calc(var(--mx) * -18px), calc(var(--my) * -18px))`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[25%] left-[20%] h-2 w-2 rounded-full bg-[#C9A84C]/60"
        style={{
          transform: `translate(calc(var(--mx) * 8px), calc(var(--my) * 8px))`,
        }}
      />

      <div className="mx-auto grid max-w-7xl flex-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left column */}
        <div className="z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-4 py-2">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#C9A84C]" />
            <span className="font-mono-label text-xs font-medium uppercase tracking-wider text-[#0A1628]">
              Admissions Open 2026–27
            </span>
          </div>

          <h1 className="font-display mb-6 leading-[1.1]">
            <span className="block text-5xl font-bold text-[#0A1628] sm:text-6xl lg:text-7xl">
              Knowledge
            </span>
            <span className="block text-5xl italic text-[#0A1628] sm:text-6xl lg:text-7xl">
              Beyond
            </span>
            <span className="shimmer-text block text-5xl font-bold sm:text-6xl lg:text-7xl">
              Boundaries.
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-[#4A5568] lg:text-lg">
            JG University is a UGC-approved institution under the ASIA Charitable
            Trust, offering experiential learning that bridges academia and
            industry — shaping leaders ready for tomorrow&apos;s world.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#programmes"
              className="btn-gold-gradient inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Explore Programmes
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A84C] px-6 py-3.5 text-sm font-semibold text-[#0A1628] transition-all duration-300 hover:bg-[#C9A84C]/10"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Play className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" />
              Watch Campus Tour
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-number font-display text-3xl font-bold lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#8892A4]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — floating cards */}
        <div className="relative hidden h-[520px] lg:block">
          {/* Back card — gold */}
          <div
            className="float-anim-delay-2 absolute right-4 top-8 z-0 w-64 rotate-[-6deg] rounded-2xl p-5 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 100%)",
            }}
          >
            <p className="font-display text-lg font-bold leading-snug text-[#0A1628]">
              Ranked Top University Gujarat State
            </p>
          </div>

          {/* Back card — glass */}
          <div className="float-anim-delay-1 glass-card absolute bottom-12 left-0 z-0 w-60 rotate-[5deg] rounded-2xl p-5">
            <p className="font-display text-base font-semibold text-[#0A1628]">
              500+ Companies Recruiting Partners
            </p>
          </div>

          {/* Main card */}
          <div className="float-anim absolute left-1/2 top-1/2 z-10 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-[#0A1628] px-6 py-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-[#C9A84C]" />
                <span className="font-display text-lg font-bold text-white">
                  JG University
                </span>
              </div>
            </div>
            <div className="space-y-3 px-6 py-5">
              {[
                "UGC Approved & NAAC A+ Accredited",
                "Industry-integrated curriculum",
                "Global internship opportunities",
                "State-of-the-art campus facilities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
                  <span className="text-sm text-[#4A5568]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#8892A4]">
          Scroll
        </span>
        <div className="h-10 w-px overflow-hidden bg-[#C9A84C]/30">
          <div className="scroll-indicator-line h-full w-full bg-[#C9A84C]" />
        </div>
      </div>
    </section>
  );
}
