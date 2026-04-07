/**
 * SectionHeader — Reusable section title block.
 * Use `centered` for most sections; remove it for left-aligned layouts.
 */

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  headline,
  subheadline,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-emerald-300" : "text-emerald-600"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
