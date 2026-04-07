/**
 * DONATE / CTA SECTION
 * --------------------
 * High-impact call-to-action section for donations.
 * Place this section just before the footer.
 *
 * Customization:
 * - Update donation amounts (donationTiers) to match your typical ask.
 * - The "Custom amount" option is important — don't remove it.
 * - Replace the placeholder payment integration with Stripe, PayPal,
 *   or a donation platform (Donorbox, Give Lively, etc.).
 * - Add a recurring donation toggle for sustained giving.
 * - Include trust badges (SSL secure, Charity Navigator, GuideStar).
 */

"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Suggested donation amounts — adjust based on your average gift size
const donationTiers = [
  {
    amount: 25,
    label: "$25",
    impact: "Provides school supplies for one child for a month",
  },
  {
    amount: 50,
    label: "$50",
    impact: "Supplies clean water to a family for 6 months",
  },
  {
    amount: 100,
    label: "$100",
    impact: "Funds a health consultation for 10 families",
  },
  {
    amount: 250,
    label: "$250",
    impact: "Supports a woman's microloan and business training",
  },
];

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");

  const finalAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount ?? 0;

  return (
    <section
      id="donate"
      className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-slate-900" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeader
            label="Make a Difference Today"
            headline="Your Gift Changes Lives"
            subheadline="100% of your donation goes directly to the communities we serve. No overhead, no excuses — just impact."
            centered
            light
          />
        </div>

        {/* Donation Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl max-w-2xl mx-auto">
          {/* Frequency Toggle */}
          <div className="flex rounded-full bg-slate-100 p-1 mb-8">
            {(["monthly", "once"] as const).map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq)}
                className={`flex-1 py-2.5 px-4 rounded-full text-sm font-semibold transition-all ${
                  frequency === freq
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {freq === "monthly" ? "Give Monthly" : "Give Once"}
              </button>
            ))}
          </div>

          {/* Amount Buttons */}
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Choose an amount
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {donationTiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => {
                  setSelectedAmount(tier.amount);
                  setCustomAmount("");
                }}
                className={`p-3 rounded-xl border-2 text-center transition-all ${
                  selectedAmount === tier.amount && !customAmount
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50"
                }`}
              >
                <span className="block text-lg font-bold">{tier.label}</span>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">
              $
            </span>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-slate-900 font-semibold transition-colors"
            />
          </div>

          {/* Impact Message */}
          {(selectedAmount || customAmount) && (
            <p className="text-sm text-emerald-700 bg-emerald-50 rounded-xl px-4 py-3 mb-6 leading-relaxed">
              {customAmount
                ? `Your gift of $${customAmount} will have a lasting impact on our programs.`
                : donationTiers.find((t) => t.amount === selectedAmount)?.impact}
            </p>
          )}

          {/* Donate Button */}
          {/* Replace onClick with a real payment integration */}
          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-lg py-4 rounded-full transition-colors shadow-sm disabled:opacity-50"
            disabled={finalAmount <= 0}
          >
            {frequency === "monthly"
              ? `Donate $${finalAmount || "—"}/month`
              : `Donate $${finalAmount || "—"} Now`}
          </button>

          {/* Trust Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              SSL Secured
            </span>
            <span>·</span>
            <span>Tax-deductible</span>
            <span>·</span>
            <span>4-Star Charity Navigator</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Other ways to give */}
        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm">
            Other ways to give:{" "}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
              Bank transfer
            </a>
            {" · "}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
              Donor-advised fund
            </a>
            {" · "}
            <a href="#" className="text-emerald-400 hover:text-emerald-300 underline">
              Legacy giving
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
