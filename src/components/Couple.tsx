import { Heart } from 'lucide-react';
import SectionDivider from './SectionDivider';
import FloralCorners from './FloralCorners';
import { EVENT } from '../lib/event';

import brideImg from '../assets/anshika-portrait-square.jpg';
import groomImg from '../assets/prashant-portrait-square.jpg';

export default function Couple() {
  return (
    <section className="relative overflow-hidden bg-blush py-20 sm:py-28">
      <FloralCorners />

      <div className="relative mx-auto max-w-5xl px-6 z-10">
        <div className="flex flex-col items-center gap-7 text-center">
          <SectionDivider label="The Couple" />
          <h2 className="font-heading text-3xl font-semibold text-maroon sm:text-5xl">
            Meet the <span className="text-gold-shimmer">Happy Couple</span>
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
          {/* BRIDE CARD (FIRST / BRIDE SIDE WEDDING CARD) */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="animate-glow rounded-full p-1.5">
                <div className="overflow-hidden rounded-full ring-2 ring-gold/50 shadow-md">
                  <img
                    alt={EVENT.bride.fullName}
                    className="h-40 w-40 rounded-full object-cover object-center sm:h-48 sm:w-48"
                    src={brideImg}
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-ivory px-4 py-1 font-display text-[0.65rem] tracking-[0.3em] uppercase text-gold-dark shadow-sm">
                The Bride
              </span>
            </div>
            <h3 className="mt-6 font-script text-5xl text-maroon sm:text-6xl">
              {EVENT.bride.name}
            </h3>
            <p className="mt-1 font-display text-sm tracking-[0.25em] uppercase text-maroon/60">
              {EVENT.bride.fullName}
            </p>
            <p className="mt-3 max-w-[15rem] font-serif text-base italic leading-snug text-maroon-dark/70">
              {EVENT.bride.parents}
            </p>
          </div>

          {/* Center Heart Emblem */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ivory shadow-md">
            <Heart className="h-7 w-7 fill-rose text-rose" />
          </div>

          {/* GROOM CARD (SECOND) */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="animate-glow rounded-full p-1.5">
                <div className="overflow-hidden rounded-full ring-2 ring-gold/50 shadow-md">
                  <img
                    alt={EVENT.groom.fullName}
                    className="h-40 w-40 rounded-full object-cover object-center sm:h-48 sm:w-48"
                    src={groomImg}
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-ivory px-4 py-1 font-display text-[0.65rem] tracking-[0.3em] uppercase text-gold-dark shadow-sm">
                The Groom
              </span>
            </div>
            <h3 className="mt-6 font-script text-5xl text-maroon sm:text-6xl">
              {EVENT.groom.name}
            </h3>
            <p className="mt-1 font-display text-sm tracking-[0.25em] uppercase text-maroon/60">
              {EVENT.groom.fullName}
            </p>
            <p className="mt-3 max-w-[15rem] font-serif text-base italic leading-snug text-maroon-dark/70">
              {EVENT.groom.parents}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
