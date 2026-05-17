import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JG University | Knowledge Beyond Boundaries",
  description:
    "JG University — UGC approved institution under ASIA Charitable Trust. 58+ programmes, 17+ colleges, experiential learning since 1965.",
  keywords: [
    "JG University",
    "Gujarat university",
    "UGC approved",
    "admissions 2026",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
