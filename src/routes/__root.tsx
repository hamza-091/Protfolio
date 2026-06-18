import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCssText from "../styles.css?inline";
import { HAMZA } from "@/lib/portfolio-data";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("../components/Footer").then((m) => ({ default: m.Footer })));
const Chatbot = lazy(() => import("../components/Chatbot").then((m) => ({ default: m.Chatbot })));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { title: "Hamza Mehmood — Web Developer" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Hamza Mehmood is a web developer building clean, modern websites and practical digital experiences.",
      },
      { name: "author", content: "Hamza Mehmood" },
      { property: "og:title", content: "Hamza Mehmood — Web Developer" },
      {
        property: "og:description",
        content: "Web developer building clean, modern websites and practical digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: HAMZA.name,
        url: "/",
        jobTitle: HAMZA.role,
        email: `mailto:${HAMZA.email}`,
        sameAs: [HAMZA.linkedin],
      },
      {
        "@type": "WebSite",
        name: `${HAMZA.name} — Portfolio`,
        url: "/",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <title>Hamza Mehmood — Web Developer</title>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: appCssText }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          id="google-fonts"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "requestAnimationFrame(function() { document.getElementById('google-fonts').media='all'; });",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Suspense fallback={<div className="h-40 bg-ink" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </QueryClientProvider>
  );
}
