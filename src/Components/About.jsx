import React from 'react'
import FadeInSection from './FadeInSection.jsx'
const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <FadeInSection>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">About Anirudh Kaushal</h2>
          <p className="mt-3 max-w-3xl text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Anirudh Kaushal bridges chart-worthy melodies, thought-provoking interviews, and a high-energy sports community, inspiring people to grow on and off the stage.
          </p>
          <a href="#" className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700 border border-slate-700">Learn More</a>
        </FadeInSection>
      </div>
    </section>
  )
}

export default About
 