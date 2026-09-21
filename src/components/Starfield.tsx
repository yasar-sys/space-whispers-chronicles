import { useMemo } from "react";

/** Animated CSS starfield background. Purely decorative. */
export function Starfield({ count = 90 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // deterministic pseudo-random so SSR and client agree
        const r = (n: number) =>
          Number((((Math.sin(i * n) + 1) / 2) * 100).toFixed(2));
        return {
          left: r(12.9898),
          top: r(78.233),
          size: Number((1 + (r(43.1) % 2)).toFixed(2)),
          delay: Number(((r(7.7) % 100) / 25).toFixed(2)),
        };
      }),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-space overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
