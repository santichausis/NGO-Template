# NGO Landing — Free Next.js Template for Nonprofits

A free, open-source landing page template built with **Next.js 16** and **Tailwind CSS v4** — designed specifically for NGOs, nonprofits, and charities who need a professional website without the agency price tag.

![NGO Landing Template](https://picsum.photos/seed/ngo-readme/1200/600)

## Features

- **9 fully designed sections** — Hero, Impact Stats, Mission/About, Programs, Testimonials, Team, News, Newsletter, and Donate
- **Mobile-first & responsive** — looks great on every screen size
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **SEO ready** — Open Graph, Twitter Card, and structured metadata
- **Easy to customize** — all content lives in a single file (`lib/content.ts`)
- **Built with best practices** — Next.js App Router, Server Components, TypeScript

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/ngo-landing.git
cd ngo-landing

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## Customization Guide

### Step 1 — Update your content

All text content and configuration lives in **`lib/content.ts`**. Open that file and replace:

| Variable | What to change |
|---|---|
| `siteConfig` | Organization name, email, phone, address, social links |
| `heroContent` | Headline, subheadline, CTA buttons, hero image |
| `missionContent` | About text, values, mission image |
| `impactStats` | Your real impact numbers |
| `programs` | Your programs/projects |
| `teamMembers` | Team names, roles, bios, photos |
| `testimonials` | Real quotes from beneficiaries |
| `newsArticles` | Latest news/blog posts |

### Step 2 — Replace placeholder images

All images currently use [picsum.photos](https://picsum.photos) placeholders. Replace them with real photos:

1. Add your images to the `/public` folder
2. Update the `image` field in `lib/content.ts` to `/your-image.jpg`

**Recommended image sizes:**
- Hero: 1920×1080px
- Program cards: 600×400px
- Team headshots: 400×400px (square)
- News thumbnails: 800×500px
- Testimonial avatars: 200×200px

### Step 3 — Change the color palette

The brand color is defined in `app/globals.css`. Update the `--color-brand-*` CSS variables to match your organization's colors. Use [oklch.com](https://oklch.com) to generate a full color scale from your hex value.

### Step 4 — Connect your donation platform

The donate section (`components/sections/Donate.tsx`) currently shows a UI-only form. Connect it to a real payment processor:

- **[Stripe](https://stripe.com)** — Full control, requires dev work
- **[Donorbox](https://donorbox.org)** — Embed their widget with minimal code
- **[Give Lively](https://givelively.org)** — Free for nonprofits
- **[PayPal Giving Fund](https://www.paypal.com/givingfund/)** — Simple integration

### Step 5 — Connect your email list

The newsletter form (`components/sections/Newsletter.tsx`) needs a backend action. Create `app/actions/newsletter.ts` with a Server Action that calls your email platform's API (Mailchimp, ConvertKit, Beehiiv, etc.).

## Project Structure

```
ngo-landing/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles + brand colors
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile menu
│   │   └── Footer.tsx      # Footer with link columns + social
│   ├── sections/
│   │   ├── Hero.tsx        # Full-screen hero
│   │   ├── Impact.tsx      # Stats grid
│   │   ├── Mission.tsx     # Two-column about section
│   │   ├── Programs.tsx    # Card grid of programs
│   │   ├── Testimonials.tsx# Beneficiary quotes
│   │   ├── Team.tsx        # Team member cards
│   │   ├── News.tsx        # News/blog article cards
│   │   ├── Newsletter.tsx  # Email capture form
│   │   └── Donate.tsx      # Donation amount selector
│   └── ui/
│       ├── Button.tsx      # Reusable button/link component
│       └── SectionHeader.tsx # Section title + label block
└── lib/
    └── content.ts          # ALL your site content lives here
```

## Adding New Pages

This template is a single-page landing, but you can extend it:

```bash
# Programs detail page
app/programs/[slug]/page.tsx

# Blog/news
app/blog/page.tsx
app/blog/[slug]/page.tsx

# About page
app/about/page.tsx

# Contact page
app/contact/page.tsx
```

## Deployment

Deploy for free on [Vercel](https://vercel.com) (recommended) or any Node.js host:

```bash
# Build for production
npm run build

# Start production server
npm start
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ngo-landing)

## Contributing

Contributions welcome! This template is designed to help nonprofits. If you add something useful:

1. Fork the repo
2. Create a feature branch
3. Open a Pull Request

## License

MIT — free to use, modify, and distribute. A credit link back is appreciated but not required.

---

Built with care for the nonprofits doing the hard work. 🌱
