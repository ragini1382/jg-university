"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Campus", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A84C]/15">
            <GraduationCap className="h-5 w-5 text-[#C9A84C]" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-[#0A1628]">
              JG <span className="text-[#C9A84C]">University</span>
            </span>
            <span className="font-mono-label text-[10px] uppercase tracking-widest text-[#8892A4]">
              Est. 1965
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="animated-underline text-sm font-medium text-[#0A1628] transition-colors hover:text-[#C9A84C]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#cta"
            className="btn-gold-gradient rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            Apply Now 2026–27
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A84C]/30 text-[#0A1628] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className="overflow-hidden border-t border-[#C9A84C]/20 bg-[#FAF7F2]/95 backdrop-blur-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{
          maxHeight: mobileOpen ? "320px" : "0px",
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#0A1628] hover:bg-[#C9A84C]/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#cta"
              className="btn-gold-gradient block rounded-full px-6 py-3 text-center text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now 2026–27
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
