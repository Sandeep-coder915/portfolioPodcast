import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const AudioCtx = createContext(null);

const LS_KEY = 'audio_state_v1';

export function AudioProvider({ children, initialQueue = [] }) {
  const audioRef = useRef(null);
  const [queue, setQueue] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
      return saved.queue || initialQueue;
    } catch { return initialQueue; }
  });
  const [index, setIndex] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
      return Number.isFinite(saved.index) ? saved.index : 0;
    } catch { return 0; }
  });
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);
  const [loop, setLoop] = useState(false);

  const current = queue[index] || null;

  // Persist state
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify({ queue, index }));
  }, [queue, index]);

  // Load & play/pause
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.loop = loop;
    el.volume = volume;
    if (current) {
      el.src = current.src;
      el.load();
      if (playing) el.play().catch(() => setPlaying(false));
    }
  }, [current, playing, loop, volume]);

  const play = useCallback(() => setPlaying(true), []);
  const pause = useCallback(() => setPlaying(false), []);
  const toggle = useCallback(() => setPlaying(p => !p), []);
  const next = useCallback(() => {
    setIndex(i => (i + 1 < queue.length ? i + 1 : i));
    setPlaying(true);
  }, [queue.length]);
  const prev = useCallback(() => {
    setIndex(i => (i - 1 >= 0 ? i - 1 : i));
    setPlaying(true);
  }, []);
  const seek = useCallback((t) => {
    const el = audioRef.current;
    if (!el || !Number.isFinite(t)) return;
    el.currentTime = t;
  }, []);
  const setVol = useCallback((v) => {
    const el = audioRef.current;
    const nv = Math.min(1, Math.max(0, v));
    setVolume(nv);
    if (el) el.volume = nv;
  }, []);
  const enqueue = useCallback((track) => {
    setQueue(q => [...q, track]);
    if (!current) setIndex(0);
  }, [current]);
  const playNow = useCallback((track) => {
    setQueue(q => {
      const i = q.findIndex(t => t.src === track.src);
      if (i !== -1) return q; // already in queue
      return [track, ...q];
    });
    setIndex(0);
    setPlaying(true);
  }, []);
  const removeAt = useCallback((i) => {
    setQueue(q => {
      const nq = q.filter((_, idx) => idx !== i);
      if (i < index) setIndex(idx => Math.max(0, idx - 1));
      if (i === index) setPlaying(false);
      return nq;
    });
  }, [index]);
  const move = useCallback((from, to) => {
    setQueue(q => {
      const nq = q.slice();
      const [item] = nq.splice(from, 1);
      nq.splice(to, 0, item);
      return nq;
    });
    if (from === index) setIndex(to);
  }, [index]);

  // Audio events
  const onTime = () => {
    const el = audioRef.current;
    if (!el) return;
    setProgress(el.currentTime);
    setDuration(el.duration || 0);
  };
  const onEnded = () => {
    if (loop) return;
    if (index + 1 < queue.length) {
      setIndex(index + 1);
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };
  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);

  // Keep audio element in sync with playing
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [playing]);

  const value = useMemo(() => ({
    queue, index, current, playing, progress, duration, volume, loop,
    play, pause, toggle, next, prev, seek, setVol, setLoop: setLoop,
    enqueue, playNow, removeAt, move,
  }), [queue, index, current, playing, progress, duration, volume, loop, next, prev, seek, setVol, enqueue, playNow, removeAt, move]);

  return (
    <AudioCtx.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        onTimeUpdate={onTime}
        onEnded={onEnded}
        onPlay={onPlay}
        onPause={onPause}
        hidden
        preload="metadata"
      />
    </AudioCtx.Provider>
  );
}
