import { createFileRoute } from "@tanstack/react-router";
// Use local image from /images folder
const hamzaImgPath = "/images/Gemini_Generated_Image_twmr2twmr2twmr2t.webp";
import { HAMZA } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hamza Mehmood" },
      {
        name: "description",
        content:
          "Hamza Mehmood is a fresh Computer Science graduate and web developer focused on clean, production-ready interfaces and practical integrations.",
      },
      { property: "og:title", content: "About — Hamza Mehmood" },
      {
        property: "og:description",
        content: "Web developer focused on clean, production-ready interfaces.",
      },
      { property: "og:image", content: "https://www.devhamza.tech/images/og-image.png" },
      { name: "twitter:image", content: "https://www.devhamza.tech/images/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.devhamza.tech/about" }],
  }),
  component: About,
});

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js 14",
  "Node.js",
  "Express.js",
  "HTML/CSS",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git/GitHub",
  "WordPress",
  "Responsive Design",
  "SEO",
];

const TIMELINE = [
  {
    year: "2025",
    title: "WordPress Developer",
    where: "Fiverr · MichaelThal.com",
    body: "Designed and developed a fully responsive, SEO-optimized personal website for award-winning YA novelist Michael Thal using WordPress and the Blocksy theme. Managed all communication and client delivery end-to-end.",
  },
  {
    year: "2025–26",
    title: "Almas — Voice Calling Agent",
    where: "Capstone Project",
    body: "24/7 inbound calling system for healthcare built with Twilio, OpenAI GPT-4 and Next.js. Dual-layer emergency detection resolved 6/6 test scenarios. Includes an admin dashboard with live transcripts and flags.",
  },
  {
    year: "2025",
    title: "Data Science Intern",
    where: "Internship · UNITZERO (Pvt) Limited",
    body: "Completed a data science internship focusing on real-world data pipelines, analysis workflows, and ML model development. Gained hands-on experience with Python, data preprocessing, and applied AI techniques in a professional environment.",
  },
  {
    year: "2024",
    title: "Shrinkr — URL Shortener",
    where: "Personal project · React / Node / Express / MongoDB / JWT",
    body: "Built a full-stack URL shortener with click analytics, custom short links, dynamic QR codes, and a clean user dashboard. Deployed on Render and Vercel.",
  },
  {
    year: "2024",
    title: "SmartPOS",
    where: "Personal project · React / Node / MySQL",
    body: "Built a point-of-sale system with real-time billing, inventory, and product modules.",
  },
  {
    year: "2024",
    title: "Stock Price Prediction",
    where: "Personal · Python ML",
    body: "Supervised ML model forecasting stock trends with live data feeds and a simple analytics dashboard.",
  },
];

function About() {
  return (
    <div className="grain mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-pink rounded-3xl rotate-3" />
            <div className="relative brutal-lg rounded-3xl overflow-hidden -rotate-2">
              <img
                src={hamzaImgPath}
                alt="Hamza Mehmood"
                width={384}
                height={384}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-lime font-mono text-xs px-3 py-2 brutal-sm rounded-md rotate-6">
              Web Developer
            </div>
          </div>

          <div className="mt-10 space-y-2 font-mono text-sm">
            <p>
              <span className="text-muted-foreground">Name</span> → {HAMZA.name}
            </p>
            <p>
              <span className="text-muted-foreground">Role</span> → {HAMZA.role}
            </p>
            <p>
              <span className="text-muted-foreground">Education</span> → BSc Computer Science (2026)
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            / About
          </p>
          <h1 className="mt-2 font-display text-6xl sm:text-7xl">
            I build the
            <br />
            <span className="text-electric">web</span>, end to{" "}
            <span className="text-pink">end</span>.
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            <p>
              I'm Hamza — a web developer and CS graduate. I design and build web applications,
              marketing sites, and AI-powered integrations that work in production.
            </p>
            <p>
              My capstone project, Almas, is a 24/7 voice calling agent for healthcare built with
              Twilio, GPT-4 and Next.js — featuring dual-layer emergency detection that resolved 6/6
              test scenarios. I've also delivered client sites on Fiverr and built a full digital
              agency, Nexivon, offering web development and AI integration services.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/files/hamza-cv.pdf"
              download="Hamza_Mehmood_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream font-mono text-sm rounded-md brutal brutal-hover"
            >
              Download CV →
            </a>
          </div>

          {/* SKILLS */}
          <div className="mt-14">
            <h2 className="font-display text-4xl">Stack.</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 bg-card brutal-sm rounded-md"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mt-14">
            <h2 className="font-display text-4xl">Experience.</h2>
            <ol className="mt-6 space-y-5">
              {TIMELINE.map((t, i) => (
                <li key={i} className="relative pl-6 border-l-2 border-ink">
                  <span className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-lime border-2 border-ink" />
                  <p className="font-mono text-xs text-muted-foreground">
                    {t.year} · {t.where}
                  </p>
                  <h3 className="font-display text-2xl mt-1">{t.title}</h3>
                  <p className="text-muted-foreground mt-1">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* CERTS */}
          <div className="mt-14 bg-lime brutal rounded-2xl p-6">
            <h2 className="font-display text-3xl">Certifications.</h2>
            <ul className="mt-3 space-y-1 font-mono text-sm">
              <li>· Data Science Internship — UNITZERO (Pvt) Limited, 2025</li>
              <li>· Bahria University — BSc Computer Science, 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
