import React, { useContext, useMemo } from 'react';
import { AudioCtx } from '../Components/AudioProvider';

const Icon = {
  play:  (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M8 5v14l11-7z"/></svg>),
  pause: (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>),
  next:  (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7 6l8 6-8 6V6zm9 0h2v12h-2z"/></svg>),
  prev:  (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17 6l-8 6 8 6V6zM5 6h2v12H5z"/></svg>),
  vol:   (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3 10v4h4l5 4V6L7 10H3z"/></svg>),
  loop:  (<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M7 7h7a4 4 0 013.2 6.4l1.6 1.2A6 6 0 0014 5H7V2L3 6l4 4V7zm10 10H10a4 4 0 01-3.2-6.4L5.2 9.4A6 6 0 0010 19h7v3l4-4-4-4v3z"/></svg>),
  close: (<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none"/></svg>),
  up:    (<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7 14l5-5 5 5z"/></svg>),
  down:  (<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7 10l5 5 5-5z"/></svg>),
  spotify: (<svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M12 1.8a10.2 10.2 0 100 20.4 10.2 10.2 0 000-20.4zm4.7 14.8a.8.8 0 01-1.1.3c-3-1.8-6.8-2.3-11.3-1.5a.8.8 0 01-.3-1.6c4.9-.9 9.2-.3 12.6 1.8.4.2.5.7.2 1zm1.5-3.2a1 1 0 01-1.4.3c-3.4-2-8.6-2.6-12.6-1.7a1 1 0 11-.4-2c4.6-1 10.4-.2 14.3 2.1a1 1 0 01.2 1.3zm.1-3.5a1.2 1.2 0 01-1.6.4c-3.8-2.3-10.6-2.6-14.4-1.7a1.2 1.2 0 01-.6-2.3c4.4-1.1 11.9-.8 16.4 1.9.6.3.8 1 .4 1.7z"/></svg>),
  apple: (<svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M16.4 1.9c0 1-.4 1.9-1.1 2.7-.9 1-2.4 1.8-3.6 1.7-.1-1 .4-2 1.1-2.7.9-1 2.6-1.7 3.6-1.7zM20.6 17.3c-.8 1.7-1.9 3.5-3.4 3.5s-1.9-1.1-3.6-1.1-2.1 1.1-3.6 1.1-2.6-1.6-3.4-3.3c-1.8-3.5-.3-7.7 1.3-9.7.9-1.1 2-1.8 3.2-1.8 1.2 0 2 .7 3.2.7s2.1-.9 3.5-.7c1.2.2 2.5.9 3.3 2-.1.1-2 1.2-2 3.6 0 2.9 2.4 3.9 2.5 3.9z"/></svg>),
};

function formatTime(sec) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function StickyPlayer() {
  const {
    queue, index, current, playing, progress, duration, volume, loop,
    toggle, next, prev, seek, setVol, setLoop, removeAt, move, playNow
  } = useContext(AudioCtx);

  const pct = useMemo(() => (duration ? (progress / duration) * 100 : 0), [progress, duration]);

  if (!current) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-800 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3">
        <div className="flex items-center gap-3">
          {/* Now playing */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <img src={current.art || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=200'} alt="" className="h-10 w-10 rounded object-cover" />
              <div className="min-w-0">
                <div className="text-white text-sm font-semibold truncate">{current.title || 'Untitled track'}</div>
                <div className="text-gray-400 text-xs truncate">{current.artist || 'Unknown'}</div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{formatTime(progress)}</span>
                <div
                  role="slider"
                  aria-valuemin={0}
                  aria-valuemax={duration || 0}
                  aria-valuenow={progress || 0}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') seek(progress + 5);
                    if (e.key === 'ArrowLeft') seek(progress - 5);
                  }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const ratio = (e.clientX - rect.left) / rect.width;
                    seek(ratio * duration);
                  }}
                  className="relative h-2 flex-1 cursor-pointer rounded bg-slate-800"
                >
                  <div className="absolute inset-y-0 left-0 rounded bg-blue-600" style={{ width: `${pct}%` }} />
                </div>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button onClick={prev} className="p-2 rounded bg-slate-800 text-gray-200 hover:bg-slate-700" aria-label="Previous">{Icon.prev}</button>
            <button onClick={toggle} className="p-2 rounded bg-blue-600 text-white hover:bg-blue-500" aria-label={playing ? 'Pause' : 'Play'}>
              {playing ? Icon.pause : Icon.play}
            </button>
            <button onClick={next} className="p-2 rounded bg-slate-800 text-gray-200 hover:bg-slate-700" aria-label="Next">{Icon.next}</button>

            <div className="ml-2 hidden md:flex items-center gap-2">
              <span className="text-xs text-gray-400">Vol</span>
              <input
                type="range"
                min={0} max={1} step={0.01}
                value={volume}
                onChange={(e) => setVol(parseFloat(e.target.value))}
                className="w-24 accent-blue-600"
                aria-label="Volume"
              />
              <button
                onClick={() => setLoop(l => !l)}
                className={`p-2 rounded ${loop ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-200 hover:bg-slate-700'}`}
                aria-pressed={loop}
                aria-label="Loop"
              >
                {Icon.loop}
              </button>
            </div>
          </div>

          {/* Subscribe buttons */}
          <div className="ml-auto hidden lg:flex items-center gap-2">
            <a
              href="https://open.spotify.com/show/YOUR_SHOW_ID"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-500"
              aria-label="Listen on Spotify"
            >
              {Icon.spotify} <span>Spotify</span>
            </a>
            <a
              href="https://podcasts.apple.com/podcast/YOUR_SHOW_SLUG_OR_ID"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-white hover:bg-slate-700 border border-slate-700"
              aria-label="Listen on Apple Podcasts"
            >
              {Icon.apple} <span>Apple</span>
            </a>
          </div>

          {/* Mini-queue */}
          <details className="ml-2 group">
            <summary className="list-none cursor-pointer px-3 py-2 rounded bg-slate-800 text-gray-200 hover:bg-slate-700 text-xs">
              Queue ({queue.length})
            </summary>
            <div className="absolute bottom-14 right-4 w-[min(28rem,92vw)] max-h-[60vh] overflow-y-auto rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur p-3 shadow-2xl">
              <ul className="space-y-2">
                {queue.map((t, i) => (
                  <li key={`${t.src}-${i}`} className={`flex items-center gap-2 rounded-lg p-2 ${i === index ? 'bg-slate-800' : 'bg-slate-900 hover:bg-slate-800'}`}>
                    <img src={t.art || 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=80'} alt="" className="h-9 w-9 rounded object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="text-white text-xs font-medium truncate">{t.title || 'Untitled'}</div>
                      <div className="text-gray-400 text-[11px] truncate">{t.artist || ''}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => move(i, Math.max(0, i - 1))} className="p-1 rounded bg-slate-800 text-gray-200 hover:bg-slate-700" aria-label="Move up">{Icon.up}</button>
                      <button onClick={() => move(i, Math.min(queue.length - 1, i + 1))} className="p-1 rounded bg-slate-800 text-gray-200 hover:bg-slate-700" aria-label="Move down">{Icon.down}</button>
                      <button onClick={() => playNow(t)} className="p-1 rounded bg-blue-600 text-white hover:bg-blue-500" aria-label="Play now">▶</button>
                      <button onClick={() => removeAt(i)} className="p-1 rounded bg-slate-800 text-gray-200 hover:bg-slate-700" aria-label="Remove">{Icon.close}</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
