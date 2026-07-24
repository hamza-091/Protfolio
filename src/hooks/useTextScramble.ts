import { useEffect, useState } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Custom hook that creates a text scramble/decode effect.
 * Characters cycle through random glyphs before resolving to the target text.
 */
export function useTextScramble(
  targetText: string,
  options?: { duration?: number; delay?: number },
) {
  const { duration = 800, delay = 300 } = options ?? {};
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const len = targetText.length;
    let startTime: number | null = null;
    let rafId: number;
    let delayTimeout: ReturnType<typeof setTimeout>;

    // Start with scrambled text
    setDisplayText(
      Array.from({ length: len }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join(""),
    );

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Characters resolve left-to-right with some randomness
      const resolved = Math.floor(progress * len);
      const result = targetText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(result);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
        setIsComplete(true);
      }
    };

    delayTimeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(rafId);
    };
  }, [targetText, duration, delay]);

  return { displayText, isComplete };
}
