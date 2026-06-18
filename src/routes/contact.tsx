import { createFileRoute } from "@tanstack/react-router";
import { HAMZA } from "@/lib/portfolio-data";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { name: "description", content: "Get in touch with Hamza Mehmood. Email, WhatsApp, phone, or LinkedIn — typically replies within a day." },
      { property: "og:title", content: "Contact — Hamza Mehmood" },
      { property: "og:description", content: "Get in touch — open for web development engagements." },
    ],
    links: [{ rel: "canonical", href: "https://protfolio-ebon-two.vercel.app/contact" }],
    title: "Contact — Hamza Mehmood",
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="grain mx-auto max-w-5xl px-4 sm:px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">/ Contact</p>
      <h1 className="mt-2 font-display text-6xl sm:text-8xl">
        Let's <span className="bg-lime px-3 -skew-x-6 inline-block">talk</span>.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Email and WhatsApp are the fastest ways to reach me. For everything else, take your pick — I read and reply to all of them.
      </p>

      <div className="mt-12">
        <div className="bg-card p-8 rounded-2xl brutal border-2 border-ink max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contacts</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-mono text-xs text-muted-foreground">Email</p>
              <a href={`mailto:${HAMZA.email}`} className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors">{HAMZA.email}</a>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">WhatsApp</p>
              <a href={`https://wa.me/${HAMZA.phone.replace(/[\s+]/g, "")}`} target="_blank" rel="noreferrer" className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors">{HAMZA.phone}</a>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
              <a href={HAMZA.linkedin} target="_blank" rel="noreferrer" className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors">hamzamehmoodd</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 bg-ink text-cream brutal rounded-2xl p-8">
        <p className="font-display text-2xl">Prefer to ask first?</p>
        <p className="text-cream/70 mt-1 text-sm">
          Tap the chat button in the bottom-right to ask anything about my background, stack, or projects.
        </p>
      </div>
    </div>
  );
}

function ContactCard({ href, icon, label, value, tint }: { href: string; icon: React.ReactNode; label: string; value: string; tint: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`group p-6 rounded-2xl brutal brutal-hover ${tint}`}>
      <div className="flex items-center justify-between">
        {icon}
        <span className="font-mono text-xs uppercase tracking-widest opacity-70">{label}</span>
      </div>
      <p className="mt-6 font-display text-2xl break-all">{value}</p>
    </a>
  );
}
