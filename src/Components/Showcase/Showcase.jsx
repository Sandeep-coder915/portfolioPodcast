import React from 'react'
import FadeInSection from '../FadeInSection';
const Icon = {
  music: (cls = 'w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l10-2v13" />
      <circle cx="7" cy="19" r="2" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2" strokeWidth="1.5" />
    </svg>
  ),
  podcast: (cls = 'w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22v-4a4 4 0 118 0v4" />
    </svg>
  ),
  sports: (cls = 'w-6 h-6') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3l4 7h7l-5.5 4 2.5 7-6-4-6 4 2.5-7L1 10h7z" />
    </svg>
  ),
  search: (cls = 'w-5 h-5') => (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 20l-3-3" />
    </svg>
  ),
  twitter: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.8c-.7.3-1.5.6-2.2.7.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.5 1A3.8 3.8 0 0012 8.2c0 .3 0 .6.1.9A10.8 10.8 0 013 5.6a3.8 3.8 0 001.2 5.1c-.6 0-1.1-.2-1.6-.4v.1c0 1.9 1.3 3.5 3.1 3.9-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1a3.8 3.8 0 003.6 2.7A7.6 7.6 0 013 19c1.3.8 2.8 1.3 4.4 1.3 5.3 0 8.3-4.4 8.3-8.3v-.4c.6-.4 1.2-1 1.7-1.6z" />
    </svg>
  ),
  instagram: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
  youtube: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 00-2.1-2.1C19.3 4.6 12 4.6 12 4.6s-7.3 0-8.9.5A3 3 0 001 7.2 31.4 31.4 0 001 12a31.4 31.4 0 000 4.8 3 3 0 002.1 2.1c1.6.5 8.9.5 8.9.5s7.3 0 8.9-.5A3 3 0 0023 16.8 31.4 31.4 0 0023 12a31.4 31.4 0 000-4.8zM9.8 14.8V9.2L15 12l-5.2 2.8z" />
    </svg>
  ),
};

export function Card({ icon, title, children, cta, href, img }) {
  return (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-slate-800 p-2 text-blue-400">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-800">
        <img src={img} alt="" className="h-full w-full object-cover opacity-90 transition group-hover:scale-105" />
      </div>
      <div className="mt-4 text-sm text-gray-300">{children}</div>
      <a href={href} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
        {cta}
      </a>
    </div>
  );
}

 
const Showcase = () => {
  return (
    <section id="showcase" className="relative bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeInSection>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Explore the Work</h2>
          <p className="mt-2 text-gray-400">Music releases, podcast episodes, and sports club programs at a glance.</p>
        </FadeInSection>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeInSection>
            <div id="music">
              <Card
                icon={Icon.music('w-6 h-6')}
                title="Music"
                img="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
                cta="Listen Now"
                href="#"
              >
                <p className="text-gray-300">Latest Release: “Midnight Echoes” — streaming on Spotify, Apple Music, and more.</p>
                <div className="mt-3 flex gap-2">
                  <a href="#" className="text-xs rounded bg-slate-800 px-2 py-1 text-gray-300 hover:text-white">Spotify</a>
                  <a href="#" className="text-xs rounded bg-slate-800 px-2 py-1 text-gray-300 hover:text-white">Apple Music</a>
                  <a href="#" className="text-xs rounded bg-slate-800 px-2 py-1 text-gray-300 hover:text-white">YouTube Music</a>
                </div>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div id="podcast">
              <Card
                icon={Icon.podcast('w-6 h-6')}
                title="Podcast"
                img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                cta="Watch/Listen"
                href="/podcast"
              >
                <p className="text-gray-300">Latest Episode: “The Flow State” with guest Jamie Lee — insights on creative grit.</p>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div id="sports">
              <Card
                icon={Icon.sports('w-6 h-6')}
                title="Sports Club"
                img="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                cta="Join Today"
                href="#"
              >
                <p className="text-gray-300">Programs Available: Yoga, Fitness, and Martial Arts — memberships open.</p>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default Showcase




