import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Anirudh Kaushal. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">Social feed</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
          <span className="text-gray-500 text-sm">Live</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


 