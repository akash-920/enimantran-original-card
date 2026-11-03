import { useMemo } from 'react';

interface FlowerShowerProps {
  count?: number;
  enabled?: boolean;
}

export default function FlowerShower({ count = 28, enabled = true }: FlowerShowerProps) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // 0: Deep crimson rose, 1: Vibrant scarlet rose, 2: Auspicious marigold/gold, 3: Soft blush pink
      const type = i % 4;
      const left = (i / count) * 96 + (Math.sin(i * 1.5) * 3 + 2);
      const fallDuration = 9 + (i % 7) * 1.4; // 9s to 17.4s fall
      const swayDuration = 2.8 + (i % 5) * 0.7; // 2.8s to 5.6s sway
      const delay = -(i * 0.65); // Distributed negative delay so screen is immediately filled with petals
      const size = 16 + (i % 6) * 3; // 16px to 31px
      const drift = 30 + (i % 5) * 20; // 30px to 110px
      const sway = 16 + (i % 4) * 10; // 16px to 46px
      const rotStart = (i * 47) % 360;
      const rotEnd = rotStart + 360 + ((i % 3) * 180);
      const flipEnd = ((i % 2) + 1) * 360;
      const opacity = 0.78 + (i % 3) * 0.08; // 0.78 to 0.94

      return {
        id: i,
        type,
        left: Math.max(1, Math.min(97, left)),
        fallDuration,
        swayDuration,
        delay,
        size,
        drift,
        sway,
        rotStart,
        rotEnd,
        flipEnd,
        opacity,
      };
    });
  }, [count]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-25 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Shared SVG Gradients */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          {/* Deep Crimson Rose */}
          <linearGradient id="roseGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4081" />
            <stop offset="35%" stopColor="#c2185b" />
            <stop offset="75%" stopColor="#880e4f" />
            <stop offset="100%" stopColor="#4a0421" />
          </linearGradient>

          {/* Scarlet Red Rose */}
          <linearGradient id="roseGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff5252" />
            <stop offset="40%" stopColor="#d32f2f" />
            <stop offset="85%" stopColor="#9a0007" />
            <stop offset="100%" stopColor="#5b0e2d" />
          </linearGradient>

          {/* Auspicious Marigold Gold */}
          <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="75%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Soft Romantic Blush */}
          <linearGradient id="blushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff1f2" />
            <stop offset="35%" stopColor="#f472b6" />
            <stop offset="75%" stopColor="#db2777" />
            <stop offset="100%" stopColor="#9d174d" />
          </linearGradient>
        </defs>
      </svg>

      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: `${p.size}px`,
            height: `${p.size * 1.25}px`,
            animationDuration: `${p.fallDuration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift' as string]: `${p.drift}px`,
            ['--rot-start' as string]: `${p.rotStart}deg`,
            ['--rot-end' as string]: `${p.rotEnd}deg`,
            ['--flip-end' as string]: `${p.flipEnd}deg`,
            ['--petal-opacity' as string]: p.opacity,
          }}
        >
          <div
            className="w-full h-full animate-petal-sway"
            style={{
              animationDuration: `${p.swayDuration}s`,
              animationDelay: `${p.delay * 0.7}s`,
              ['--sway' as string]: `${p.sway}px`,
            }}
          >
            {p.type === 0 && (
              // Classic Curved Rose Petal
              <svg viewBox="0 0 30 38" fill="none" className="w-full h-full drop-shadow-[0_3px_5px_rgba(91,14,45,0.3)]">
                <path
                  d="M15 2 C23 3, 29 11, 28 22 C27 30, 19 37, 15 37 C11 37, 3 30, 2 22 C1 11, 7 3, 15 2 Z"
                  fill="url(#roseGrad1)"
                />
                <path
                  d="M15 5 C17 13, 16 26, 15 34"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {p.type === 1 && (
              // Scarlet Flutter Rose Petal
              <svg viewBox="0 0 32 40" fill="none" className="w-full h-full drop-shadow-[0_3px_5px_rgba(91,14,45,0.3)]">
                <path
                  d="M16 2 C25 3, 31 13, 29 25 C27 33, 18 39, 14 38 C8 37, 2 28, 3 18 C4 8, 10 2, 16 2 Z"
                  fill="url(#roseGrad2)"
                />
                <path
                  d="M16 6 C17 15, 15 28, 14 35"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {p.type === 2 && (
              // Auspicious Marigold (Genda Phool) Petal
              <svg viewBox="0 0 26 36" fill="none" className="w-full h-full drop-shadow-[0_3px_5px_rgba(201,161,74,0.35)]">
                <path
                  d="M13 2 C20 4, 25 12, 23 23 C21 30, 16 35, 13 35 C10 35, 5 30, 3 23 C1 12, 6 4, 13 2 Z"
                  fill="url(#marigoldGrad)"
                />
                <path
                  d="M13 5 C14 14, 14 25, 13 32"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              </svg>
            )}

            {p.type === 3 && (
              // Soft Romantic Blush Petal
              <svg viewBox="0 0 28 34" fill="none" className="w-full h-full drop-shadow-[0_3px_5px_rgba(194,24,91,0.25)]">
                <path
                  d="M14 2 C21 3, 27 10, 26 20 C25 27, 18 33, 14 33 C10 33, 3 27, 2 20 C1 10, 7 3, 14 2 Z"
                  fill="url(#blushGrad)"
                />
                <path
                  d="M14 5 C15 13, 15 23, 14 30"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
