import { useState } from 'react';
import CurtainOpener from './components/CurtainOpener';
import TopControls from './components/TopControls';
import FlowerShower from './components/FlowerShower';
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
  const [flowerShower, setFlowerShower] = useState(true);

  return (
    <div id="top" className="min-h-screen bg-ivory text-maroon-dark overflow-x-hidden selection:bg-gold selection:text-white">
      {/* Royal Flower Shower with Petals */}
      <FlowerShower enabled={flowerShower} />

      {/* Royal Curtain Opener */}
      <CurtainOpener
        onOpen={() => setOpened(true)}
        onStartOpen={() => setStarted(true)}
      />

      {/* Floating Audio, Flower Shower & Share Controls */}
      <TopControls
        autoPlayTrigger={started || opened}
        flowerShower={flowerShower}
        onToggleFlowerShower={() => setFlowerShower((prev) => !prev)}
      />

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
