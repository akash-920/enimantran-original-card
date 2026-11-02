import { MapPin, ExternalLink, CalendarHeart } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { EVENT } from '../lib/event';

export default function VenueSection() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-7 text-center">
          <SectionDivider label="The Venue" />
          <h2 className="font-heading text-3xl font-semibold text-maroon sm:text-5xl">
            Find Your <span className="text-gold-shimmer">Way</span>
          </h2>
        </div>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
          {/* Details */}
          <div className="flex flex-col justify-center gap-5">
            <div>
              <h3 className="font-heading text-2xl text-maroon">
                {EVENT.venueName}
              </h3>
              <p className="font-serif text-lg italic text-rose/80">
                {EVENT.venueHall}
              </p>
              <p className="mt-2 flex items-start gap-2 font-serif text-maroon-dark/75">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-dark" />
                {EVENT.venueAddress}
              </p>
            </div>

            <div className="rounded-xl border border-gold/30 bg-ivory p-4">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-maroon/55">
                Baraat &amp; Pheras
              </p>
              <p className="font-serif text-lg text-maroon-dark">
                {EVENT.weddingDateLong}
              </p>
              <p className="font-serif text-maroon-dark/70">
                {EVENT.time}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={EVENT.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon to-rose px-6 py-3 font-display text-xs tracking-[0.2em] uppercase text-cream shadow-lg transition hover:scale-[1.03]"
              >
                <ExternalLink className="h-4 w-4" />
                Get Directions
              </a>

              <a
                href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  EVENT.bride.name + ' & ' + EVENT.groom.name + "'s Wedding"
                )}&dates=20261123T123000Z/20261123T200000Z&details=${encodeURIComponent(
                  EVENT.venueName + ', ' + EVENT.venueAddress
                )}&location=${encodeURIComponent(EVENT.venueName + ', ' + EVENT.venueAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-ivory px-6 py-3 font-display text-xs tracking-[0.2em] uppercase text-maroon transition hover:bg-gold/10"
              >
                <CalendarHeart className="h-4 w-4" />
                Add to Calendar
              </a>
            </div>
          </div>

          {/* Map Embed Frame */}
          <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-xl">
            <iframe
              title="Venue location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9809948975258!2d80.30777507399823!3d26.42408988092086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47b1f1ab56cf%3A0x76126923e142da4a!2sMankameshwar%20Palace%20by%20Malhotra%20Events!5e0!3m2!1sen!2sin!4v1789333164524!5m2!1sen!2sin"
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
