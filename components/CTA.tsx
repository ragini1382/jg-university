"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function CTA() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(180deg, #0A1628 0%, #112240 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p
            className="reveal font-mono-label mb-4 text-xs uppercase tracking-[0.25em] text-[#C9A84C]"
          >
            — Admissions 2026–27
          </p>
          <h2 className="reveal font-display mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Your Future Begins{" "}
            <span className="italic text-gold-gradient">at JG University</span>
          </h2>
          <p className="reveal mb-8 text-base leading-relaxed text-white/70">
            Join thousands of students who have transformed their lives through
            world-class education, industry connections, and a vibrant campus
            community at JG University.
          </p>

          <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full bg-[#C9A84C]/15 px-4 py-2">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#C9A84C]" />
            <span className="text-sm text-white/90">
              Last date to apply: June 30, 2026
            </span>
          </div>

          <div className="reveal flex flex-wrap gap-4">
            <a
              href="#"
              className="btn-gold-gradient inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9A84C] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C9A84C]/15"
            >
              <Phone className="h-4 w-4 text-[#C9A84C]" />
              Talk to Admissions
            </a>
          </div>
        </div>

        <div className="reveal glass-card rounded-2xl p-6 lg:p-8">
          <h3 className="font-display mb-6 text-2xl font-bold text-white">
            Get In Touch
          </h3>

          <div className="mb-8 space-y-5">
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "JG University Campus, Ahmedabad, Gujarat 382421",
              },
              {
                icon: Mail,
                label: "Email",
                value: "admissions@jguniversity.edu.in",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 79 1234 5678",
              },
            ].map((row) => (
              <div key={row.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/15">
                  <row.icon className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8892A4]">
                    {row.label}
                  </p>
                  <p className="text-sm text-white/90">{row.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#C9A84C]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#C9A84C]"
            />
            <select
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 outline-none transition-colors focus:border-[#C9A84C]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Programme
              </option>
              <option value="mba">MBA</option>
              <option value="btech">B.Tech</option>
              <option value="bba">BBA</option>
              <option value="law">Law</option>
              <option value="science">Science</option>
            </select>
            <button
              type="submit"
              className="btn-gold-gradient w-full rounded-lg py-3.5 text-sm font-semibold"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
