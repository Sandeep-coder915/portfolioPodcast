import React from 'react'
import  FadeInSection from '../FadeInSection.jsx'

export function EventCard({ when, where, title, type }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:-translate-y-0.5 transition">
      <div className="text-xs text-blue-400 uppercase tracking-wide">{type}</div>
      <h3 className="mt-1 text-white font-semibold">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{when} • {where}</p>
      <a href="#" className="mt-3 inline-flex text-sm text-blue-400 hover:text-blue-300">Details →</a>
    </div>
  );
}

const Event = () => {
      const events = [
    { type: 'Concert', title: 'Live at Skyline Hall', when: 'Oct 12, 7:30 PM', where: 'Mumbai' },
    { type: 'Podcast', title: 'Recording: The Flow State', when: 'Oct 20, 6:00 PM', where: 'Studio B' },
    { type: 'Sports', title: 'Open Mat & Fitness', when: 'Oct 25, 5:00 PM', where: 'Rivera Club' },
  ];
  return (
   <section id="events" className="bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeInSection>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Upcoming Events</h2>
              <p className="text-gray-400">Concerts, podcast recordings, and sports sessions.</p>
            </div>
            <a href="#" className="hidden md:inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500">View All Events</a>
          </div>
        </FadeInSection>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <EventCard {...e} />
            </FadeInSection>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <a href="#" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500">View All Events</a>
        </div>
      </div>
    </section>
  )
}

export default Event



 