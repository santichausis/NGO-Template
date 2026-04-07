"use client";

/**
 * NEWSLETTER SECTION
 * ------------------
 * Email capture form to grow your supporter list.
 *
 * Customization:
 * - Connect to Mailchimp, ConvertKit, or your email platform via a
 *   Server Action in /app/actions/newsletter.ts.
 * - Add a privacy policy link — required by GDPR and CAN-SPAM.
 * - Consider offering a lead magnet (impact report, guide) for sign-ups.
 */

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Replace with a real Server Action that calls your email platform API
    // Example: await subscribeToNewsletter(email)
    await new Promise((r) => setTimeout(r, 1000)); // Placeholder delay
    setStatus("success");
  };

  return (
    <section className="py-16 bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Stay Connected
        </h2>
        <p className="text-slate-600 mb-8">
          Get our monthly impact updates, field stories, and volunteer
          opportunities delivered to your inbox.
        </p>

        {status === "success" ? (
          <div className="bg-emerald-600 text-white rounded-2xl px-8 py-5 inline-block">
            <p className="font-semibold">Thank you for subscribing! 🎉</p>
            <p className="text-emerald-200 text-sm mt-1">
              You&apos;ll receive your first update soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 text-slate-900 shadow-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-colors shadow-sm disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        <p className="text-xs text-slate-400 mt-4">
          No spam, ever. Unsubscribe at any time.{" "}
          {/* Add your actual privacy policy URL */}
          <a href="#" className="underline hover:text-slate-600">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
