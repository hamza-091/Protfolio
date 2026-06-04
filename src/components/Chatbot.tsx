import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { askHamzaBot } from "@/lib/chat.functions";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What kind of web work does Hamza do?",
  "What services are available for a website project?",
  "Which technologies does Hamza use?",
  "How can I get in touch with Hamza?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hello — I'm Hamza assistant. Ask me about web development services, projects, or contact details." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const ask = useServerFn(askHamzaBot);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const { reply } = await ask({ data: { messages: next.slice(-15) } });
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Sorry — a network hiccup. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-label={open ? "close chat" : "open chat"}
        title="Hamza assistant"
        className="fixed bottom-5 right-5 z-50 grid place-items-center w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#0f172a] text-white border border-white/10 shadow-[0_14px_32px_rgba(15,23,42,0.28)] transform transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:translate-y-0"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-20 right-3 sm:bottom-24 sm:right-5 z-50 w-[calc(100vw-1.5rem)] sm:w-[92vw] max-w-sm h-[72vh] sm:h-[70vh] max-h-150 flex flex-col bg-cream brutal-lg rounded-2xl overflow-hidden transition-all duration-200 origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 bg-ink text-cream flex items-center gap-2 border-b-2 border-ink">
          <div className="grid place-items-center w-8 h-8 rounded-full bg-lime text-ink">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="font-display text-base sm:text-lg leading-none">Hamza assistant</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-cream">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] px-3 py-2 text-sm rounded-xl border-2 border-ink whitespace-pre-wrap ${
                  m.role === "user" ? "bg-electric text-cream" : "bg-white"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-3 py-2 text-sm rounded-xl border-2 border-ink bg-white">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink animate-bounce [animation-delay:120ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink animate-bounce [animation-delay:240ms]" />
                </span>
              </div>
            </div>
          )}
        </div>

        {messages.length <= 1 && (
          <div className="px-3 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="font-mono text-[11px] px-2 py-1 bg-lime border-2 border-ink rounded-md brutal-hover"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => { e.preventDefault(); send(input); }}
          className="p-2 border-t-2 border-ink bg-white flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            className="flex-1 min-w-0 px-3 py-2 text-sm bg-cream border-2 border-ink rounded-md focus:outline-none focus:ring-2 focus:ring-electric font-mono"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="grid place-items-center w-10 h-10 bg-ink text-cream rounded-md brutal-hover disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
