// Project images use the local /images folder (added to repository by user)

export type Project = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  challengeSolution?: string;
  url: string | null;
  image: string;
  accent: "lime" | "pink" | "electric" | "cream";
  rotate: string;
  year: string;
  stack: string[];
  flagship?: boolean;
  stats?: { label: string; value: string }[];
};

export type MiscProject = {
  title: string;
  where: string;
  year: string;
  blurb: string;
  stack: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "almas",
    title: "Almas",
    tag: "Voice calling agent",
    blurb:
      "A 24/7 inbound calling system for healthcare built with Twilio, GPT-4, Next.js, and MongoDB. Features dual-layer emergency detection, live call transcripts, and an admin dashboard with real-time flags.",
    challengeSolution:
      "Challenge: Healthcare facilities need round-the-clock call handling with reliable emergency detection. Solution: Built a voice agent using Twilio for telephony and GPT-4 for natural language understanding, with dual-layer emergency detection that resolved 6/6 test scenarios. Includes an admin dashboard with live transcripts and automatic flag escalation.",
    url: "https://aicallingagent.vercel.app/dashboard",
    image: "/images/almas-dashboard.webp",
    accent: "electric",
    rotate: "rotate-0",
    year: "2025–26",
    stack: ["Twilio", "OpenAI GPT-4", "Next.js", "MongoDB", "Node.js"],
    flagship: true,
    stats: [
      { label: "Emergency scenarios", value: "6/6" },
      { label: "Availability", value: "24/7" },
      { label: "Core AI", value: "GPT-4" },
    ],
  },
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
    slug: "email-genie",
    title: "Email Genie",
    tag: "AI Email Generator",
    blurb:
      "An AI-powered job search assistant that turns job posts into polished, recruiter-ready emails, with auto-fetching features and Gmail integration.",
    challengeSolution:
      "Challenge: Writing personalized, high-conversion cover letters and outreach emails for dozens of job listings is time-consuming. Solution: Developed an AI-matching tool that extracts job listing requirements and drafts customized emails, connecting directly to the Gmail API for seamless sending.",
    url: "https://auto-email-sender-six.vercel.app/",
    image: "/images/screencapture-auto-email-sender.png",
    accent: "pink",
    rotate: "rotate-1",
    year: "2026",
    stack: ["React", "Tailwind", "OpenAI API", "Gmail API"],
  },
];

export const MISC_PROJECTS: MiscProject[] = [
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
      "A machine-learning project that forecasts stock movement from live data feeds using scikit-learn, Pandas, and Matplotlib. Deployed live on Streamlit.",
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    url: "https://stock-predict-app-uzzii.streamlit.app/",
  },
];

export const HAMZA = {
  name: "Hamza Mehmood",
  role: "Full-Stack Developer",
  email: "hamzamehmood054@gmail.com",
  phone: "+92 311 2823179",
  linkedin: "https://www.linkedin.com/in/hamzamehmoodd/",
  github: "https://github.com/hamza-091",
};

export const CV_CONTEXT = `
You are Hamza's portfolio assistant. Speak in a casual, direct Gen Z style representing Hamza (mostly lowercase, friendly, to-the-point, no corporate speak or extra fluff). If you don't know something, just direct them to email hamzamehmood054@gmail.com or WhatsApp +92 311 2823179.

== ABOUT ==
Name: Hamza Mehmood
Role: Full-Stack Developer
Email: hamzamehmood054@gmail.com  |  WhatsApp: +92 311 2823179
LinkedIn: https://www.linkedin.com/in/hamzamehmoodd/
GitHub: https://github.com/hamza-091
Background: Fresh Computer Science graduate (BSc), Bahria University, Class of 2026. CGPA: 3.12.
Focus: building production-ready web applications, thoughtful frontends, and practical automations for real businesses.

== SKILLS ==
- Languages & Frameworks: JavaScript (ES6+), TypeScript, Python, React, Next.js, Node.js, Tailwind CSS
- AI & Automation: OpenAI API (GPT-3.5/4), Claude API, Twilio, n8n, LangChain
- Databases & Tools: MongoDB, MySQL, Git/GitHub, REST APIs, Vercel, Render

== EXPERIENCE ==
- Data Science Intern, UNITZERO (Pvt) Limited (Dec 2025 – Feb 2026): Collaborated on data science initiatives, performed data preprocessing, exploratory data analysis, and built machine learning models. Supported analytical projects with data visualization.
- E-Commerce Listing Intern, GE Solucions (Oct 2025 – Nov 2025): Managed and optimized 100+ product listings via bulk uploads. Supported inventory tracking and performance reporting.
- WordPress Developer, Fiverr / MichaelThal.com (Jan–May 2025): Designed and delivered a fully responsive, SEO-optimized personal website for a professional author.

== PROJECTS ==
1. Capstone project: Almas — Voice Calling Agent (2025–26). Twilio, OpenAI GPT-4, Next.js 14, MongoDB. 24/7 inbound healthcare calls with dual-layer emergency detection that resolved 6/6 test scenarios. Includes admin dashboard with live transcripts.
2. Client project: MichaelThal.com (2025). WordPress author website.
3. Personal project: Shrinkr — URL Shortener (2024). React, Node.js, Express, MongoDB, JWT. Custom short links and click analytics. Live URL: https://www.urlshrinkr.me/
4. Personal project: Email Genie (2026). React, Tailwind, OpenAI API, Gmail API. Turn job posts into optimized cover letters/emails and send directly. Live URL: https://auto-email-sender-six.vercel.app/
5. Personal project: SmartPOS (2024). React + Node + MySQL. Real-time billing and inventory.
6. Personal project: Stock Price Prediction (2024). Python with scikit-learn, Pandas, Matplotlib.

== EDUCATION ==
- BSc Computer Science, Bahria University Karachi Campus, Oct 2022 – June 2026. CGPA: 3.12.
- Pre-Engineering, Cadet College Petaro, May 2016 – June 2021, 88%.

== CERTIFICATIONS ==
- Certified Professional Safety Practitioner (CPSP) — Safety management, risk assessment, emergency response
- Enablers E-Commerce Business Training Program — Amazon FBA, product research, competitive pricing

== CONTACT ==
Focused on full-stack web development, frontend roles, and automation/integration projects.
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
