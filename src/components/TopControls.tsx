import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Share2, Check } from 'lucide-react';
import { EVENT } from '../lib/event';

export default function TopControls({ autoPlayTrigger }: { autoPlayTrigger?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !playing) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Auto-play was prevented by browser policy, user can tap to play
        });
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${EVENT.brideName} & ${EVENT.groomName} — Wedding Invitation`,
      text: `You are cordially invited to celebrate the wedding of ${EVENT.brideName} & ${EVENT.groomName} on ${EVENT.weddingDateLong} at ${EVENT.venueName}, Kanpur!`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {/* Floating Top Controls */}
      <div className="fixed top-5 right-5 z-40 flex items-center gap-2.5">
        {/* Music Player Button */}
        <button
          type="button"
          onClick={toggleMusic}
          className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold-light/50 bg-maroon-deep/90 text-gold-light shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-maroon cursor-pointer"
          aria-label={playing ? 'Mute music' : 'Play music'}
        >
          {playing ? (
            <>
              <Volume2 className="h-5 w-5 animate-pulse text-gold-pale" />
              <span className="absolute inset-0 rounded-full border border-gold-light/40 animate-ping opacity-25" />
            </>
          ) : (
            <VolumeX className="h-5 w-5 text-gold-light/70" />
          )}
        </button>

        {/* Share Invitation Button */}
        <button
          type="button"
          onClick={handleShare}
          className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold-light/50 bg-maroon-deep/90 text-gold-light shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-maroon cursor-pointer"
          aria-label="Share invitation"
        >
          {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Share2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Copied toast notification */}
      {copied && (
        <div className="fixed top-18 right-5 z-50 rounded-full bg-maroon-deep border border-gold-light/60 px-4 py-1.5 text-xs font-display text-gold-pale shadow-xl animate-fade-in">
          Link copied to clipboard!
        </div>
      )}
    </>
  );
}

