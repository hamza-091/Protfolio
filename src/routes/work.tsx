import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS, MISC_PROJECTS, HAMZA } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Hamza Mehmood" },
      {
        name: "description",
        content:
          "Hamza Mehmood's work includes a capstone healthcare voice agent, client websites, full-stack apps, and AI-powered tools.",
      },
      { property: "og:title", content: "Work — Hamza Mehmood" },
      {
        property: "og:description",
        content:
          "Hamza Mehmood's work includes a capstone healthcare voice agent, client websites, full-stack apps, and AI-powered tools.",
      },
      { property: "og:image", content: "https://www.devhamza.tech/images/og-image.png" },
      { name: "twitter:image", content: "https://www.devhamza.tech/images/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.devhamza.tech/work" }],
  }),
  component: Work,
});

function Work() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="grain mx-auto max-w-7xl px-4 sm:px-6 py-16" ref={revealRef}>
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / The work
        </p>
        <h1 className="mt-2 font-display text-6xl sm:text-8xl">
          Selected<span className="text-pink">.</span> work<span className="text-pink">.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Real projects built for clients and personal use — from full-stack applications to AI-powered tools, each one shipped and production-ready.
        </p>
      </div>

      {/* FLAGSHIP PROJECT */}
      {PROJECTS[0]?.flagship && (
        <section className="mt-16 reveal">
          <div className="relative bg-ink text-cream brutal-lg rounded-3xl p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-4 right-6 font-mono text-xs text-cream/50">/ Flagship project</div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-electric/20 blob opacity-40" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-lime/10 blob opacity-30" style={{ animationDelay: '-6s' }} />
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-electric text-cream font-mono text-xs rounded-full brutal-sm mb-6">
              🔥 Capstone Project
            </span>
            <h2 className="font-display text-5xl sm:text-7xl text-cream">
              {PROJECTS[0].title}<span className="text-lime">.</span>
            </h2>
            <p className="mt-2 font-mono text-sm text-cream/60 uppercase tracking-widest">{PROJECTS[0].tag}</p>
            <p className="mt-4 max-w-2xl text-lg text-cream/80 leading-relaxed">{PROJECTS[0].blurb}</p>
            {PROJECTS[0].stats && (
              <div className="mt-8 flex flex-wrap gap-6">
                {PROJECTS[0].stats.map((s) => (
                  <div key={s.label} className="bg-cream/10 brutal-sm rounded-xl px-5 py-3">
                    <p className="font-display text-2xl text-lime">{s.value}</p>
                    <p className="font-mono text-xs text-cream/60 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {PROJECTS[0].stack.map((s) => (
                <span key={s} className="font-mono text-xs px-3 py-1 bg-cream/10 border border-cream/20 rounded-md text-cream/80">{s}</span>
              ))}
            </div>
            {PROJECTS[0].challengeSolution && (
              <p className="mt-6 text-sm border-t border-cream/10 pt-4 text-cream/60 leading-relaxed max-w-2xl">{PROJECTS[0].challengeSolution}</p>
            )}
          </div>
        </section>
      )}

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal">
        {PROJECTS.slice(1).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 1} />
        ))}
      </div>

      <div className="mt-20 max-w-3xl reveal">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / Miscellaneous projects
        </p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl">Builds beyond landing pages.</h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3 reveal">
        {MISC_PROJECTS.map((project) => (
          <article
            key={project.title}
            className="bg-card brutal rounded-2xl p-6 border-2 border-ink"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {project.where}
                </p>
                <h3 className="mt-2 font-display text-3xl">{project.title}</h3>
              </div>
              <span className="font-mono text-xs px-2 py-1 bg-lime rounded-md brutal-sm">
                {project.year}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((stackItem) => (
                <span
                  key={stackItem}
                  className="font-mono text-[10px] px-2 py-0.5 bg-muted border border-ink/20 rounded"
                >
                  {stackItem}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
