import { useState, useEffect } from 'react';
import { EVENT } from '../lib/event';

function calculateTimeLeft(targetTime: number) {
  const diff = Math.max(0, targetTime - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

export default function Countdown({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const targetTime = new Date(EVENT.weddingDateISO).getTime();
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (timeLeft.done) {
    return (
      <p className="font-display text-xl tracking-wide text-gold-light">
        The celebrations have begun!
      </p>
    );
  }

  const isDark = tone === 'dark';

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-3 max-w-full">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center gap-1.5 sm:gap-3">
          <div
            className={`flex w-13 sm:w-18 md:w-20 flex-col items-center justify-center rounded-xl border py-2 sm:py-3.5 backdrop-blur-sm transition-all ${
              isDark
                ? 'border-gold-light/40 bg-maroon-deep/80 shadow-md text-gold-pale'
                : 'border-gold/40 bg-maroon/5 shadow-xs text-maroon'
            }`}
          >
            <span
              className={`font-heading text-xl sm:text-3xl md:text-4xl font-semibold tabular-nums ${
                isDark ? 'text-gold-pale' : 'text-maroon'
              }`}
            >
              {String(unit.value).padStart(2, '0')}
            </span>
            <span
              className={`mt-0.5 sm:mt-1 font-display text-[0.55rem] sm:text-xs tracking-[0.2em] uppercase ${
                isDark ? 'text-cream/75' : 'text-maroon/60'
              }`}
            >
              {unit.label}
            </span>
          </div>

          {idx < units.length - 1 && (
            <span
              className={`font-heading text-lg sm:text-2xl ${
                isDark ? 'text-gold-light/70' : 'text-gold'
              }`}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
