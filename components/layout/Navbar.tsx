"use client";

/**
 * NAVBAR
 * ------
 * Sticky top navigation bar. Becomes opaque on scroll.
 * - Replace the logo text/SVG with your organization's logo.
 * - Update navLinks in lib/content.ts to match your site sections.
 * - The donate button is highlighted — keep it prominent.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* ── Logo ─────────────────────────────────────────────────── */}
        {/* Replace this with <Image src="/logo.svg" ... /> if you have a logo file */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
            H
          </span>
          <span
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* ── Desktop Links ─────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${
                  isScrolled
                    ? "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Donate CTA ────────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          <Button href={siteConfig.donateUrl} variant="primary" size="sm">
            Donate Now
          </Button>
        </div>

        {/* ── Mobile Menu Button ────────────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile Menu ──────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={siteConfig.donateUrl}
                variant="primary"
                size="md"
                className="w-full"
              >
                Donate Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
