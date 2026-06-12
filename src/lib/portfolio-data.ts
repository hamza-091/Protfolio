// Project images use the local /images folder (added to repository by user)

export type Project = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  url: string;
  image: string;
  accent: "lime" | "pink" | "electric" | "cream";
  rotate: string;
  year: string;
  stack: string[];
};

export type MiscProject = {
  title: string;
  where: string;
  year: string;
  blurb: string;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "scriptly",
    title: "Scriptly",
    tag: "Writing platform",
    blurb: "A focused, modern editor designed for writers who care about polish — clean typography, distraction-free flow, and an interface that gets out of the way.",
    url: "https://scriptly-shine.lovable.app/",
    image: "/images/screencapture-scriptly-shine-lovable-app-2026-06-04-17_02_05.png",
    accent: "electric",
    rotate: "-rotate-2",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "elara",
    title: "Elara Residences",
    tag: "Luxury real estate",
    blurb: "An editorial brand site for a premium residential development. Dark navy palette, gold accents, refined motion, and a measured, confident voice throughout.",
    url: "https://elara-residences.lovable.app/",
    image: "/images/screencapture-elara-residences-lovable-app-2026-06-04-17_02_32.png",
    accent: "cream",
    rotate: "rotate-1",
    year: "2026",
    stack: ["React", "Tailwind", "Motion"],
  },
  {
    slug: "ember",
    title: "Ember Saffron",
    tag: "Fine dining",
    blurb: "Moody, atmospheric site for a fine-dining restaurant — full reservation flow, signature menu, and chef-led storytelling delivered with a cinematic finish.",
    url: "https://ember-saffron.lovable.app/",
    image: "/images/screencapture-ember-saffron-lovable-app-2026-06-04-17_03_25.png",
    accent: "pink",
    rotate: "-rotate-3",
    year: "2026",
    stack: ["React", "Tailwind"],
  },
  {
    slug: "apex",
    title: "Apex Athletic",
    tag: "Performance gym",
    blurb: "A high-energy brand site for a performance gym — coaches, plans, transformations, and a mobile-app pitch packaged with bold visual rhythm.",
    url: "https://apex-athletic-spark.lovable.app/",
    image: "/images/screencapture-apex-athletic-spark-lovable-app-2026-06-04-17_04_05.png",
    accent: "lime",
    rotate: "rotate-2",
    year: "2026",
    stack: ["React", "Tailwind"],
  },
  {
    slug: "aven",
    title: "Aven",
    tag: "Fashion storefront",
    blurb: "A quiet, soft-neutral storefront for a Scandinavian-inspired label — bestsellers, monochrome edits, fit guides, and a checkout that feels effortless.",
    url: "https://scandi-chic-aven.lovable.app/",
    image: "/images/screencapture-scandi-chic-aven-lovable-app-2026-06-04-17_04_41.png",
    accent: "cream",
    rotate: "-rotate-1",
    year: "2026",
    stack: ["React", "Tailwind", "Commerce"],
  },
  {
    slug: "elevateu",
    title: "ElevateU",
    tag: "Education platform",
    blurb: "An online learning marketplace with course discovery, instructor pages, pricing tiers, certificates, and a polished mobile pitch.",
    url: "https://elevate-your-skill-73.lovable.app/",
    image: "/images/screencapture-elevate-your-skill-73-lovable-app-2026-06-04-17_05_36.png",
    accent: "electric",
    rotate: "rotate-3",
    year: "2026",
    stack: ["React", "Tailwind"],
  },
];

export const MISC_PROJECTS: MiscProject[] = [
  {
    title: "Almas — Voice Calling Agent",
    where: "Capstone Project",
    year: "2025–26",
    blurb: "A 24/7 healthcare calling agent built with Twilio, GPT-4, Next.js, MongoDB, and Node.js. It includes dual-layer emergency detection, live call logs, transcripts, and an admin dashboard.",
    stack: ["Twilio", "OpenAI", "Next.js", "MongoDB", "Node.js"],
  },
  {
    title: "SmartPOS",
    where: "Personal project",
    year: "2024",
    blurb: "A point-of-sale system with real-time billing, inventory tracking, and product management features designed for practical day-to-day operations.",
    stack: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Stock Price Prediction",
    where: "Personal project",
    year: "2024",
    blurb: "A machine-learning project that forecasts stock movement from live data feeds using scikit-learn, Pandas, and Matplotlib.",
    stack: ["Python", "scikit-learn", "Pandas"],
  },
];

export const HAMZA = {
  name: "Hamza Mehmood",
  role: "Web Developer",
  email: "hamzamehmood054@gmail.com",
  phone: "+92 311 2823179",
  linkedin: "https://www.linkedin.com/in/hamzamehmoodd/",
};

export const CV_CONTEXT = `
You are the portfolio assistant for Hamza Mehmood. Respond as a polite, professional concierge
who speaks on Hamza's behalf. Keep replies clear, concise, and helpful. Use proper sentences and
sentence case. Avoid slang, emojis, and lowercase-only styling. If you do not know something,
say so and direct the visitor to email hamzamehmood054@gmail.com.

== ABOUT ==
Name: Hamza Mehmood
Role: Web Developer
Email: hamzamehmood054@gmail.com  |  WhatsApp: +92 311 2823179
LinkedIn: https://www.linkedin.com/in/hamzamehmoodd/
Background: Fresh Computer Science graduate (BSc), Bahria University, Class of 2026, CGPA 3.0.
Focus: building production-ready web applications, thoughtful frontends, and practical
automations for real businesses.

== SKILLS ==
- Languages & Frameworks: JavaScript, TypeScript, React, Next.js 14, React Native (Expo), Node.js, Express.js, HTML/CSS
- Web & UI: Tailwind CSS, responsive design, accessibility, SEO fundamentals
- Backend & Data: MongoDB, MySQL, REST APIs, Git/GitHub
- Integrations & Automation: OpenAI APIs, Twilio, n8n workflows
- CMS & E-Commerce: WordPress (Blocksy)

== EXPERIENCE ==
- E-Commerce Listing Intern, GE Solucions (Oct–Nov 2025): optimized 100+ product listings and supported store operations.
- WordPress Developer, Fiverr / MichaelThal.com (Jan–May 2025): delivered a responsive, SEO-optimized author website using the Blocksy theme.
- Virtual Assistant, Amazon UK retail arbitrage (Oct 2024–Jan 2025): sourced and managed inventory using Keepa and Helium 10, achieving up to 20% ROI.

== PROJECTS ==
1. Capstone project: Almas — Voice Calling Agent (2025–26). Stack: Twilio, OpenAI GPT-4, Next.js 14, MongoDB, Tailwind, Node.js. Handles 24/7 inbound healthcare calls with dual-layer emergency detection and an admin dashboard for logs and transcripts.
2. Personal project: SmartPOS (2024). React + Node + MySQL. Real-time billing, inventory management, and product modules.
3. Personal project: Stock Price Prediction (2024). Python with scikit-learn, Pandas, and Matplotlib. Supervised ML pipeline on live data feeds.
4. Client landing pages (6): Scriptly, Elara Residences, Ember Saffron, Apex Athletic, Aven, and ElevateU. These are polished landing-page builds for writing, real estate, dining, fitness, fashion, and education brands.

== EDUCATION ==
- BSc Computer Science, Bahria University, Oct 2022 – 2026. CGPA 3.0.
  Coursework: Data Structures, OOP, DBMS, Web Engineering, Machine Learning, Software Quality Assurance.
- Pre-Engineering, Cadet College Petaro, 2016–2021, 88%.

== CERTIFICATIONS ==
- CPSP — Certified Professional Safety Practitioner
- Enablers E-Commerce Business Training Program
- AutoCAD 2D/3D Design

== CONTACT ==
Focused on web development, frontend roles, and automation/integration projects.
Preferred contact: hamzamehmood054@gmail.com or WhatsApp at +92 311 2823179.

== SERVICES & PRICING ==
Hamza offers the following web development services at rates well below the usual market average:
- Landing Pages: $150–$400 USD (3–5 days)
- Business / Brand Websites (multi-page, responsive, SEO-optimized): $400–$900 USD (1–2 weeks)
- Web Applications (custom features, admin panels, integrations): $1,000–$2,500+ USD (2–4 weeks)
- WordPress Sites: Starting from $150 USD
- E-commerce Websites (Shopify, WooCommerce, or custom): $300–$1,200 USD depending on complexity
- API Integrations & Automations: Custom pricing based on scope
- Portfolio Websites: $150–$350 USD
Payment: Milestone-based preferred.
Turnaround: Depends on project scope — typically 3–5 days for landing pages, 1–2 weeks for multi-page sites, 2–4 weeks for full web apps.
Hamza's pricing is intentionally kept well below market rates to stay competitive — without cutting corners on quality.

== NICHE EXPERTISE ==
Hamza can build websites for any niche including but not limited to:
- Restaurants & cafes, Real estate, Gyms & fitness, Fashion & e-commerce, Education & e-learning, Healthcare, Travel agencies, SaaS products, Personal brands & portfolios, Agencies, Startups.
Each project includes responsive design, SEO basics, contact forms, and performance optimization.
`.trim();
