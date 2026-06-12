# Hamza Portfolio FAQ Bot (RAG-style, local, free)

## Setup

```bash
cd rag-faq-bot
npm install
npm start
```

First run downloads the embedding model (~25MB, one-time, cached locally).

Server runs at `http://localhost:3001`.

## Test it

```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What services do you offer?"}'
```

## Add/edit Q&A

Edit `data/faq_data.json` — add new `{ "question": "...", "answer": "..." }` pairs anytime.
Restart server to re-embed.

## Connect to your portfolio chat widget

Use `frontend-integration.js` — replace your Gemini API call with the `getBotReply()`
function. It calls your local server and returns the matched answer.

## Deploy

For production, deploy this server (Render, Railway, or a small VPS) and update
the fetch URL in your frontend from `localhost:3001` to your deployed URL.

## Notes

- No API keys, no training, no external calls — fully local embeddings via `@xenova/transformers`.
- `SIMILARITY_THRESHOLD` (0.45) in `server.js` controls fallback sensitivity — lower it
  if too many questions fall back to the contact message, raise it if irrelevant
  questions get matched to wrong answers.
