import { useEffect, useMemo, useRef, useState } from 'react';
import useInViewOnce from '../../hooks/useInViewOnce';
import { Menu, X } from "lucide-react"; 


function useStickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY.current && y > 64);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, hidden };
}

// Utility icons (hero/social/columns)
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

const Nav = () => {
  const { scrolled, hidden } = useStickyHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#showcase", label: "Showcase" },
      { href: "#about", label: "About" },
      { href: "#events", label: "Events" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "backdrop-blur-md bg-slate-900/80 border-b border-slate-800 shadow-lg"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white font-bold tracking-tight text-lg hover:opacity-90 transition-opacity"
          >
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
            Anirudh Kaushal
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-300 hover:text-white font-medium tracking-wide transition-colors duration-200 relative group"
                  >
                    {l.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search (Desktop) */}
          <form
            role="search"
            className="hidden md:flex items-center gap-2 bg-slate-800/70 border border-slate-700 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500 transition-shadow"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              aria-label="Search site"
              type="search"
              placeholder="Search…"
              className="bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none w-44 md:w-56"
            />
            {Icon.search(
              "w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors"
            )}
          </form>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-gray-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <nav aria-label="Mobile Menu">
            <ul className="flex flex-col items-center gap-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-300 hover:text-white text-lg font-medium tracking-wide transition-colors"
                    onClick={() => setMenuOpen(false)} // close after click
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav


