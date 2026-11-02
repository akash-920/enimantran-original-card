import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Mail, MessageCircleHeart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Petals from './Petals';
import { EVENT } from '../lib/event';

// Official WhatsApp Icon SVG
function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

type Attendance = 'yes' | 'no' | '';

interface FormState {
  name: string;
  email: string;
  guests: string;
  attendance: Attendance;
  message: string;
}

const initialState: FormState = { name: '', email: '', guests: '1', attendance: '', message: '' };

export default function RSVP() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const getWhatsAppUrl = (data: FormState) => {
    const attendanceText = data.attendance === 'yes' ? 'Joyfully Yes' : 'Regretfully No';
    const messageLines = [
      `*Wedding RSVP - ${EVENT.brideName} & ${EVENT.groomName}*`,
      '',
      `*Name:* ${data.name.trim()}`,
      `*Email:* ${data.email.trim()}`,
      `*Attending:* ${attendanceText}`,
      ...(data.attendance === 'yes' ? [`*Number of Guests:* ${data.guests}`] : []),
      ...(data.message.trim() ? [`*Wishes:* ${data.message.trim()}`] : []),
    ];
    return `https://wa.me/${EVENT.rsvpWhatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;
  };

  const directWhatsAppUrl = `https://wa.me/${EVENT.rsvpWhatsappNumber}?text=${encodeURIComponent(
    `Hello Anshika & Prashant! I received your wedding invitation and would like to RSVP.`
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.attendance) {
      setError('Please fill in your name, email, and let us know if you can make it.');
      return;
    }
    setError('');
    try {
      const existing = JSON.parse(localStorage.getItem('rsvps') || '[]');
      existing.push({ ...form, ts: Date.now() });
      localStorage.setItem('rsvps', JSON.stringify(existing));
    } catch {
      /* ignore */
    }

    const whatsappUrl = getWhatsAppUrl(form);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-24 px-4 bg-rose-800 overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-blush-200/10 blur-3xl pointer-events-none" />
      <Petals count={14} tone="dark" />

      <div className="relative max-w-4xl mx-auto z-10">
        <SectionHeading eyebrow="Kindly Respond" title="RSVP &amp; Blessings" light />
        <p className="text-center font-body text-cream/80 -mt-6 mb-10 max-w-md mx-auto text-base sm:text-lg">
          Your warm presence and blessings are our greatest joy. Please let us know if you'll be joining our celebration by{' '}
          <span className="text-gold-300 font-semibold">{EVENT.rsvpDeadline}</span>.
        </p>

        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-cream/95 rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col gap-5 border border-gold-400/30"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-rose-600 font-body font-semibold">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Guest Name"
                    className="border-b border-gold-400/50 bg-transparent py-2 font-body text-ink focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-rose-600 font-body font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="guest@example.com"
                    className="border-b border-gold-400/50 bg-transparent py-2 font-body text-ink focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-rose-600 font-body font-semibold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Number of Guests
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="border-b border-gold-400/50 bg-transparent py-2 font-body text-ink focus:outline-none focus:border-rose-500 transition-colors cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n} className="bg-cream">
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-rose-600 font-body font-semibold">
                      Attending?
                    </label>
                    <div className="flex gap-2 pt-1">
                      {(['yes', 'no'] as Attendance[]).map((val) => (
                        <button
                          type="button"
                          key={val}
                          onClick={() => setForm({ ...form, attendance: val })}
                          className={`flex-1 rounded-full py-2 text-xs sm:text-sm font-body border transition-colors ${
                            form.attendance === val
                              ? 'bg-rose-700 text-cream border-rose-700 font-semibold shadow-sm'
                              : 'border-gold-400/50 text-ink/70 hover:border-rose-400'
                          }`}
                        >
                          {val === 'yes' ? 'Joyfully Yes' : 'Regretfully No'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-rose-600 font-body font-semibold flex items-center gap-1.5">
                    <MessageCircleHeart className="w-3.5 h-3.5" /> Best Wishes for {EVENT.brideName} &amp; {EVENT.groomName}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="Write your blessings for the couple..."
                    className="border border-gold-400/40 rounded-xl bg-transparent p-3 font-body text-ink focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-rose-600 text-sm font-body">{error}</p>}

                {/* Submit button with WhatsApp Icon and Green brand color */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] text-white font-body tracking-wider uppercase text-sm hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl font-bold cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Send RSVP via WhatsApp</span>
                </button>

                <div className="text-center mt-1">
                  <p className="text-xs text-ink/60 font-body">
                    Your RSVP message will be sent to WhatsApp:{' '}
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      {EVENT.rsvpDisplayPhone}
                    </a>
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cream/95 rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-4 border border-gold-400/30"
              >
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-8 h-8 text-white fill-white" />
                </div>
                <h3 className="font-display text-2xl text-rose-800">
                  {form.attendance === 'yes' ? "Thank You, We Can't Wait!" : 'Thank You for Letting Us Know'}
                </h3>
                <p className="font-body text-ink/75">
                  {form.attendance === 'yes'
                    ? `We are delighted to celebrate with you on ${EVENT.dateLabel} at ${EVENT.venueName}!`
                    : `We will miss you, but we truly appreciate your warm wishes and blessings.`}
                </p>

                <div className="w-full pt-2 flex flex-col items-center gap-2">
                  <a
                    href={getWhatsAppUrl(form)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-body tracking-wide hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg text-sm sm:text-base font-semibold"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    Open WhatsApp ({EVENT.rsvpDisplayPhone})
                  </a>
                </div>

                <button
                  onClick={() => {
                    setForm(initialState);
                    setSubmitted(false);
                  }}
                  className="mt-2 text-sm text-rose-600 underline font-body hover:text-rose-800"
                >
                  Submit another response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct WhatsApp Quick Chat Card */}
        <div className="mt-8 flex justify-center">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-gold-400/40 text-cream transition-all shadow-md group"
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </div>
            <div className="text-left font-body">
              <span className="text-xs uppercase tracking-wider text-gold-300 block">
                Have questions? Message on WhatsApp
              </span>
              <span className="font-semibold text-sm sm:text-base text-cream">
                {EVENT.rsvpDisplayPhone}
              </span>
            </div>
          </a>
        </div>

        {/* Family RSVP & Compliments Sections from Handwritten Card */}
        <div className="mt-16 grid sm:grid-cols-2 gap-8 text-cream">
          {/* RSVP Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-rose-900/60 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-gold-400/30 text-center"
          >
            <span className="font-script text-3xl text-gold-300">R. S. V. P.</span>
            <div className="divider-line my-3 max-w-[120px] mx-auto" />
            <div className="flex flex-col gap-2 mt-4 font-body text-cream/90 text-sm sm:text-base">
              {EVENT.rsvpContacts.map((contact, i) => (
                <p key={i} className="hover:text-gold-200 transition-colors">
                  {contact}
                </p>
              ))}
            </div>
          </motion.div>

          {/* With Best Compliments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-rose-900/60 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-gold-400/30 text-center"
          >
            <span className="font-script text-3xl text-gold-300">With Best Compliments</span>
            <div className="divider-line my-3 max-w-[160px] mx-auto" />
            <div className="flex flex-col gap-2 mt-4 font-body text-cream/90 text-sm sm:text-base">
              {EVENT.withBestCompliments.map((comp, i) => (
                <p key={i} className="hover:text-gold-200 transition-colors">
                  {comp}
                </p>
              ))}
              <p className="italic text-gold-300/80 text-xs sm:text-sm mt-2">
                All Relatives &amp; Friends
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
