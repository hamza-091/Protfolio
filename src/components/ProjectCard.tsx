import type { Project } from "@/lib/portfolio-data";
import { ArrowUpRight } from "lucide-react";

const accentBg: Record<Project["accent"], string> = {
  lime: "bg-lime",
  pink: "bg-pink",
  electric: "bg-electric text-cream",
  cream: "bg-cream",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={`group relative block brutal brutal-hover rounded-2xl overflow-hidden bg-card ${project.rotate} hover:rotate-0 transition-transform`}
    >
      <span className="tape -top-2 left-8 rotate-[-6deg]" aria-hidden />
      <div
        className={`${accentBg[project.accent]} px-5 py-3 flex items-center justify-between border-b-2 border-ink`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 bg-ink text-cream rounded">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest">{project.tag}</span>
        </div>
        <span className="font-mono text-xs">{project.year}</span>
      </div>

      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={400}
          height={250}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      <div className="p-5 bg-card">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-3xl">{project.title}</h3>
          <ArrowUpRight className="w-6 h-6 shrink-0 transition-transform group-hover:rotate-45" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{project.blurb}</p>
        {project.challengeSolution && (
          <p className="mt-3 text-xs border-t border-dashed border-ink/20 pt-2.5 font-sans leading-relaxed text-ink/80">
            {project.challengeSolution}
          </p>
        )}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] px-2 py-0.5 bg-muted border border-ink/20 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
