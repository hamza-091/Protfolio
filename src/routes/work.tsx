import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS, MISC_PROJECTS } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Hamza Mehmood" },
      {
        name: "description",
        content:
          "Hamza Mehmood's work includes six polished landing pages plus miscellaneous projects such as a capstone voice agent, SmartPOS, and stock prediction.",
      },
      { property: "og:title", content: "Work — Hamza Mehmood" },
      {
        property: "og:description",
        content:
          "Web development work by Hamza Mehmood, including landing pages and miscellaneous projects.",
      },
      { property: "og:image", content: "https://www.devhamza.tech/images/og-image.png" },
      { name: "twitter:image", content: "https://www.devhamza.tech/images/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.devhamza.tech/work" }],
  }),
  component: Work,
});

function Work() {
  return (
    <div className="grain mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / The work
        </p>
        <h1 className="mt-2 font-display text-6xl sm:text-8xl">
          Landing<span className="text-pink">.</span> pages<span className="text-pink">.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Polished landing pages built for different brands and products, plus a separate set of
          miscellaneous projects that show the full range of my web work.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-20 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          / Miscellaneous projects
        </p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl">Builds beyond landing pages.</h2>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
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
