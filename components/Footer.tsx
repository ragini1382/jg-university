import { GraduationCap, Link, MessageCircle, Share2 } from "lucide-react";

const footerLinks = {
  Programmes: [
    "Management",
    "Commerce",
    "Computing & Tech",
    "Science",
    "Law",
    "Certificates",
  ],
  About: [
    "Our Story",
    "Leadership",
    "Accreditations",
    "Campus",
    "Research",
    "News & Events",
  ],
  Admissions: [
    "Apply Now",
    "Fee Structure",
    "Scholarships",
    "Hostel",
    "International",
    "FAQs",
  ],
  Contact: [
    "Get in Touch",
    "Visit Campus",
    "Careers",
    "Alumni",
    "Media",
    "Support",
  ],
};

const socialIcons = [MessageCircle, Link, Share2, MessageCircle, Link];

export default function Footer() {
  return (
    <footer className="bg-[#070E1B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A84C]/15">
                <GraduationCap className="h-4 w-4 text-[#C9A84C]" />
              </div>
              <span className="font-display text-lg font-bold">
                JG <span className="text-[#C9A84C]">University</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              Knowledge beyond boundaries. UGC-approved institution shaping
              leaders since 1965 under the ASIA Charitable Trust.
            </p>
            <div className="flex gap-2">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono-label mb-4 text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/40 sm:flex-row lg:px-8">
          <p>© 2026 JG University. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors hover:text-white/70"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
