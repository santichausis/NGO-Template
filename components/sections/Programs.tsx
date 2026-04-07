/**
 * PROGRAMS SECTION
 * ----------------
 * Card grid showcasing your key programs or projects.
 *
 * Customization:
 * - Edit/add/remove program entries in lib/content.ts → programs.
 * - Each card links to a dedicated program page (/programs/[slug]).
 * - Add real photos of each program in action (not stock imagery).
 * - The color-coded category badge can be removed if not needed.
 */

import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categoryColors: Record<string, string> = {
  Education: "bg-emerald-100 text-emerald-700",
  Health: "bg-blue-100 text-blue-700",
  Livelihood: "bg-amber-100 text-amber-700",
  Emergency: "bg-orange-100 text-orange-700",
};

export function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader
            label="What We Do"
            headline="Our Programs"
            subheadline="Six interconnected programs tackling the root causes of poverty, inequality, and vulnerability — because no challenge exists in isolation."
            centered
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <article
              key={program.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[program.category] ?? "bg-slate-100 text-slate-700"
                  }`}
                >
                  {program.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-700">
                    {program.stats}
                  </span>
                  {/* Link to a dedicated program page — create /app/programs/[slug]/page.tsx */}
                  <Link
                    href="#"
                    className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    Learn more
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            View all programs and initiatives
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
