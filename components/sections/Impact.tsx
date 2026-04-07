/**
 * IMPACT / STATS SECTION
 * ----------------------
 * Displays key metrics that demonstrate your organization's reach.
 *
 * Customization:
 * - Update the numbers in lib/content.ts → impactStats.
 * - Use real, verifiable numbers — donors check these.
 * - Consider linking each stat to your annual report for credibility.
 */

import { impactStats } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Impact() {
  return (
    <section
      id="impact"
      className="py-20 sm:py-28 bg-emerald-700 relative overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader
            label="Our Impact"
            headline="Numbers That Matter"
            subheadline="Every figure represents a life changed, a family supported, a community transformed. Here's what 15 years of dedicated work looks like."
            centered
            light
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-emerald-200 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Source note */}
        <p className="text-center text-white/50 text-xs mt-10">
          Data from our 2024 Annual Report.{" "}
          {/* Replace with a link to your actual annual report */}
          <a href="#" className="underline hover:text-white/80 transition-colors">
            View full report →
          </a>
        </p>
      </div>
    </section>
  );
}
