import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy pages/sections
const HomePage = lazy(() => import('./pages/HomePage'));
const PodcastPage = lazy(() => import('./pages/PodcastPage'));
const MusicPage = lazy(() => import('./pages/MusicPage'));
const SportsPage = lazy(() => import('./pages/SportsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-gray-400">Loading…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
