import { useState, FormEvent } from 'react';
import { Send, MessageCircle, Phone, Minus, Plus } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { EVENT } from '../lib/event';

export default function RSVPSection() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no' | 'maybe'>('yes');
  const [guests, setGuests] = useState(1);
  const [note, setNote] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const attendanceLabel =
      attendance === 'yes'
        ? 'Joyfully Accept'
        : attendance === 'no'
        ? 'Regretfully Decline'
        : 'Not Sure Yet';

    const lines = [
      `*Wedding RSVP — ${EVENT.bride.name} & ${EVENT.groom.name}*`,
      '',
      `*Name:* ${name.trim()}`,
      `*Attendance:* ${attendanceLabel}`,
      ...(attendance === 'yes' ? [`*Number of Guests:* ${guests}`] : []),
      ...(note.trim() ? [`*Message:* ${note.trim()}`] : []),
    ];

    const waUrl = `https://wa.me/${EVENT.rsvpWhatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = `https://wa.me/${EVENT.rsvpWhatsappNumber}?text=${encodeURIComponent(
    `Hello Anshika & Prashant! I would love to RSVP for your wedding.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-maroon py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,161,74,0.2),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center z-10">
        <div className="flex flex-col items-center gap-5">
          <SectionDivider label="RSVP" light />
          <h2 className="font-heading text-3xl font-semibold text-cream sm:text-5xl">
            Will You <span className="text-gold-shimmer">Join Us?</span>
          </h2>
          <p className="max-w-xl font-serif text-lg text-cream/70">
            Your presence is the greatest blessing we could ask for. Kindly let us know if you'll be celebrating with us.
          </p>
        </div>

        <div className="mt-2 w-full">
          <div className="mx-auto w-full max-w-xl rounded-2xl border border-gold/40 bg-ivory/95 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur sm:p-8 text-left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block font-display text-xs tracking-[0.2em] uppercase text-maroon/70">
                  Your Name
                </label>
                <input
                  required
                  placeholder="e.g. Priya & Family"
                  className="w-full rounded-lg border border-gold/40 bg-white/70 px-4 py-3 font-serif text-lg text-maroon-dark outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-1.5 block font-display text-xs tracking-[0.2em] uppercase text-maroon/70">
                  Will you be joining us?
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('yes')}
                    className={`rounded-lg border px-3 py-2.5 font-serif text-sm transition cursor-pointer ${
                      attendance === 'yes'
                        ? 'border-gold bg-gold/15 text-maroon font-semibold'
                        : 'border-gold/30 bg-white/50 text-maroon/70 hover:border-gold/60'
                    }`}
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('no')}
                    className={`rounded-lg border px-3 py-2.5 font-serif text-sm transition cursor-pointer ${
                      attendance === 'no'
                        ? 'border-gold bg-gold/15 text-maroon font-semibold'
                        : 'border-gold/30 bg-white/50 text-maroon/70 hover:border-gold/60'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('maybe')}
                    className={`rounded-lg border px-3 py-2.5 font-serif text-sm transition cursor-pointer ${
                      attendance === 'maybe'
                        ? 'border-gold bg-gold/15 text-maroon font-semibold'
                        : 'border-gold/30 bg-white/50 text-maroon/70 hover:border-gold/60'
                    }`}
                  >
                    Not Sure Yet
                  </button>
                </div>
              </div>

              {attendance === 'yes' && (
                <div>
                  <label className="mb-1.5 block font-display text-xs tracking-[0.2em] uppercase text-maroon/70">
                    Number of Guests
                  </label>
                  <div className="flex w-fit items-center gap-3 rounded-lg border border-gold/40 bg-white/70 px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-maroon transition hover:bg-gold/15 cursor-pointer"
                      aria-label="Decrease"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-heading text-xl text-maroon">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(10, g + 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-maroon transition hover:bg-gold/15 cursor-pointer"
                      aria-label="Increase"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="mb-1.5 block font-display text-xs tracking-[0.2em] uppercase text-maroon/70">
                  A note for the couple (optional)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Send your blessings & wishes..."
                  className="w-full resize-none rounded-lg border border-gold/40 bg-white/70 px-4 py-3 font-serif text-lg text-maroon-dark outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-rose px-8 py-3.5 font-display text-sm tracking-[0.2em] uppercase text-cream shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(194,24,91,0.6)] cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Send RSVP
              </button>

              <p className="text-center font-serif text-sm text-maroon/50">
                Kindly respond by {EVENT.rsvpDeadline}
              </p>
            </form>
          </div>
        </div>

        {/* Quick Contact Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 px-5 py-2.5 font-display text-xs tracking-[0.2em] uppercase text-gold-light transition hover:bg-gold-light/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Gaur Family
          </a>

          <a
            href={`tel:${EVENT.rsvpWhatsappNumber}`}
            className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 px-5 py-2.5 font-display text-xs tracking-[0.2em] uppercase text-gold-light transition hover:bg-gold-light/10"
          >
            <Phone className="h-4 w-4" />
            {EVENT.rsvpDisplayPhone}
          </a>
        </div>
      </div>
    </section>
  );
}
