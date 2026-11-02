import { Calendar, Clock, MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { EVENT } from '../lib/event';

import haldiImg from '../assets/event-haldi.jpg';
import mehendiImg from '../assets/event-mehndi.jpg';
import sangeetImg from '../assets/event-sangeet.jpg';
import weddingImg from '../assets/couple-sofa.jpg';
import vidaiImg from '../assets/bride-silver-lehenga.jpg';

const celebrations = [
  {
    id: '01',
    name: 'Haldi Ceremony',
    tagline: 'A golden glow for the bride & groom to be',
    date: 'Sunday, 22nd November 2026',
    time: '9:00 AM onwards',
    venue: 'At Home',
    image: haldiImg,
    gradient: 'from-amber-300 to-yellow-500',
    reverse: false,
  },
  {
    id: '02',
    name: 'Mehndi ki Raat',
    tagline: 'Hands painted with love, laughter & sacred henna',
    date: 'Sunday, 22nd November 2026',
    time: '4:00 PM onwards',
    venue: 'At Home',
    image: mehendiImg,
    gradient: 'from-rose-400 to-pink-500',
    reverse: true,
  },
  {
    id: '03',
    name: 'Sangeet Sandhya',
    tagline: 'An evening of music, dance & celebration',
    date: 'Sunday, 22nd November 2026',
    time: '6:00 PM onwards',
    venue: 'At Home',
    image: sangeetImg,
    gradient: 'from-fuchsia-500 to-purple-600',
    reverse: false,
  },
  {
    id: '04',
    name: 'Baraat & Pheras',
    tagline: 'The sacred vows — two souls, one eternal journey',
    date: 'Monday, 23rd November 2026',
    time: '6:00 PM onwards',
    venue: 'Mankameshwar Palace, Kanpur, Uttar Pradesh',
    image: weddingImg,
    gradient: 'from-maroon to-rose',
    reverse: true,
  },
  {
    id: '05',
    name: 'Kanya Prasthan (Vidai)',
    tagline: 'With love, blessings, and fond farewells.',
    date: 'Tuesday, 24th November 2026',
    time: '8:00 AM onwards',
    venue: 'Mankameshwar Palace, Kanpur, Uttar Pradesh',
    image: vidaiImg,
    gradient: 'from-rose-500 to-amber-500',
    reverse: false,
  },
];

export default function Itinerary() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-7 text-center">
          <SectionDivider label="The Celebrations" />
          <h2 className="font-heading text-3xl font-semibold text-maroon sm:text-5xl">
            Wedding <span className="text-gold-shimmer">Itinerary</span>
          </h2>
          <p className="max-w-xl font-serif text-lg text-maroon-dark/70">
            Five beautiful moments woven into one celebration — we'd be honoured to have you at any, or all of them.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {celebrations.map((ev) => (
            <div
              key={ev.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-[0_20px_60px_-30px_rgba(91,14,45,0.4)] md:flex-row ${
                ev.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Media Image */}
              <div className="relative h-56 overflow-hidden md:h-auto md:w-2/5">
                <img
                  alt={ev.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  src={ev.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-maroon/20 to-transparent md:bg-gradient-to-r" />
                <div className={`absolute inset-0 bg-gradient-to-t ${ev.gradient} opacity-10`} />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-light/60 bg-maroon-deep/70 font-heading text-lg text-gold-light backdrop-blur-sm">
                  {ev.id}
                </span>
              </div>

              {/* Text Information */}
              <div className="flex flex-1 flex-col justify-center gap-3 p-6 sm:p-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-maroon sm:text-3xl">
                    {ev.name}
                  </h3>
                  <p className="mt-1 font-serif text-lg italic text-rose/80">
                    {ev.tagline}
                  </p>
                </div>

                <div className="mt-1 flex flex-col gap-2 font-serif text-[1.05rem] text-maroon-dark/80">
                  <p className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 shrink-0 text-gold-dark" />
                    <span>{ev.date}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-gold-dark" />
                    <span>{ev.time}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-gold-dark" />
                    <span>{ev.venue}</span>
                  </p>
                </div>
              </div>

              {/* Corner floral filigree */}
              <div className="pointer-events-none absolute right-3 top-3 h-12 w-12 opacity-[0.15]">
                <img alt="" aria-hidden="true" src="/images/floral-corner.png" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
