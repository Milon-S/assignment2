import React, { useEffect } from 'react';
import { X, Star, Calendar, Globe, Tv, Film } from 'lucide-react';

export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  // Prevent background body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const title = show?.name || 'Untitled Show';
  const poster = show?.image?.original || show?.image?.medium;
  const backdrop = show?.image?.original || show?.image?.medium;
  const rating = typeof show?.rating?.average === 'number' ? show.rating.average.toFixed(1) : 'N/A';
  const releaseDate = show?.premiered || 'N/A';
  const genres = show?.genres || [];
  const language = show?.language || 'N/A';
  const network = show?.network?.name || show?.webChannel?.name || 'N/A';

  return (
    <div
      className="fixed inset-0 w-full h-full bg-slate-950/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Dialog Box */}
      <div
        className="relative bg-[#151d30] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/80 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          className="absolute top-4 right-4 z-20 bg-[#0b0f19]/75 border border-white/15 text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-rose-500 hover:border-rose-500 hover:rotate-90 transition-all duration-200"
          onClick={onClose}
          title="Close Modal (Esc)"
        >
          <X size={20} />
        </button>

        {/* Hero Backdrop Banner */}
        <div className="relative w-full h-56 sm:h-72 bg-slate-900 overflow-hidden">
          {backdrop ? (
            <img src={backdrop} alt={title} className="w-full h-full object-cover filter brightness-75" />
          ) : (
            <div className="w-full h-full bg-[#131b2e]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151d30] via-[#151d30]/60 to-transparent" />
        </div>

        {/* Modal Inner Content */}
        <div className="p-6 sm:p-8 relative -mt-16 sm:-mt-20">

          {/* Header Block: Poster Thumbnail + Title & Genres */}
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-end mb-6">
            {poster ? (
              <img src={poster} alt={title} className="w-28 sm:w-36 aspect-[2/3] rounded-xl object-cover border-4 border-[#151d30] shadow-xl flex-shrink-0" />
            ) : (
              <div className="w-28 sm:w-36 aspect-[2/3] rounded-xl border-4 border-[#151d30] bg-slate-800 flex items-center justify-center shadow-xl flex-shrink-0">
                <Film size={36} className="text-slate-500" />
              </div>
            )}

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">{title}</h2>

              {/* Genre Pills */}
              {genres.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {genres.map((genre, idx) => (
                    <span key={idx} className="bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Meta Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/5 border border-white/10 p-4 rounded-xl mb-6">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Rating</div>
              <div className="font-bold text-sm sm:text-base text-amber-400 flex items-center gap-1.5">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span>{rating} / 10</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Release Date</div>
              <div className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                <Calendar size={16} className="text-slate-400" />
                <span>{releaseDate}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Language</div>
              <div className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5 capitalize">
                <Globe size={16} className="text-slate-400" />
                <span>{language}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Network</div>
              <div className="font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                <Tv size={16} className="text-slate-400" />
                <span>{network}</span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Overview</h3>
            {show?.summary ? (
              <div
                className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 [&_p]:mb-3"
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            ) : (
              <p className="text-slate-400 text-sm">No summary description available for this title.</p>
            )}
          </div>

          {/* Modal Footer Action */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-end">
            <button
              type="button"
              className="px-5 py-2.5 rounded-full font-semibold text-sm bg-white/5 text-slate-300 border border-white/15 hover:bg-rose-500/15 hover:border-rose-500/40 hover:text-rose-400 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              onClick={onClose}
            >
              <X size={16} />
              <span>Close</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
