import React from 'react'
import FadeInSection from '../FadeInSection'
 
const Contact = () => {
  return (
  <section id="contact" className="bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeInSection>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Stay in the Loop</h2>
          <p className="mt-2 text-gray-400">News across music, podcasts, and sports in one place.</p>
        </FadeInSection>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeInSection>
            <form className="rounded-xl border border-slate-800 bg-slate-900/60 p-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm text-gray-300">Newsletter</label>
              <div className="mt-2 flex gap-2">
                <input type="email" required placeholder="Anirudh Kaushal@email.com"
                  className="flex-1 rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-gray-200 placeholder:text-gray-500 outline-none" />
                <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">Subscribe</button>
              </div>
              <p className="mt-2 text-xs text-gray-500">No spam. Unsubscribe any time.</p>
            </form>
          </FadeInSection>

          <FadeInSection delay={100}>
            <form className="rounded-xl border border-slate-800 bg-slate-900/60 p-4" onSubmit={(e) => e.preventDefault()}>
              <label className="block text-sm text-gray-300">Contact</label>
              <div className="mt-2 grid grid-cols-1 gap-3">
                <input type="text" required placeholder="Full name"
                  className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-gray-200 placeholder:text-gray-500 outline-none" />
                <input type="email" required placeholder="Email"
                  className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-gray-200 placeholder:text-gray-500 outline-none" />
                <select aria-label="Inquiry Type" className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-gray-200 outline-none">
                  <option>Music</option>
                  <option>Podcast</option>
                  <option>Sports</option>
                </select>
                <textarea rows="4" placeholder="Message" className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-gray-200 outline-none" />
                <button type="submit" className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">Send Message</button>
              </div>
            </form>
          </FadeInSection>

          <FadeInSection delay={200}>
         <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
  <h3 className="text-white font-semibold">Sports Club Location</h3>
  <p className="mt-2 text-sm text-gray-300">
    Mohali
  </p>
  <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-800">
    <iframe
      title="Sports Club Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7476625725367!2d76.69034999999997!3d30.6973751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe3cefb4f05%3A0xe33332fe2e51308!2sHC%20Edittz!5e0!3m2!1sen!2sin!4v1757529779749!5m2!1sen!2sin"
      className="h-full w-full border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default Contact


 