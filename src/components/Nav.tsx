import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-cream/80 backdrop-blur border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 bg-lime brutal-sm rounded-md">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Hamza<span className="text-pink">.</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1.5 sm:gap-2">
          {links
            .filter((l) => l.label !== "Contact")
            .map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2 py-1 text-sm sm:px-3 sm:py-1.5 sm:text-sm font-mono rounded-md hover:bg-lime transition-colors data-[status=active]:bg-ink data-[status=active]:text-cream"
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          <Link
            to="/contact"
            className="ml-0.5 inline-flex px-2.5 py-1 text-sm sm:px-3 sm:py-1.5 sm:text-sm font-mono bg-pink text-white brutal-sm brutal-hover rounded-md"
            activeOptions={{ exact: true }}
          >
            Contact ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
