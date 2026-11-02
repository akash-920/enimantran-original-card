import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { EVENT } from '../lib/event';

export default function CurtainOpener({
  onOpen,
  onStartOpen,
}: {
  onOpen: () => void;
  onStartOpen?: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const [removed, setRemoved] = useState(false);

  const handleOpen = () => {
    if (opening || removed) return;
    setOpening(true);
    onStartOpen?.();
    window.setTimeout(() => {
      setRemoved(true);
      onOpen();
    }, 1900);
  };

  if (removed) return null;

  return (
    <div
      onClick={handleOpen}
      className={`fixed inset-0 z-50 overflow-hidden select-none cursor-pointer ${
        opening ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Background shadow & subtle radial glow that fades out when opening so the real card shows */}
      <motion.div
        className="absolute inset-0 bg-maroon-deep/90"
        initial={{ opacity: 1 }}
        animate={opening ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(201,161,74,0.22),transparent_55%)]"
        initial={{ opacity: 1 }}
        animate={opening ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Left Royal Velvet Curtain */}
      <motion.div
        className="curtain-fabric absolute inset-y-0 left-0 w-1/2 z-20 shadow-[15px_0_35px_rgba(0,0,0,0.85)]"
        initial={{ x: 0 }}
        animate={opening ? { x: '-102%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.7, 0, 0.3, 1] }}
      >
        <div className="absolute right-0 inset-y-0 w-2.5 bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-md" />
        <div className="absolute right-[-3px] inset-y-0 w-6 bg-gold-light/30 blur-md" />
        {/* Decorative Golden Tassels */}
        <div className="absolute right-0 top-0 h-full w-px">
          {Array.from({ length: 9 }).map((_, p) => (
            <span
              key={p}
              className="absolute right-1 h-8 w-1.5 rounded-b-full bg-gradient-to-b from-gold to-gold-dark shadow-xs"
              style={{ top: `${(p + 0.5) * 11}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Royal Velvet Curtain */}
      <motion.div
        className="curtain-fabric absolute inset-y-0 right-0 w-1/2 z-20 shadow-[-15px_0_35px_rgba(0,0,0,0.85)]"
        initial={{ x: 0 }}
        animate={opening ? { x: '102%' } : { x: 0 }}
        transition={{ duration: 1.8, ease: [0.7, 0, 0.3, 1] }}
      >
        <div className="absolute left-0 inset-y-0 w-2.5 bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-md" />
        <div className="absolute left-[-3px] inset-y-0 w-6 bg-gold-light/30 blur-md" />
        {/* Decorative Golden Tassels */}
        <div className="absolute left-0 top-0 h-full w-px">
          {Array.from({ length: 9 }).map((_, p) => (
            <span
              key={p}
              className="absolute left-1 h-8 w-1.5 rounded-b-full bg-gradient-to-b from-gold to-gold-dark shadow-xs"
              style={{ top: `${(p + 0.5) * 11}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Center Invitation Card */}
      <AnimatePresence>
        {!opening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.4 } }}
            className="group absolute inset-0 z-30 flex flex-col items-center justify-center px-4 sm:px-6 text-center"
          >
            <div className="relative mx-auto flex w-full max-w-[22rem] sm:max-w-md flex-col items-center rounded-3xl border border-gold/50 bg-maroon-deep/95 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(201,161,74,0.25)] ring-1 ring-gold-light/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="pointer-events-none absolute top-3 left-3 h-4 w-4 rounded-tl-xs border-t-2 border-l-2 border-gold-light/70" />
              <div className="pointer-events-none absolute top-3 right-3 h-4 w-4 rounded-tr-xs border-t-2 border-r-2 border-gold-light/70" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 rounded-bl-xs border-b-2 border-l-2 border-gold-light/70" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 rounded-br-xs border-b-2 border-r-2 border-gold-light/70" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(125,26,69,0.35)_0%,transparent_70%)]" />

              <span className="relative font-serif text-xs sm:text-sm font-semibold tracking-[0.35em] text-gold-pale uppercase drop-shadow-md">
                {EVENT.invocation}
              </span>

              <span className="relative mt-4 sm:mt-5 font-display text-[0.7rem] sm:text-xs tracking-[0.45em] uppercase text-cream/80 drop-shadow-sm">
                The Wedding of
              </span>

              {/* Bride Name Above / First */}
              <h1 className="relative mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-0.5 font-script leading-tight">
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

              <div className="relative mt-4 sm:mt-5 flex items-center gap-3 text-gold-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-gold-light/80 to-gold-light/30" />
                <Heart className="h-4 w-4 fill-gold-light/30 text-gold-pale" />
                <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-gold-light/80 to-gold-light/30" />
              </div>

              <p className="relative mt-3 sm:mt-4 font-display text-base sm:text-xl font-medium tracking-wide text-ivory drop-shadow-sm">
                {EVENT.weddingDateLong}
              </p>

              <button
                type="button"
                className="relative mt-6 sm:mt-7 inline-flex items-center gap-2.5 rounded-full border border-gold-light/80 bg-gradient-to-r from-gold/30 via-gold-light/25 to-gold/30 px-8 py-3 font-display text-xs sm:text-sm font-semibold tracking-[0.25em] text-ivory uppercase shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(201,161,74,0.3)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-gold-pale group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-gold-light group-hover:text-maroon-deep group-hover:shadow-[0_0_35px_rgba(230,199,122,0.8)]"
              >
                <Sparkles className="h-4 w-4" />
                Tap to Open
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
