// Project images use the local /images folder (added to repository by user)

export type Project = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  challengeSolution?: string;
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
    slug: "michaelthal",
    title: "Michael Thal",
    tag: "Author website",
    blurb:
      "Fully responsive WordPress build for an award-winning Young Adult novelist. Features a custom layout, SEO optimization, and end-to-end client management.",
    challengeSolution:
      "Challenge: The author needed a responsive, custom platform to showcase his novels and publish blogs. Solution: Built a fully optimized WordPress site using the Blocksy theme, integrating custom layouts and SEO best practices for organic reach.",
    url: "https://michaelthal.com/",
    image: "/images/screencapture-michael-thal.webp",
    accent: "lime",
    rotate: "rotate-1",
    year: "2025",
    stack: ["WordPress", "Blocksy", "SEO"],
  },
  {
    slug: "shrinkr",
    title: "Shrinkr",
    tag: "URL Shortener",
    blurb:
      "A full-stack URL shortener with click analytics, custom short links, QR code generation, and a clean dashboard.",
    challengeSolution:
      "Challenge: Free URL shorteners lack detailed click analytics and custom branding. Solution: Engineered a full-stack platform with real-time analytics, custom aliases, dynamic QR codes, and JWT authentication.",
    url: "https://www.urlshrinkr.me/",
    image: "/images/screencapture-shrinkr.webp",
    accent: "pink",
    rotate: "rotate-1",
    year: "2024",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    slug: "scriptly",
    title: "Scriptly",
    tag: "Writing platform",
    blurb:
      "A focused, modern editor designed for writers who care about polish — clean typography, distraction-free flow, and an interface that gets out of the way.",
    challengeSolution:
      "Challenge: Writers needed a distraction-free environment with premium feel. Solution: Built a minimal Next.js editor UI with clean typography, smooth transitions, and a focused layout that communicates quality instantly.",
    url: "https://scriptly-shine.lovable.app/",
    image: "/images/screencapture-scriptly-shine-lovable-app-2026-06-04-17_02_05.webp",
    accent: "electric",
    rotate: "-rotate-2",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "elara",
    title: "Elara Residences",
    tag: "Luxury real estate",
    blurb:
      "An editorial brand site for a premium residential development. Dark navy palette, gold accents, refined motion, and a measured, confident voice throughout.",
    challengeSolution:
      "Challenge: Premium real estate needed an online presence reflecting luxury and confident authority. Solution: Developed an editorial brand site with navy and gold styling, subtle hover states, and smooth navigation to showcase properties.",
    url: "https://elara-residences.lovable.app/",
    image: "/images/screencapture-elara-residences-lovable-app-2026-06-04-17_02_32.webp",
    accent: "cream",
    rotate: "rotate-1",
    year: "2026",
    stack: ["React", "Tailwind", "Motion"],
  },
  {
    slug: "ember",
    title: "Ember Saffron",
    tag: "Fine dining",
    blurb:
      "Moody, atmospheric site for a fine-dining restaurant — full reservation flow, signature menu, and chef-led storytelling delivered with a cinematic finish.",
    challengeSolution:
      "Challenge: Fine-dining brand needed a digital showcase that matches their atmospheric, moody venue. Solution: Crafted a dark, cinematic-themed reservation landing page with immersive scroll sections and clean booking call-to-actions.",
    url: "https://ember-saffron.lovable.app/",
    image: "/images/screencapture-ember-saffron-lovable-app-2026-06-04-17_03_25.webp",
    accent: "pink",
    rotate: "-rotate-3",
    year: "2026",
    stack: ["React", "Tailwind"],
  },
  {
    slug: "apex",
    title: "Apex Athletic",
    tag: "Performance gym",
    blurb:
      "A high-energy brand site for a performance gym — coaches, plans, transformations, and a mobile-app pitch packaged with bold visual rhythm.",
    challengeSolution:
      "Challenge: Performance gym needed a high-energy site to pitch coaching plans and a custom mobile app. Solution: Built a high-contrast layout featuring bold typography, dynamic hover states, and clear app-store conversion sections.",
    url: "https://apex-athletic-spark.lovable.app/",
    image: "/images/screencapture-apex-athletic-spark-lovable-app-2026-06-04-17_04_05.webp",
    accent: "lime",
    rotate: "rotate-2",
    year: "2026",
    stack: ["React", "Tailwind"],
  },
  {
    slug: "aven",
    title: "Aven",
    tag: "Fashion storefront",
    blurb:
      "A quiet, soft-neutral storefront for a Scandinavian-inspired label — bestsellers, monochrome edits, fit guides, and a checkout that feels effortless.",
    challengeSolution:
      "Challenge: Scandinavian fashion label needed an e-commerce storefront that feels quiet and effortless. Solution: Created a soft-neutral, minimalist catalog grid and streamlined user flows focusing purely on product photography.",
    url: "https://scandi-chic-aven.lovable.app/",
    image: "/images/screencapture-scandi-chic-aven-lovable-app-2026-06-04-17_04_41.webp",
    accent: "cream",
    rotate: "-rotate-1",
    year: "2026",
    stack: ["React", "Tailwind", "Commerce"],
  },
  {
    slug: "elevateu",
    title: "ElevateU",
    tag: "Education platform",
    blurb:
      "An online learning marketplace with course discovery, instructor pages, pricing tiers, certificates, and a polished mobile pitch.",
    challengeSolution:
      "Challenge: E-learning platform needed a trusted dashboard interface to sell professional certificates. Solution: Designed a course marketplace layout with structured price tiers, clear curriculum outlines, and instructor profiles.",
    url: "https://elevate-your-skill-73.lovable.app/",
    image: "/images/screencapture-elevate-your-skill-73-lovable-app-2026-06-04-17_05_36.webp",
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
    blurb:
      "A 24/7 healthcare calling agent built with Twilio, GPT-4, Next.js, MongoDB, and Node.js. It includes dual-layer emergency detection, live call logs, transcripts, and an admin dashboard.",
    stack: ["Twilio", "OpenAI", "Next.js", "MongoDB", "Node.js"],
  },
  {
    title: "SmartPOS",
    where: "Personal project",
    year: "2024",
    blurb:
      "A point-of-sale system with real-time billing, inventory tracking, and product management features designed for practical day-to-day operations.",
    stack: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Stock Price Prediction",
    where: "Personal project",
    year: "2024",
    blurb:
      "A machine-learning project that forecasts stock movement from live data feeds using scikit-learn, Pandas, and Matplotlib.",
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
You are Hamza's portfolio assistant. Speak in a casual, direct Gen Z style representing Hamza (mostly lowercase, friendly, to-the-point, no corporate speak or extra fluff). If you don't know something, just direct them to email hamzamehmood054@gmail.com or WhatsApp +92 311 2823179.

== ABOUT ==
Name: Hamza Mehmood
Role: Web Developer
Email: hamzamehmood054@gmail.com  |  WhatsApp: +92 311 2823179
LinkedIn: https://www.linkedin.com/in/hamzamehmoodd/
Background: Fresh Computer Science graduate (BSc), Bahria University, Class of 2026.
Focus: building production-ready web applications, thoughtful frontends, and practical automations for real businesses.

== SKILLS ==
- Languages & Frameworks: JavaScript, TypeScript, React, Next.js 14, Node.js, Express.js, HTML/CSS
- Web & UI: Tailwind CSS, responsive design, accessibility, SEO fundamentals
- Backend & Data: MongoDB, MySQL, REST APIs, Git/GitHub
- Integrations & Automation: OpenAI APIs, Twilio, n8n workflows
- CMS & E-Commerce: WordPress (Blocksy)

== EXPERIENCE ==
- Data Science Intern, UNITZERO (Pvt) Limited (2025): completed a data science internship focusing on real-world data pipelines, analysis workflows, and ML model development.
- WordPress Developer, Fiverr / MichaelThal.com (Jan–May 2025): delivered a responsive, SEO-optimized author website using the Blocksy theme.

== PROJECTS ==
1. Client project: MichaelThal.com (2025). WordPress author website.
2. Personal project: Shrinkr — URL Shortener (2024). React, Node.js, Express, MongoDB, JWT. Custom short links and click analytics. Live URL: https://www.urlshrinkr.me/
3. Capstone project: Almas — Voice Calling Agent (2025–26). Twilio, OpenAI GPT-4, Next.js 14. 24/7 inbound healthcare calls with dual-layer emergency detection.
4. Client landing pages (6): Scriptly, Elara Residences, Ember Saffron, Apex Athletic, Aven, and ElevateU.
5. Personal project: SmartPOS (2024). React + Node + MySQL. Real-time billing and inventory.
6. Personal project: Stock Price Prediction (2024). Python with scikit-learn, Pandas, Matplotlib.

== EDUCATION ==
- BSc Computer Science, Bahria University, Oct 2022 – 2026.
- Pre-Engineering, Cadet College Petaro, 2016–2021, 88%.

== CERTIFICATIONS ==
- Data Science Internship — UNITZERO (Pvt) Limited, 2025
- Bahria University — BSc Computer Science, 2026

== CONTACT ==
Focused on web development, frontend roles, and automation/integration projects.
Preferred contact: hamzamehmood054@gmail.com or WhatsApp at +92 311 2823179.

== SERVICES & PRICING ==
Hamza's rates are:
- Landing Pages: $150–$400 USD (3–5 days). fully responsive, clean, SEO-optimized.
- Business / Brand Websites (multi-page, responsive, SEO-optimized): $400–$900 USD (1–2 weeks)
- Web Applications (custom features, admin panels, integrations): $1,000–$2,500+ USD (2–4 weeks)
- WordPress Sites: Starting from $150 USD
- E-commerce Websites: $300–$1,200 USD depending on complexity
- API Integrations & Automations: Custom pricing based on scope
- Portfolio Websites: $150–$350 USD
Payment: Milestone-based.
Turnaround: 3–5 days for landing pages, 1–2 weeks for multi-page sites, 2–4 weeks for full apps.

== NICHE EXPERTISE ==
Hamza can build websites for any niche including but not limited to:
- Restaurants & cafes, Real estate, Gyms & fitness, Fashion & e-commerce, Education & e-learning, Healthcare, Travel agencies, SaaS products, Personal brands & portfolios, Agencies, Startups.
Each project includes responsive design, SEO basics, contact forms, and performance optimization.
`.trim();
