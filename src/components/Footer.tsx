import { Heart, Sparkles } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { EVENT } from '../lib/event';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon-deep py-16 text-center text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,161,74,0.18),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 z-10">
        <p className="font-script text-4xl text-gold-light sm:text-5xl">
          Awaiting your presence
        </p>

        <SectionDivider />

        <p className="font-heading text-3xl text-gold-shimmer sm:text-5xl">
          {EVENT.hashtag}
        </p>

        <p className="max-w-md font-serif text-lg text-cream/70">
          For any queries, please reach out to our family:
          <br />
          <span className="text-cream">Gaur Family &amp; Relatives</span> ·{' '}
          <a
            href={`https://wa.me/${EVENT.rsvpWhatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light hover:underline"
          >
            {EVENT.rsvpDisplayPhone}
          </a>
        </p>

        <div className="mt-4 flex flex-col items-center gap-2.5">
          <span className="flex items-center gap-1.5 font-serif text-xs tracking-wide text-cream/55">
            <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
            Crafted with love
          </span>
        </div>

        <a
          className="mt-2 inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] uppercase text-gold-light/70 transition hover:text-gold-light"
          href="https://devsiy.in"
          target="_blank"
          rel="noreferrer"
        >
          <Sparkles className="h-4 w-4" />
          Get your own premium digital invitation
        </a>
      </div>
    </footer>
  );
}
