import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "@xenova/transformers";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const SIMILARITY_THRESHOLD = 0.45;
const BUDGET_FALLBACK =
  "Hamza's rates are well below market: about $150-$400 for a simple one-page site, $400-$900 for a professional multi-page website with booking inquiry and lead forms, and $1,000+ for a custom web app with search, filters, admin tools, and advanced integrations. Final price depends on pages, design, features, and integrations.";

// Load FAQ data
const faqData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "faq_data.json"), "utf-8")
);

let extractor;
let faqEmbeddings = [];

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function embed(text) {
  const output = await extractor(text, { pooling: "mean", normalize: true });
  return Array.from(output.data);
}

async function init() {
  console.log("Loading embedding model...");
  extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

  console.log("Embedding FAQ questions...");
  for (const item of faqData) {
    const vec = await embed(item.question);
    faqEmbeddings.push({ ...item, vector: vec });
  }
  console.log(`Ready. ${faqEmbeddings.length} FAQ entries embedded.`);
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const normalizedMessage = message.toLowerCase();
    const budgetKeywords = ["budget", "cost", "price", "usd", "travel agency", "travel website", "website cost"];

    if (budgetKeywords.some((keyword) => normalizedMessage.includes(keyword))) {
      return res.json({
        answer: BUDGET_FALLBACK,
        score: 1,
      });
    }

    const queryVec = await embed(message);

    let best = null;
    let bestScore = -1;

    for (const item of faqEmbeddings) {
      const score = cosineSimilarity(queryVec, item.vector);
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    }

    if (bestScore < SIMILARITY_THRESHOLD) {
      return res.json({
        answer:
          "I'm not sure about that. For specific questions, feel free to email hamzamehmood054@gmail.com or message on WhatsApp +92 311 2823179.",
        score: bestScore,
      });
    }

    res.json({ answer: best.answer, score: bestScore });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", entries: faqEmbeddings.length });
});

init().then(() => {
  app.listen(PORT, () => console.log(`FAQ bot server running on port ${PORT}`));
});
