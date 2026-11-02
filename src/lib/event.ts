export interface WeddingEvent {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  city: string;
  description: string;
  image: string;
  accent: string;
}

export const EVENT = {
  invocation: '॥ श्री गणेशाय नमः ॥',
  blessing:
    'With the divine blessings of the Almighty and our beloved elders, we request the honour of your presence as we begin our forever.',

  // Bride Details (Bride side card: Bride name first & above)
  bride: {
    name: 'Anshika',
    fullName: 'Anshika Singh Gaur',
    role: 'The Bride',
    parents: 'Daughter of Mrs. Gudiya Singh Gaur & Late Mr. Vijay Singh Gaur',
  },

  // Groom Details
  groom: {
    name: 'Prashant',
    fullName: 'Prashant Singh Chauhan',
    role: 'The Groom',
    parents: 'Son of Mrs. Manoj Singh Chauhan & Mr. Sunil Kumar Singh Chauhan',
  },

  brideName: 'Anshika',
  brideFull: 'Anshika Singh Gaur',
  groomName: 'Prashant',
  groomFull: 'Prashant Singh Chauhan',

  weddingDateISO: '2026-11-23T18:00:00',
  date: new Date('2026-11-23T18:00:00'),
  weddingDateLong: 'Monday, 23rd November 2026',
  dateLabel: 'Monday, 23 November',
  yearLabel: '2026',
  time: '6:00 PM onwards',

  venueName: 'Mankameshwar Palace',
  venueHall: 'Vaishno Devi Mandir Road',
  venueAddress: 'Damodar Nagar, Kanpur, Uttar Pradesh',
  venueCity: 'Kanpur, Uttar Pradesh',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Mankameshwar+Palace+Vaishno+Devi+Mandir+Road+Damodar+Nagar+Kanpur',

  rsvpDeadline: '15th November 2026',
  hashtag: '#Pranshika',
  rsvpWhatsappNumber: '916307624939',
  rsvpDisplayPhone: '+91 63076 24939',
  rsvpContactName: 'Gaur Family',

  // Program / Celebrations
  itinerary: [
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      hindiName: 'हल्दी की रस्म',
      tagline: 'A golden glow of love, turmeric & heartfelt blessings',
      day: 'Sunday',
      date: '22nd November 2026',
      time: '9:00 AM onwards',
      venue: 'Mankameshwar Palace',
      city: 'Kanpur, Uttar Pradesh',
      description:
        'Commencing the auspicious wedding celebrations with fragrant haldi paste, yellow marigolds, and warm family blessings.',
      accent: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'mehendi',
      name: 'Mehndi ki Raat',
      hindiName: 'मेहंदी उत्सव',
      tagline: 'Hands painted with love, laughter & sacred henna',
      day: 'Sunday',
      date: '22nd November 2026',
      time: '4:00 PM onwards',
      venue: 'Mankameshwar Palace',
      city: 'Kanpur, Uttar Pradesh',
      description:
        'Adorning the radiant bride with delicate traditional henna patterns accompanied by folk rhythms and joyous festivities.',
      accent: 'from-rose-400 to-pink-500',
    },
    {
      id: 'sangeet',
      name: 'Sangeet Sandhya',
      hindiName: 'संगीत संध्या',
      tagline: 'An enchanting evening of music, dance & celebration',
      day: 'Sunday',
      date: '22nd November 2026',
      time: '6:00 PM onwards',
      venue: 'Mankameshwar Palace',
      city: 'Kanpur, Uttar Pradesh',
      description:
        'A magical night of sparkling dance performances, melodies, laughter, and high-energy celebration with loved ones.',
      accent: 'from-fuchsia-500 to-purple-600',
    },
    {
      id: 'barat-phere',
      name: 'Baraat & Pheras',
      hindiName: 'बारात एवं फेरे (शुभ विवाह)',
      tagline: 'The sacred vows — two souls, one eternal journey',
      day: 'Monday',
      date: '23rd November 2026',
      time: '6:00 PM onwards',
      venue: 'Mankameshwar Palace',
      city: 'Kanpur, Uttar Pradesh',
      description:
        'Swagat of the Baraat followed by sacred Vedic mantras and seven auspicious pheras around the holy fire to unite Anshika & Prashant.',
      accent: 'from-[#5b0e2d] to-[#c2185b]',
    },
  ],

  // Family details
  rsvpContacts: ['Gaur Family & Relatives', 'Chauhan Family & Well-Wishers'],
  withBestCompliments: [
    'Mrs. Gudiya Singh Gaur & Family',
    'Near & Dear Relatives, Friends & Well-Wishers',
  ],
};
