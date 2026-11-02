import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionDivider from './SectionDivider';

import sofaImg from '../assets/couple-sofa.jpg';
import foreheadImg from '../assets/couple-forehead.jpg';
import ringsImg from '../assets/couple-rings.jpg';
import bridePortrait from '../assets/anshika-portrait.jpg';
import brideLehenga from '../assets/bride-silver-lehenga.jpg';
import groomPortrait from '../assets/prashant-portrait.jpg';
import haldiImg from '../assets/event-haldi.jpg';
import mehndiImg from '../assets/event-mehndi.jpg';
import sangeetImg from '../assets/event-sangeet.jpg';

const galleryItems = [
  {
    title: 'Anshika & Prashant',
    src: sofaImg,
    span: 'row-span-2',
    position: 'object-[center_28%]',
  },
  {
    title: 'Bride Anshika',
    src: bridePortrait,
    span: '',
    position: 'object-center',
  },
  {
    title: 'Groom Prashant',
    src: groomPortrait,
    span: '',
    position: 'object-center',
  },
  {
    title: 'Haldi Ceremony',
    src: haldiImg,
    span: 'sm:col-span-2',
    position: 'object-center',
  },
  {
    title: 'Mehndi ki Raat',
    src: mehndiImg,
    span: '',
    position: 'object-center',
  },
  {
    title: 'Sangeet Sandhya',
    src: sangeetImg,
    span: '',
    position: 'object-center',
  },
  {
    title: 'Bridal Grace',
    src: brideLehenga,
    span: '',
    position: 'object-[center_20%]',
  },
  {
    title: 'Ring Ceremony',
    src: ringsImg,
    span: 'sm:col-span-2',
    position: 'object-center',
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-maroon-deep py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,161,74,0.15),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 z-10">
        <div className="flex flex-col items-center gap-3 mb-4">
          <SectionDivider label="Cherished Moments" light />
        </div>

        <div>
          <h2 className="text-center font-heading text-3xl font-semibold text-cream sm:text-5xl">
            Our <span className="text-gold-shimmer">Gallery</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center font-serif text-lg text-cream/70">
            A few frames from our journey — with many more memories waiting to be made, together with you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedPhoto(item.src)}
              className={`group relative overflow-hidden rounded-xl border border-gold/20 cursor-pointer ${item.span}`}
            >
              <img
                alt={item.title}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.position}`}
                src={item.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <span className="absolute bottom-3 left-3 font-display text-xs tracking-wider text-cream/90 opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-pointer"
          >
            <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-gold/40 bg-maroon-deep">
              <img
                src={selectedPhoto}
                alt="Full size view"
                className="max-h-[85vh] w-auto object-contain mx-auto"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-maroon-deep/90 border border-gold-light text-gold-pale hover:scale-110 transition-transform cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
