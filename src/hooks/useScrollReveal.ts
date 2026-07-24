import { useEffect, useRef, type RefObject } from "react";

/**
 * Custom hook that adds scroll-reveal animations using IntersectionObserver.
 * Adds a `.revealed` class when the element enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options },
    );

    // Observe the container and all children with .reveal
    const revealEls = el.querySelectorAll(".reveal");
    revealEls.forEach((child) => observer.observe(child));

    // Also observe the container itself if it has .reveal
    if (el.classList.contains("reveal")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
