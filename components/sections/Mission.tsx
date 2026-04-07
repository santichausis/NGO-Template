/**
 * MISSION / ABOUT SECTION
 * -----------------------
 * Two-column section that tells your organization's story.
 *
 * Customization:
 * - Update missionContent in lib/content.ts.
 * - The image should show real fieldwork — not stock photography.
 * - Values should reflect your actual operating principles.
 * - Consider linking the "Read our full story" button to an /about page.
 */

import Image from "next/image";
import { missionContent } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Mission() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Image ──────────────────────────────────────────────── */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src={missionContent.image}
                alt={missionContent.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card — replace with a real impactful number */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white rounded-2xl p-6 shadow-xl max-w-[180px] text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-emerald-200 mt-1">
                Years of Impact
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-amber-400/20 -z-10" />
          </div>

          {/* ── Text Content ────────────────────────────────────────── */}
          <div className="lg:pl-4">
            <SectionHeader
              label={missionContent.sectionLabel}
              headline={missionContent.headline.replace("\\n", "\n")}
              centered={false}
            />

            <div className="mt-6 space-y-4">
              {missionContent.body.map((paragraph, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values Grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {missionContent.values.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{value.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      {value.title}
                    </h4>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="#" variant="primary" size="md">
                Read Our Full Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
