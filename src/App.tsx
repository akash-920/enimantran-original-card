import { useState } from 'react';
import CurtainOpener from './components/CurtainOpener';
import TopControls from './components/TopControls';
import Hero from './components/Hero';
import InvitationSection from './components/InvitationSection';
import Couple from './components/Couple';
import Itinerary from './components/Itinerary';
import SaveTheDate from './components/SaveTheDate';
import Gallery from './components/Gallery';
import VenueSection from './components/VenueSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-ivory text-maroon-dark overflow-x-hidden selection:bg-gold selection:text-white">
      {/* Royal Curtain Opener */}
      <CurtainOpener
        onOpen={() => setOpened(true)}
        onStartOpen={() => setStarted(true)}
      />

      {/* Floating Audio & Share Controls */}
      <TopControls autoPlayTrigger={started || opened} />

      {/* Main Wedding Invitation Card */}
      <main className="w-full">
        <Hero />
        <InvitationSection />
        <Couple />
        <Itinerary />
        <SaveTheDate />
        <Gallery />
        <VenueSection />
        <RSVPSection />
        <Footer />
        <WhatsAppFloating />
      </main>
    </div>
  );
}
