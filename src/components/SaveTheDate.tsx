import SectionDivider from './SectionDivider';
import FloralCorners from './FloralCorners';
import Countdown from './Countdown';
import { EVENT } from '../lib/event';

export default function SaveTheDate() {
  return (
    <section className="relative overflow-hidden bg-blush py-20 sm:py-28">
      <FloralCorners />

      <div className="relative mx-auto max-w-4xl px-6 z-10">
        <div className="flex flex-col items-center gap-7 text-center">
          <SectionDivider label="Save the Date" />
          <h2 className="font-heading text-3xl font-semibold text-maroon sm:text-5xl">
            Counting <span className="text-gold-shimmer">Down</span>
          </h2>
          <p className="max-w-xl font-serif text-lg text-maroon-dark/70">
            Every second brings us closer to the most beautiful day of our lives — and we can't wait to celebrate it with you.
          </p>
        </div>

        <div className="mt-10">
          <Countdown tone="light" />
        </div>

        <p className="mt-8 text-center font-display text-sm tracking-[0.25em] uppercase text-maroon/55">
          {EVENT.weddingDateLong} · {EVENT.time}
        </p>
      </div>
    </section>
  );
}
