import { MapPin, ChevronDown } from 'lucide-react';
import SectionDivider from './SectionDivider';
import Countdown from './Countdown';
import { EVENT } from '../lib/event';
import coupleMain from '../assets/couple-sofa.jpg';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-maroon-deep px-4 py-12 sm:px-6 sm:py-16 md:py-20 text-center select-none">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top opacity-20"
          src={coupleMain}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/95 via-maroon-deep/80 to-maroon-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,161,74,0.22),transparent_65%)]" />
      </div>

      {/* Top Invocation */}
      <div className="relative z-10">
        <span className="font-serif text-xs sm:text-sm font-semibold tracking-[0.35em] text-gold-pale uppercase drop-shadow-md">
          {EVENT.invocation}
        </span>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 my-auto flex w-full max-w-3xl flex-col items-center px-2 py-4">
        <span className="font-display text-[0.7rem] sm:text-xs tracking-[0.45em] uppercase text-cream/80 drop-shadow-sm">
          The Wedding of
        </span>

        {/* Bride Name Above / First */}
        <h1 className="mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 font-script leading-tight">
          <span className="text-5xl sm:text-7xl md:text-8xl text-gold-pale drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(230,199,122,0.4)]">
            {EVENT.bride.name}
          </span>
          <span className="font-display text-sm sm:text-xl tracking-[0.35em] uppercase text-gold-light/80 font-normal self-center">
            weds
          </span>
          <span className="text-5xl sm:text-7xl md:text-8xl text-gold-pale drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_25px_rgba(230,199,122,0.4)]">
            {EVENT.groom.name}
          </span>
        </h1>

        {/* Divider & Details */}
        <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2 sm:gap-2.5">
          <SectionDivider />
          <p className="font-display text-base sm:text-xl font-medium tracking-wide text-ivory drop-shadow-sm">
            {EVENT.weddingDateLong}
          </p>
          <p className="flex items-center justify-center gap-1.5 font-serif text-sm sm:text-base text-cream/80 drop-shadow-xs">
            <MapPin className="h-4 w-4 text-gold-light shrink-0" />
            <span>{EVENT.venueName}, {EVENT.venueCity}</span>
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-5 sm:mt-7 w-full flex justify-center">
          <Countdown tone="dark" />
        </div>

        {/* Hashtag */}
        <p className="mt-4 sm:mt-5 font-script text-2xl sm:text-3xl text-gold-light drop-shadow-sm">
          {EVENT.hashtag}
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#invitation"
        className="relative z-10 flex flex-col items-center gap-1 text-gold-light/70 transition hover:text-gold-light"
      >
        <span className="font-display text-[0.65rem] tracking-[0.3em] uppercase">
          Scroll to unfold
        </span>
        <ChevronDown className="h-4 w-4 animate-bob" />
      </a>
    </section>
  );
}
