import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

const suggestedLinks = [
  { label: "About Us", href: "#about", description: "Learn about our mission and work" },
  { label: "Our Programs", href: "#programs", description: "Explore what we do" },
  { label: "Donate", href: "#donate", description: "Support our cause" },
  { label: "Contact", href: "#contact", description: "Get in touch with us" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 border-b border-slate-200 bg-white">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-900 font-bold text-xl"
        >
          <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
            H
          </span>
          {siteConfig.name}
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl w-full text-center">
          {/* 404 graphic */}
          <div className="relative inline-block mb-8">
            <span className="text-[120px] sm:text-[160px] font-black text-slate-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Page not found
          </h1>
          <p className="text-slate-500 leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>

          {/* Suggested links */}
          <div className="grid grid-cols-2 gap-3 mb-10 text-left">
            {suggestedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors text-sm">
                  {link.label}
                </div>
                <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                  {link.description}
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-slate-400 border-t border-slate-200">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </footer>
    </div>
  );
}
