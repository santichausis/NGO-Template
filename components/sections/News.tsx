/**
 * NEWS / BLOG SECTION
 * -------------------
 * Shows your three most recent news articles or blog posts.
 *
 * Customization:
 * - Replace newsArticles in lib/content.ts with real articles.
 * - For a dynamic blog, create an /app/blog directory with [slug] routes
 *   and fetch articles from a CMS (Sanity, Contentful, etc.).
 * - The "View All" link should point to /blog or /news.
 */

import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function News() {
  return (
    <section id="news" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="Latest Updates"
            headline="News & Stories"
            subheadline="Stay up to date with our work and impact around the world."
          />
          <Link
            href="#"
            className="flex-shrink-0 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
          >
            View all posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className={`group ${index === 0 ? "md:col-span-1" : ""}`}
            >
              <Link href={article.href} className="block">
                {/* Thumbnail */}
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Category */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">
                    {article.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <time dateTime={article.date}>{article.date}</time>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-emerald-700 group-hover:gap-2 transition-all">
                  Read story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
