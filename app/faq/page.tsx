import type { Metadata } from "next";
import Link from "next/link";
import { faqs, faqCategories } from "@/lib/faq";
import { siteConfig } from "@/lib/content";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about HopeForward — our programs, how donations are used, volunteering opportunities, and how we measure impact.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: "FAQ | HopeForward",
    description:
      "Answers to the most common questions about our nonprofit, donations, programs, and volunteering.",
    url: `${siteConfig.url}/faq`,
  },
};

/**
 * JSON-LD FAQ SCHEMA
 * ------------------
 * The FAQPage schema tells Google that this page contains Q&A content,
 * which can trigger rich results (expandable Q&As) directly in search.
 * Requirements: question text must match the visible h2/h3, answer must be
 * the full visible text — no truncation or paraphrasing.
 * Reference: https://schema.org/FAQPage
 */
function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <FaqJsonLd />

      <main className="pt-20">
        {/* ── Page Header ──────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-20 border-b border-emerald-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href="/" className="hover:text-emerald-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li aria-current="page" className="text-slate-700 font-medium">
                  FAQ
                </li>
              </ol>
            </nav>

            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-3">
              Help Center
            </span>
            {/* h1 for SEO — describes the full page */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Everything you need to know about {siteConfig.name}, our programs,
              and how your support makes a difference. Can&apos;t find an answer?{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-emerald-700 font-medium hover:underline"
              >
                Email us
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── FAQ Content ──────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => {
              const categoryFaqs = faqs.filter((f) => f.category === category);
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category} className="mb-14 last:mb-0">
                  {/*
                   * h2 per category: helps both users scan the page
                   * and crawlers understand the content hierarchy.
                   */}
                  <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-emerald-500 rounded-full" />
                    {category}
                  </h2>
                  <FaqAccordion items={categoryFaqs} />
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Still have questions CTA ─────────────────────────────── */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Still have questions?
            </h2>
            <p className="text-slate-600 mb-8">
              Our team is happy to help. Reach out and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send us an email
              </Link>
              <Link
                href="/#donate"
                className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Support our work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
