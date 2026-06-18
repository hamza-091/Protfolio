const words = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Responsive Design",
  "Accessibility",
  "SEO",
  "REST APIs",
  "MongoDB",
];

export function Marquee() {
  return (
    <div className="border-y-2 border-ink bg-lime overflow-hidden py-3">
      <div className="marquee">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className="font-display text-2xl sm:text-3xl flex items-center gap-12 whitespace-nowrap text-white"
          >
            {w}
            <span className="w-3 h-3 bg-ink rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
