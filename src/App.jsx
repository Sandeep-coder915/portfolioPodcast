import { useEffect, useMemo, useRef, useState } from 'react';

import { Menu, X } from "lucide-react"; // for icons
import PodcastCards from './Components/PodcastcardComponent';
import Approutes from './Routes';
import { AudioProvider } from './Components/AudioProvider';
import StickyPlayer from './Components/StickyPlayer';
import Nav from './Components/Header/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import FadeInSection from './Components/FadeInSection';
import Footer from './Components/Footer';
import Contact from './Components/Contact/Contact';
import Showcase from './Components/Showcase/Showcase';
import Event from './Components/Events/Event';
// Utility icons (hero/social/columns)

export default function App() {
  useEffect(() => {
    // Force dark theme by default; replace with toggle if needed
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);
  const demoQueue = [
    {
      src: '/audio/2.mp3',
      title: 'Midnight Echoes',
      artist: 'Alex Rivera',
      art: '/art/midnight.jpg'
    },
    {
      src: '/audio/flow-state.mp3',
      title: 'The Flow State (Ep.33)',
      artist: 'Chit Chat Central',
      art: '/art/flow.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 selection:bg-blue-600/40 selection:text-white">
      <Nav />

      <main className="pt-16">
        <Hero />
        <Showcase />
        <About />
        <Event />
        <Contact />
        {/* <PodcastCards/>   */}
        <Approutes />
        <AudioProvider initialQueue={demoQueue}>
          {/* ...your site components... */}
          <StickyPlayer />
        </AudioProvider>
      </main>
      <Footer />

    </div>
  );
}
