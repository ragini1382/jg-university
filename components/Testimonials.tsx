"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    grad: "Alumni",
    color: "#C9A84C",
    initials: "JG",
    quote:
      "JG University gave me the confidence to pursue my passion. The creative environment and supportive faculty shaped not just my career, but who I am today.",
  },
  {
    name: "Parth Rupareliya",
    role: "Art Director",
    grad: "Design",
    color: "#8B5CF6",
    initials: "PR",
    quote:
      "The interdisciplinary approach at JG opened doors I never imagined. From classroom projects to industry placements, every experience was transformative.",
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Software Engineer, TCS",
    grad: "B.Tech CSE",
    color: "#3B82F6",
    initials: "YS",
    quote:
      "The computing programme's industry integration prepared me for TCS from day one. Hands-on labs and mentorship made the difference in my placement journey.",
  },
  {
    name: "Krishna Soni",
    role: "Banking Professional, ICICI Bank",
    grad: "Commerce",
    color: "#22C55E",
    initials: "KS",
    quote:
      "JG University's commerce faculty connected theory with real banking practices. The internship programme directly led to my role at ICICI Bank.",
  },
  {
    name: "Parth Raval",
    role: "Media Professional, Colors Gujarati",
    grad: "Media Studies",
    color: "#EF4444",
    initials: "PR",
    quote:
      "From campus events to media projects, JG nurtured my storytelling skills. The network and exposure here are unmatched in Gujarat.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useReveal<HTMLElement>();

  const goTo = (index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % testimonials.length);
  const prev = () =>
    goTo((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-28"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <p className="reveal font-mono-label mb-4 text-center text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
          — Voices
        </p>
        <h2 className="reveal font-display mb-12 text-center text-4xl font-bold text-[#0A1628] lg:text-5xl">
          Stories that <span className="italic text-gold-gradient">inspire</span>
        </h2>

        <div className="reveal mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-[#C9A84C]/30 bg-white p-8 shadow-lg lg:p-12">
            <Quote
              className="absolute right-8 top-8 h-16 w-16 opacity-10"
              style={{ color: t.color }}
            />
            <div
              className="transition-opacity duration-300"
              style={{ opacity: animating ? 0 : 1 }}
            >
              <p className="font-display relative z-10 mb-8 text-lg italic leading-relaxed text-[#0A1628] lg:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">{t.name}</p>
                  <p className="text-sm text-[#8892A4]">{t.role}</p>
                  <span
                    className="font-mono-label mt-1 inline-block text-xs uppercase tracking-wider"
                    style={{ color: t.color }}
                  >
                    {t.grad}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C9A84C] text-[#C9A84C] transition-all hover:bg-[#C9A84C]/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? "24px" : "8px",
                    backgroundColor:
                      current === i ? "#C9A84C" : "rgba(201,168,76,0.3)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C9A84C] text-[#C9A84C] transition-all hover:bg-[#C9A84C]/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mini cards — desktop */}
        <div className="mt-12 hidden gap-3 lg:grid lg:grid-cols-5">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              className="rounded-xl p-4 text-left transition-all duration-300"
              style={
                current === i
                  ? { background: "#0A1628", color: "white" }
                  : {
                      background: "white",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }
              }
            >
              <p className="text-sm font-semibold">{item.name}</p>
              <p
                className="mt-1 text-xs"
                style={{ color: current === i ? "rgba(255,255,255,0.7)" : "#8892A4" }}
              >
                {item.role}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
