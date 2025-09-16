// Utility icons (hero/social/columns)
import { useEffect, useMemo, useRef, useState } from 'react';
import useInViewOnce from '../hooks/useInViewOnce.jsx';
import FadeInSection from './FadeInSection';
import { Menu, X } from "lucide-react"; 

const Icon = {
  music: (cls='w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l10-2v13" />
      <circle cx="7" cy="19" r="2" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2" strokeWidth="1.5" />
    </svg>
  ),
  podcast: (cls='w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22v-4a4 4 0 118 0v4" />
    </svg>
  ),
  sports: (cls='w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3l4 7h7l-5.5 4 2.5 7-6-4-6 4 2.5-7L1 10h7z" />
    </svg>
  ),
  search: (cls='w-5 h-5') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 20l-3-3" />
    </svg>
  ),
  twitter: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.8c-.7.3-1.5.6-2.2.7.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.5 1A3.8 3.8 0 0012 8.2c0 .3 0 .6.1.9A10.8 10.8 0 013 5.6a3.8 3.8 0 001.2 5.1c-.6 0-1.1-.2-1.6-.4v.1c0 1.9 1.3 3.5 3.1 3.9-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1a3.8 3.8 0 003.6 2.7A7.6 7.6 0 013 19c1.3.8 2.8 1.3 4.4 1.3 5.3 0 8.3-4.4 8.3-8.3v-.4c.6-.4 1.2-1 1.7-1.6z" />
    </svg>
  ),
  instagram: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
  youtube: (cls='w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 00-2.1-2.1C19.3 4.6 12 4.6 12 4.6s-7.3 0-8.9.5A3 3 0 001 7.2 31.4 31.4 0 001 12a31.4 31.4 0 000 4.8 3 3 0 002.1 2.1c1.6.5 8.9.5 8.9.5s7.3 0 8.9-.5A3 3 0 0023 16.8 31.4 31.4 0 0023 12a31.4 31.4 0 000-4.8zM9.8 14.8V9.2L15 12l-5.2 2.8z" />
    </svg>
  ),
};
 
function RotatingTaglines({ items, interval = 2200 }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items, interval]);
  return (
    <span className="inline-block transition-opacity duration-700 ease-out">
      {items[idx]}
    </span>
  );
}

function Metric({ label, end, duration = 1000 }) {
  const { ref, visible } = useInViewOnce();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(end * p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end, duration]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-extrabold text-white">{value.toLocaleString()}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}



export default function Hero() {
  const taglines = useMemo(() => ['Singer', 'Podcaster', 'Sports Club Owner'], []);
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-dark-gradient">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-28 md:py-40">
        <FadeInSection>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Anirudh Kaushal</p>
        </FadeInSection>
        <FadeInSection delay={100}>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <RotatingTaglines items={taglines} /> • Creating Moments On & Off Stage
          </h1>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-300">
            Music that moves, conversations that matter, and a thriving sports community—one home for it all. 
          </p>
        </FadeInSection>
        <FadeInSection delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#music" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">Listen to Music</a>
            <a href="#podcast" className="px-5 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 border border-slate-700">Watch Podcast</a>
            <a href="#sports" className="px-5 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">Join Sports Club</a>
          </div>
        </FadeInSection>
        <FadeInSection delay={400}>
          <div className="mt-8 flex items-center gap-4">
            <a href="#" className="group text-white/80 hover:text-white transition">
              <span className="sr-only">Twitter</span>
              <span className="inline-flex p-2 rounded-full bg-white/10 group-hover:bg-white/20">{Icon.twitter()}</span>
            </a>
            <a href="#" className="group text-white/80 hover:text-white transition">
              <span className="sr-only">Instagram</span>
              <span className="inline-flex p-2 rounded-full bg-white/10 group-hover:bg-white/20">{Icon.instagram()}</span>
            </a>
            <a href="#" className="group text-white/80 hover:text-white transition">
              <span className="sr-only">YouTube</span>
              <span className="inline-flex p-2 rounded-full bg-white/10 group-hover:bg-white/20">{Icon.youtube()}</span>
            </a>
          </div>
        </FadeInSection>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
          <Metric label="Monthly Listeners" end={120000} />
          <Metric label="Podcast Subscribers" end={54000} />
          <Metric label="Club Members" end={1800} />
        </div>
      </div>
    </section>
  );
}
