type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

const ERROR_HTML = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Something went wrong</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;background:#f5f0e8;color:#1a1a2e}
.c{text-align:center;max-width:420px;padding:2rem}h1{font-size:1.25rem;font-weight:600}p{color:#666;font-size:.875rem;margin-top:.5rem}
a{display:inline-block;margin-top:1.5rem;padding:.5rem 1rem;background:#1a1a2e;color:#f5f0e8;border-radius:6px;text-decoration:none;font-size:.875rem}</style>
</head><body><div class="c"><h1>This page didn't load</h1><p>Something went wrong. Try refreshing or head back home.</p><a href="/">Go home</a></div></body></html>`;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return response;
    } catch (error) {
      console.error(error);
      return new Response(ERROR_HTML, {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
