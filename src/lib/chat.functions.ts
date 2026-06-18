import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CV_CONTEXT } from "./portfolio-data";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const SYSTEM_PROMPT = `
You are Hamza's portfolio assistant, embedded on his personal website.
You speak in a casual, direct Gen Z style representing Hamza (mostly lowercase, friendly, to-the-point, no corporate speak or extra fluff).

GUIDELINES:
- speak in a casual, direct, Gen Z style (mostly lowercase, friendly, relaxed vibe).
- keep replies extremely concise. answer straight to the point with zero corporate filler or generic paragraphs.
- when asked about landing page charges/pricing, answer directly with the price range ($150–$400 depending on complexity) and a very short description (responsive, clean, SEO-optimized). do NOT add extra sentences or say stuff like "His rates are intentionally kept competitive without compromising on quality...".
- if a visitor asks about a specific niche website (travel, gym, restaurant, etc.), describe what it includes and list Hamza's pricing directly.
- if you don't know something specific, say so and direct visitors to email hamzamehmood054@gmail.com or WhatsApp at +92 311 2823179.
- keep responses short — under 60-80 words max when possible.
- answer general tech questions casually and helpfully.

HAMZA'S FULL PROFILE:
${CV_CONTEXT}
`.trim();

function shouldUseLocalFaq(text: string) {
  const value = text.toLowerCase();
  const hamzaKeywords = [
    "hamza",
    "portfolio",
    "cv",
    "resume",
    "contact hamza",
    "about hamza",
    "his projects",
    "his skills",
  ];
  const budgetKeywords = ["budget", "cost", "price", "usd"];
  const websiteKeywords = ["website", "web site", "travel agency", "travel website", "booking"];

  return (
    hamzaKeywords.some((keyword) => value.includes(keyword)) ||
    (budgetKeywords.some((keyword) => value.includes(keyword)) &&
      websiteKeywords.some((keyword) => value.includes(keyword)))
  );
}

async function askRagFaqBot(message: string) {
  const enabled = (process.env.RAG_FAQ_BOT_ENABLED ?? "true").toLowerCase() !== "false";
  if (!enabled) return null;

  const endpoint = process.env.RAG_FAQ_BOT_URL || "http://localhost:3001/api/chat";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
      signal: controller.signal,
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json().catch(() => null);
    const answer = typeof json?.answer === "string" ? json.answer.trim() : "";
    if (!answer) return null;

    return answer;
  } catch (error) {
    console.error("RAG FAQ bot request failed", error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export const askHamzaBot = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      messages: z.array(MessageSchema).min(1).max(30),
    }),
  )
  .handler(async ({ data }) => {
    const geminiKey = process.env.GEMINI_API_KEY;
    const lovableKey = process.env.LOVABLE_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    const lastUserMessage =
      [...data.messages].reverse().find((message) => message.role === "user")?.content ?? "";

    const activePrompt = SYSTEM_PROMPT;

    // Prefer local FAQ answers for portfolio-related questions, then fall back to LLM providers.
    if (shouldUseLocalFaq(lastUserMessage)) {
      const ragReply = await askRagFaqBot(lastUserMessage);
      if (ragReply) {
        return { reply: ragReply };
      }
    }

    async function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function fetchWithRetry(url: string, options: RequestInit, maxRetries = 5) {
      let attempt = 0;

      while (true) {
        const res = await fetch(url, options);

        if (res.ok) {
          return res;
        }

        if ((res.status === 429 || res.status === 503) && attempt < maxRetries) {
          attempt += 1;
          const wait = 500 * 2 ** attempt;
          await sleep(wait);
          continue;
        }

        return res;
      }
    }

    const errors: string[] = [];

    if (geminiKey) {
      try {
        const modelList = process.env.GEMINI_MODEL_LIST
          ? process.env.GEMINI_MODEL_LIST.split(",")
              .map((value) => value.trim())
              .filter(Boolean)
          : [process.env.GEMINI_MODEL || "gemini-2.5-flash", "gemini-1.5-flash", "gemini-1.5-pro"];

        const baseContents = [
          {
            role: "user",
            parts: [{ text: activePrompt }],
          },
        ];

        const historyContents = data.messages.map((message) => ({
          role: message.role === "user" ? "user" : "model",
          parts: [{ text: message.content }],
        }));

        let lastErr: { status: number; body: string } | null = null;
        let success = false;
        let reply = "";

        for (const model of modelList) {
          const urlBase = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
          const url = `${urlBase}?key=${encodeURIComponent(geminiKey)}`;

          try {
            const res = await fetchWithRetry(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contents: [...baseContents, ...historyContents],
              }),
            });

            if (!res.ok) {
              const body = await res.text().catch(() => "");
              console.error("Gemini error", res.status, body);
              lastErr = { status: res.status, body };
              continue;
            }

            const json = await res.json().catch(() => ({}));
            reply =
              json?.candidates?.[0]?.content?.parts?.[0]?.text ||
              json?.candidates?.[0]?.content?.parts
                ?.map((part: { text?: string }) => part.text)
                .join("") ||
              json?.output?.[0]?.content?.text ||
              (typeof json === "string" ? json : JSON.stringify(json).slice(0, 1000));
            success = true;
            break;
          } catch (fetchErr) {
            console.error(`Gemini fetch failed for model ${model}:`, fetchErr);
            lastErr = {
              status: 0,
              body: fetchErr instanceof Error ? fetchErr.message : String(fetchErr),
            };
          }
        }

        if (success) {
          return { reply: reply ?? "..." };
        } else {
          errors.push(`Gemini failed (last status: ${lastErr?.status}, body: ${lastErr?.body})`);
        }
      } catch (error) {
        console.error("Gemini request failed", error);
        errors.push(
          `Gemini request failed: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }

    if (lovableKey) {
      try {
        const res = await fetchWithRetry("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableKey}`,
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [{ role: "system", content: activePrompt }, ...data.messages],
          }),
        });

        if (res.ok) {
          const json = await res.json();
          const reply: string = json?.choices?.[0]?.message?.content ?? "...";
          return { reply };
        } else {
          const body = await res.text().catch(() => "");
          console.error("AI gateway error", res.status, body);
          errors.push(`Lovable AI Gateway failed (status: ${res.status}, body: ${body})`);
        }
      } catch (error) {
        console.error("Lovable AI Gateway request failed", error);
        errors.push(
          `Lovable request failed: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }

    if (openaiKey) {
      try {
        const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
        const res = await fetchWithRetry("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model,
            messages: [{ role: "system", content: activePrompt }, ...data.messages],
          }),
        });

        if (res.ok) {
          const json = await res.json();
          const reply: string = json?.choices?.[0]?.message?.content ?? "...";
          return { reply };
        } else {
          const body = await res.text().catch(() => "");
          console.error("OpenAI error", res.status, body);
          errors.push(`OpenAI failed (status: ${res.status}, body: ${body})`);
        }
      } catch (error) {
        console.error("OpenAI request failed", error);
        errors.push(
          `OpenAI request failed: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }

    if (errors.length > 0) {
      return {
        reply: `Sorry, all configured AI providers failed. Errors:\n- ${errors.join("\n- ")}`,
      };
    }

    return {
      reply:
        "ai gateway isn't configured yet. tell hamza to wire LOVABLE_API_KEY or OPENAI_API_KEY ✨",
    };
  });
