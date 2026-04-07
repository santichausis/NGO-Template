/**
 * HOME PAGE
 * ---------
 * This is the main landing page. All sections are assembled here.
 *
 * Section order:
 *  1. Hero           — First impression, donate CTA
 *  2. Impact         — Key metrics to build trust
 *  3. Mission        — Your story and values
 *  4. Programs       — What you actually do
 *  5. Testimonials   — Real stories from beneficiaries
 *  6. Team           — Who runs the organization
 *  7. News           — Latest updates
 *  8. Newsletter     — Email capture
 *  9. Donate         — Primary revenue-driving section
 *
 * To add or remove sections, import/remove the component and update the JSX.
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Mission } from "@/components/sections/Mission";
import { Programs } from "@/components/sections/Programs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { News } from "@/components/sections/News";
import { Newsletter } from "@/components/sections/Newsletter";
import { Donate } from "@/components/sections/Donate";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Mission />
        <Programs />
        <Testimonials />
        <Team />
        <News />
        <Newsletter />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
