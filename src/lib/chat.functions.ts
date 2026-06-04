import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CV_CONTEXT } from "./portfolio-data";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const SYSTEM_PROMPT = `
You are Hamza's portfolio assistant.

RULES:
1. You MUST answer general questions normally (like ChatGPT).
2. You ALSO know details about Hamza's skills, projects, and contact info.
3. Only use CV information when user asks about Hamza.
4. If question is general (travel, tech, coding, advice), answer normally.
5. Be helpful, concise, and professional.

HAMZA INFO:
${CV_CONTEXT}
`.trim();

const GENERAL_PROMPT = `You are a helpful general AI assistant.
Be concise, professional, and friendly.`;

function isHamzaQuestion(text: string) {
  const value = text.toLowerCase();
  return [
    "hamza",
    "portfolio",
    "cv",
    "resume",
    "contact hamza",
    "about hamza",
    "his projects",
    "his skills",
  ].some((keyword) => value.includes(keyword));
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

    const activePrompt = isHamzaQuestion(lastUserMessage) ? SYSTEM_PROMPT : GENERAL_PROMPT;

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

        for (const model of modelList) {
          const urlBase = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
          const url = `${urlBase}?key=${encodeURIComponent(geminiKey)}`;

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

            if (res.status === 429 || res.status === 503 || res.status === 404) {
              continue;
            }

            if (res.status === 401 || res.status === 403) {
              return {
                reply: "invalid Gemini credentials — please check your GEMINI_API_KEY",
              };
            }

            return { reply: "brain glitch. try again?" };
          }

          const json = await res.json().catch(() => ({}));
          const reply =
            json?.candidates?.[0]?.content?.parts?.[0]?.text ||
            json?.candidates?.[0]?.content?.parts
              ?.map((part: { text?: string }) => part.text)
              .join("") ||
            json?.output?.[0]?.content?.text ||
            (typeof json === "string" ? json : JSON.stringify(json).slice(0, 1000));

          return { reply: reply ?? "..." };
        }

        console.error("All Gemini models failed", lastErr);
        if (lastErr?.status === 503) {
          return { reply: "Model is busy right now — try again in a few seconds 🥲" };
        }
        if (lastErr?.status === 404) {
          return {
            reply:
              "Gemini model not found (404). Please set `GEMINI_MODEL` in your .env to a valid model name",
          };
        }

        return { reply: "network issue contacting Gemini. try again later." };
      } catch (error) {
        console.error("Gemini request failed", error);
        return { reply: "network issue contacting Gemini. try again later." };
      }
    }

    if (lovableKey) {
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

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error("AI gateway error", res.status, body);
        if (res.status === 429) {
          return { reply: "whoa, too many messages too fast. try again in a sec 🥲" };
        }
        if (res.status === 402) {
          return { reply: "ai credits ran out — ping hamza at hamzamehmood054@gmail.com 📧" };
        }
        return { reply: "brain glitch. try again?" };
      }

      const json = await res.json();
      const reply: string = json?.choices?.[0]?.message?.content ?? "...";
      return { reply };
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

        if (!res.ok) {
          const body = await res.text().catch(() => "");
          console.error("OpenAI error", res.status, body);
          if (res.status === 429) {
            return { reply: "whoa, too many messages too fast. try again in a sec 🥲" };
          }
          if (res.status === 401) {
            return { reply: "invalid OpenAI API key — please check your environment variable" };
          }
          return { reply: "brain glitch. try again?" };
        }

        const json = await res.json();
        const reply: string = json?.choices?.[0]?.message?.content ?? "...";
        return { reply };
      } catch (error) {
        console.error("OpenAI request failed", error);
        return { reply: "network issue contacting OpenAI. try again later." };
      }
    }

    return {
      reply:
        "ai gateway isn't configured yet. tell hamza to wire LOVABLE_API_KEY or OPENAI_API_KEY ✨",
    };
  });
