import SectionDivider from './SectionDivider';
import { EVENT } from '../lib/event';

export default function InvitationSection() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-maroon-deep to-cream" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <div>
          <span className="font-serif text-sm tracking-[0.35em] text-gold-dark">
            {EVENT.invocation}
          </span>
        </div>
        <div>
          <SectionDivider label="The Invitation" />
        </div>
        <div>
          <p className="max-w-2xl font-serif text-2xl leading-relaxed text-maroon-dark/85 sm:text-3xl">
            {EVENT.blessing}
          </p>
        </div>
        <div>
          <div className="mt-2">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-maroon/55">
              Together with their families
            </p>
            <p className="mt-4 font-script text-6xl text-maroon sm:text-7xl">
              {EVENT.bride.name} <span className="text-gold">&amp;</span> {EVENT.groom.name}
            </p>
            <p className="mt-4 font-display tracking-[0.2em] text-maroon-dark/70">
              request the honour of your presence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
