import { HAMZA } from "@/lib/portfolio-data";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-4xl">Let's<br/>build<br/><span className="text-lime">something.</span></h3>
        </div>
        <div className="font-mono text-sm space-y-2">
          <p className="text-cream/60">Contact</p>
          <a href={`mailto:${HAMZA.email}`} className="flex items-center gap-2 underline decoration-2 underline-offset-2 hover:text-lime transition-colors"><Mail className="w-4 h-4"/>{HAMZA.email}</a>
          <a href={`https://wa.me/${HAMZA.phone.replace(/[\s+]/g, "")}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 underline decoration-2 underline-offset-2 hover:text-lime transition-colors"><MessageCircle className="w-4 h-4"/>WhatsApp · {HAMZA.phone}</a>
          <a href={HAMZA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 underline decoration-2 underline-offset-2 hover:text-lime transition-colors"><Linkedin className="w-4 h-4"/>LinkedIn</a>
        </div>
        <div className="font-mono text-sm space-y-2 md:text-right">
          <p className="text-cream/60">Hamza Mehmood</p>
          <p>Web Developer</p>
          <p className="text-cream/40 pt-4">© 2026 Hamza Mehmood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
