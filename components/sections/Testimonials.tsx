/**
 * TESTIMONIALS SECTION
 * --------------------
 * Real stories from beneficiaries are the most powerful trust signal.
 *
 * Customization:
 * - Replace testimonials in lib/content.ts with real quotes.
 * - Always get written consent before publishing someone's story and photo.
 * - Link each testimonial to a fuller story page if possible.
 * - Consider video testimonials linked here for higher engagement.
 */

import Image from "next/image";
import { testimonials } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const QuoteIcon = () => (
  <svg
    className="w-10 h-10 text-emerald-200"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader
            label="Stories from the Field"
            headline="Voices of Change"
            subheadline="Behind every number is a person. Here are some of the people whose lives have changed through our programs."
            centered
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <QuoteIcon />

              <p className="mt-4 text-slate-700 leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Program tag */}
              <span className="inline-block mt-4 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                {testimonial.program}
              </span>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-500 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        {/* CTA to more stories */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            {/* Create a /stories page with more beneficiary testimonials */}
            Read more stories of change
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
