import { motion } from 'framer-motion';
import { MapPin, CalendarPlus, Navigation } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Petals from './Petals';
import { EVENT } from '../lib/event';
import { downloadInvite } from '../lib/ics';

export default function Details() {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(EVENT.venueName + ', ' + EVENT.venueAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="details" className="relative bg-cream py-24 px-4 overflow-hidden">
      <Petals count={14} tone="light" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading eyebrow="The Grand Venue" title="Find Your Way" />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-gold-600 font-serif text-sm tracking-widest uppercase font-semibold">
                Main Function Venue
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-rose-800 mt-1 mb-3">
                {EVENT.venueName}
              </h3>
              <p className="flex items-start gap-2 text-ink/75 font-body text-base sm:text-lg">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <span>{EVENT.venueAddress}</span>
              </p>
            </div>

            <div className="bg-white/70 border border-gold-300/50 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-gold-300/30 pb-3">
                <p className="text-gold-600 text-xs tracking-[0.2em] uppercase font-semibold">
                  Wedding Ceremony
                </p>
                <span className="text-xs font-serif text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Main Event
                </span>
              </div>
              <p className="font-display text-2xl text-ink">
                {EVENT.dateLabel}, {EVENT.yearLabel}
              </p>
              <p className="font-body text-ink/70">
                Baraat &amp; Pheras · {EVENT.time} onwards
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={EVENT.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-rose-700 text-cream font-body tracking-wide hover:bg-rose-800 transition-colors shadow-md w-full sm:w-auto font-medium"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
              <button
                onClick={downloadInvite}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gold-400 text-gold-700 font-body tracking-wide hover:bg-gold-50 transition-colors w-full sm:w-auto font-medium"
              >
                <CalendarPlus className="w-4 h-4" /> Add to Calendar
              </button>
            </div>
          </motion.div>

          {/* Right Column: Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[420px]"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Map"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-gold-400/30 rounded-2xl" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 font-body italic text-rose-700/80 text-sm sm:text-base"
        >
          kindly grace the occasion with your blessings and presence · {EVENT.rsvpDeadline}
        </motion.p>
      </div>
    </section>
  );
}
