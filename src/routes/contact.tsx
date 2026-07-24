import { createFileRoute } from "@tanstack/react-router";
import { HAMZA } from "@/lib/portfolio-data";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hamza Mehmood" },
      {
        name: "description",
        content:
          "Get in touch with Hamza Mehmood. Email, WhatsApp, phone, or LinkedIn — typically replies within a day.",
      },
      { property: "og:title", content: "Contact — Hamza Mehmood" },
      {
        property: "og:description",
        content: "Get in touch — open for web development engagements.",
      },
      { property: "og:image", content: "https://www.devhamza.tech/images/og-image.png" },
      { name: "twitter:image", content: "https://www.devhamza.tech/images/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.devhamza.tech/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div ref={revealRef} className="grain mx-auto max-w-5xl px-4 sm:px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">/ Contact</p>
      <h1 className="mt-2 font-display text-6xl sm:text-8xl">
        Let's <span className="bg-lime px-3 -skew-x-6 inline-block">talk</span>.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Email and WhatsApp are the fastest ways to reach me. For everything else, take your pick — I
        read and reply to all of them.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="reveal">
          <div className="bg-card p-8 rounded-2xl brutal border-2 border-ink">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contacts
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-mono text-xs text-muted-foreground">Email</p>
                <a
                  href={`mailto:${HAMZA.email}`}
                  className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors"
                >
                  {HAMZA.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground">WhatsApp</p>
                <a
                  href={`https://wa.me/${HAMZA.phone.replace(/[\s+]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors"
                >
                  {HAMZA.phone}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
                <a
                  href={HAMZA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors"
                >
                  hamzamehmoodd
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground">GitHub</p>
                <a
                  href={HAMZA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-1 font-display text-2xl underline decoration-2 underline-offset-4 hover:text-lime transition-colors"
                >
                  hamza-091
                </a>
              </div>
            </div>
            <p className="mt-5 font-mono text-xs text-lime flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              Typically replies within a day
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="reveal reveal-delay-1">
          <form
            action="https://formspree.io/f/xpwddjyp"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl brutal border-2 border-ink"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Send a message
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs text-muted-foreground block mb-1">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-muted border-2 border-ink rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-mono text-xs text-muted-foreground block mb-1">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-muted border-2 border-ink rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono text-xs text-muted-foreground block mb-1">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project…"
                  className="w-full px-4 py-3 bg-muted border-2 border-ink rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={formState === "sending"}
                className="w-full px-6 py-3.5 bg-lime text-ink font-mono text-sm font-bold rounded-md brutal brutal-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {formState === "sending" ? "Sending…" : formState === "sent" ? "✓ Sent!" : "Send message →"}
              </button>
              {formState === "sent" && (
                <p className="font-mono text-xs text-lime text-center">Thanks! I'll get back to you soon.</p>
              )}
              {formState === "error" && (
                <p className="font-mono text-xs text-pink text-center">Something went wrong. Try emailing me directly.</p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-14 bg-ink text-cream brutal rounded-2xl p-8 reveal reveal-delay-2">
        <p className="font-display text-2xl">Prefer to ask first?</p>
        <p className="text-cream/70 mt-1 text-sm">
          Tap the chat button in the bottom-right to ask anything about my background, stack, or
          projects.
        </p>
      </div>
    </div>
  );
}
