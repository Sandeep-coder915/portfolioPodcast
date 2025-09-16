import { useState } from "react";

/**
 * PodcastCards
 * Display YouTube podcast videos in card layout with pagination
 */
export default function PodcastCards() {
  // Replace with your own YouTube video data
  const videos = [
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
     { id: "i0Hrc3muMCw", title: "Episode 2 - Startup Journey" },
 
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // how many cards per page

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentVideos = videos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(videos.length / itemsPerPage);
return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
    <h2 className="text-2xl font-bold text-white mb-6">🎙️ Podcast Episodes</h2>

    {/* Grid of cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {currentVideos.map((video) => (
        <div
          key={video.id}
          className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden shadow hover:shadow-lg transition-shadow"
        >
          {/* Embedded YouTube Player */}
          <div className="w-full h-48">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-white font-semibold line-clamp-2">
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination controls */}
    <div className="flex justify-center items-center gap-3 mt-8">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 disabled:opacity-50 hover:bg-slate-700 transition"
      >
        Prev
      </button>
      <span className="text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 disabled:opacity-50 hover:bg-slate-700 transition"
      >
        Next
      </button>
    </div>
  </div>
);

}
