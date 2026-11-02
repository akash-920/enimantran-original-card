import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Petals from './Petals';
import { EVENT } from '../lib/event';

import haldiImg from '../assets/event-haldi-mehndi.jpg';
import mehendiImg from '../assets/anshika-lehenga.jpg';
import sangeetImg from '../assets/couple-forehead.jpg';
import weddingImg from '../assets/couple-sofa.jpg';
import ringsImg from '../assets/couple-rings.jpg';

const eventImages: Record<string, { img: string; position: string }> = {
  'haldi': {
    img: haldiImg,
    position: 'object-center',
  },
  'mehendi': {
    img: mehendiImg,
    position: 'object-[center_15%]',
  },
  'sangeet': {
    img: sangeetImg,
    position: 'object-[center_20%]',
  },
  'barat-phere': {
    img: weddingImg,
    position: 'object-[center_25%]',
  },
};

export default function OurStory() {
  return (
    <section id="events" className="relative py-24 px-4 bg-cream overflow-hidden">
      <Petals count={14} tone="light" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading eyebrow="Auspicious Celebrations" title="Wedding Programme" />

        {/* 4 Programme Cards in responsive grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT.itinerary.map((item, index) => {
            const media = eventImages[item.id] || { img: weddingImg, position: 'object-center' };
            const isMain = item.id === 'barat-phere';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className={`flex flex-col bg-white/95 rounded-2xl overflow-hidden border ${
                  isMain ? 'border-gold-500 shadow-xl ring-2 ring-gold-400/40' : 'border-gold-300/50 shadow-lg'
                } hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5`}
              >
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-cream-dark">
                  <img
                    src={media.img}
                    alt={item.name}
                    className={`w-full h-full object-cover ${media.position} transition-transform duration-700 group-hover:scale-108`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
                  <span className={`absolute bottom-3 left-3 ${
                    isMain ? 'bg-rose-700 text-cream border-gold-400' : 'bg-cream/95 text-rose-800 border-gold-400/50'
                  } backdrop-blur-xs border text-xs font-serif uppercase tracking-widest px-3 py-1 rounded-full font-bold shadow-sm`}>
                    {item.day}
                  </span>
                  {isMain && (
                    <span className="absolute top-3 right-3 bg-gold-400 text-rose-950 text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow">
                      Main Event
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {item.hindiName && (
                    <span className="font-serif text-gold-600 text-xs sm:text-sm font-semibold tracking-wide">
                      {item.hindiName}
                    </span>
                  )}
                  <h3 className="font-display text-xl sm:text-2xl text-rose-800 mt-1 mb-3 leading-snug">
                    {item.name}
                  </h3>

                  <div className="flex flex-col gap-2 font-body text-xs sm:text-sm text-ink/75 mb-4">
                    <div className="flex items-center gap-2 text-rose-700 font-semibold">
                      <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink/75">
                      <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink/75">
                      <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="line-clamp-1">{EVENT.venueName}</span>
                    </div>
                  </div>

                  <p className="font-body text-ink/70 text-xs sm:text-sm leading-relaxed mt-auto pt-3 border-t border-gold-300/30">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Ring Ceremony Quote Banner with Real Rings Photo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-950 text-cream rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-400/40 grid md:grid-cols-[1.2fr_auto_1fr] items-center gap-8"
        >
          <div className="flex flex-col gap-3 text-left">
            <span className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" /> Two Souls, One Promise
            </span>
            <h3 className="font-script text-4xl sm:text-5xl text-cream leading-tight">
              Together is a beautiful place to be
            </h3>
            <p className="font-body text-cream/80 text-base sm:text-lg italic leading-relaxed">
              "Same souls, different bodies, forever connected. As we step into this divine bond of marriage, we seek your heartfelt love and blessings."
            </p>
          </div>

          <div className="hidden md:block w-px h-32 bg-gold-400/30" />

          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-300/60 shadow-xl max-w-[280px]">
              <img
                src={ringsImg}
                alt="Anshika and Prashant holding hands with engagement rings"
                className="w-full h-44 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <p className="text-gold-200 text-xs font-serif tracking-widest uppercase">
                  Engagement &amp; Ring Ceremony
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
