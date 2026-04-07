/**
 * HERO SECTION
 * ------------
 * Full-screen opening section with a background image overlay.
 *
 * Customization:
 * - Replace heroContent.image in lib/content.ts with a high-res photo
 *   of your work, community, or cause (1920×1080px minimum).
 * - Adjust the overlay opacity (bg-black/50) to match your photo's contrast.
 * - The two CTAs should lead to your donate page and an about/learn-more section.
 */

import Image from "next/image";
import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Image ──────────────────────────────────────── */}
      <Image
        src={heroContent.image}
        alt={heroContent.imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* ── Dark Overlay ──────────────────────────────────────────── */}
      {/* Adjust opacity to ensure text readability against your image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge/Label — optional: remove if you prefer a cleaner look */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-sm font-semibold mb-6 backdrop-blur-sm">
          Making a difference since 2010
          {/* Replace with your founding year or a key achievement */}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          {heroContent.headline}
        </h1>

        <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
          {heroContent.subheadline}
        </p>

        {/* ── Call to Action Buttons ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={heroContent.primaryCta.href}
            variant="primary"
            size="lg"
          >
            {heroContent.primaryCta.label}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Button>
          <Button
            href={heroContent.secondaryCta.href}
            variant="outline"
            size="lg"
            className="border-white/60 text-white hover:bg-white/10 hover:border-white"
          >
            {heroContent.secondaryCta.label}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>

        {/* ── Trust Indicators ─────────────────────────────────────── */}
        {/* Optional: add logos of certifications (GuideStar, BBB, etc.) */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            501(c)(3) Registered Nonprofit
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            4-Star Charity Navigator Rating
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            92% of Funds Go to Programs
          </span>
        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
