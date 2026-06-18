import { createFileRoute, Link } from "@tanstack/react-router";
import { PROJECTS, HAMZA } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";
// Use local image from the project's images folder
const hamzaImgPath = "/images/Gemini_Generated_Image_twmr2twmr2twmr2t.webp";
import { ArrowRight, Star, MessageCircle } from "lucide-react";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "description", content: "Hamza Mehmood builds sharp, scroll-stopping websites with a clean, modern edge." },
    ],
    links: [
      { rel: "canonical", href: "https://protfolio-ebon-two.vercel.app/" },
    ],
    title: "Hamza Mehmood — Web Developer",
  }),
  component: Home,
});

function Home() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <div className="grain">
      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-12 -left-12 w-40 h-40 sm:w-72 sm:h-72 lg:-top-20 lg:-left-20 lg:w-120 lg:h-120 bg-lime blob opacity-70" />
          <div className="absolute top-36 -right-8 w-36 h-36 sm:w-64 sm:h-64 lg:-right-24 lg:w-95 lg:h-95 bg-pink blob opacity-60" style={{ animationDelay: "-4s" }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-widest uppercase inline-flex items-center gap-2 px-3 py-1 bg-cream brutal-sm rounded-full">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" /> Open for Collaboration
            </p>
            <p className="mt-6 block w-fit rounded-full bg-ink px-4 py-2 font-display text-xl sm:text-2xl font-black tracking-tight text-cream brutal-sm">
              Hello, I'm
            </p>
            <h1 className="mt-3 font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85]">
              Hamza<br />
              <span className="relative inline-block">
                <span className="relative z-10">Mehmood</span>
                <span className="absolute -bottom-2 left-0 right-0 h-5 bg-lime z-0" />
              </span>
              <span className="text-pink">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I build sharp, scroll-stopping websites with clean structure, modern motion, and a little edge.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-cream font-mono text-sm rounded-md brutal brutal-hover">
                View work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-cream font-mono text-sm rounded-md brutal brutal-hover">
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 font-mono text-xs">
              <Stat n="3 yrs" l="Building for the web" />
              <Stat n="100%" l="Hands-on" />
            </div>
          </div>

          {/* PHOTO COLLAGE */}
          <div className="lg:col-span-5 relative lg:justify-self-end">
            <div className="relative mx-auto lg:mx-0 w-64 sm:w-80 md:w-88 lg:w-104 aspect-square">
              <div className="absolute inset-0 bg-electric rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-lime rounded-3xl -rotate-3" />
                <div className="relative brutal-lg rounded-3xl overflow-hidden -rotate-1 bg-card">
                <img src={hamzaImgPath} alt="Hamza Mehmood" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-3 bg-pink text-white font-mono text-xs px-2 py-1 brutal-sm rounded-md rotate-12">
                Hello
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream font-mono text-xs px-3 py-2 brutal-sm rounded-md -rotate-6 flex items-center gap-1">
                <Star className="w-3 h-3 fill-ink" /> Web Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">/ Landing pages</p>
            <h2 className="mt-2 font-display text-5xl sm:text-7xl">Six polished builds.</h2>
          </div>
          <Link to="/work" className="font-mono text-sm inline-flex items-center gap-1 hover:gap-3 transition-all">
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="relative bg-electric text-cream brutal-lg rounded-3xl p-10 sm:p-16 overflow-hidden">
          <div className="absolute top-4 right-6 font-mono text-xs opacity-70">/ Let's collaborate</div>
          <h3 className="font-display text-5xl sm:text-7xl max-w-3xl">
            Have a project in mind? <span className="text-lime">Let's talk.</span>
          </h3>
          <p className="mt-4 max-w-lg text-cream/80">
            Web applications, brand sites, integrations, and the occasional ambitious experiment. Send a short brief and I'll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${HAMZA.email}`} className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-ink font-mono text-sm rounded-md brutal brutal-hover">
              Email me →
            </a>
            <a href={`https://wa.me/${HAMZA.phone.replace(/[\s+]/g, "")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-ink font-mono text-sm rounded-md brutal brutal-hover">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-2xl">{n}</p>
      <p className="text-muted-foreground">{l}</p>
    </div>
  );
}
