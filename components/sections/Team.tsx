/**
 * TEAM SECTION
 * ------------
 * Highlights key leadership members to build trust with donors and partners.
 *
 * Customization:
 * - Update teamMembers in lib/content.ts with real names, roles, and bios.
 * - Use professional headshot photos (square, 400×400px).
 * - LinkedIn links should point to real profiles.
 * - For large teams, consider linking to a full /team page instead.
 */

import Image from "next/image";
import { teamMembers } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader
            label="The People Behind the Work"
            headline="Meet Our Team"
            subheadline="Our leadership brings decades of experience in international development, public health, and community organizing."
            centered
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative w-40 h-40 mx-auto mb-5">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                  />
                </div>
                {/* LinkedIn badge */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-sm font-medium text-emerald-600 mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Board note */}
        <p className="text-center text-slate-500 text-sm mt-14">
          HopeForward is governed by a volunteer Board of Directors.{" "}
          {/* Link to a full board listing page */}
          <a href="#" className="text-emerald-600 font-medium hover:underline">
            Meet the full board →
          </a>
        </p>
      </div>
    </section>
  );
}
