import React from 'react';
import { Star, Calendar, Info, Film } from 'lucide-react';

/**
 * MovieCard Component
 * Displays movie details in a card format with image poster hover effects, rating badge, and action button.
 */
export default function MovieCard({ show, onSelect }) {
  // Extract details with fallback defaults
  const title = show?.name || 'Untitled Movie';
  const poster = show?.image?.medium || show?.image?.original || null;
  const rating = show?.rating?.average ? show.rating.average.toFixed(1) : 'N/A';
  const releaseYear = show?.premiered ? show.premiered.split('-')[0] : 'Unknown';

  return (
    <div className="group bg-[#131b2e] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-[#1c2742] hover:shadow-2xl hover:shadow-black/50 relative">
      
      {/* Poster Image Container */}
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-slate-900">
        {poster ? (
          <img 
            src={poster} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-[#131b2e]">
            <Film size={44} className="opacity-40 mb-2" />
            <span className="text-xs font-medium">No Poster Available</span>
          </div>
        )}

        {/* Rating Badge Overlay */}
        <div className="absolute top-3 right-3 bg-[#0b0f19]/85 backdrop-blur-md border border-white/15 text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md">
          <Star className="text-amber-500 fill-amber-500" size={14} />
          <span>{rating}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-lg text-white truncate" title={title}>
            {title}
          </h3>
          
          <div className="flex items-center gap-3 text-slate-400 text-xs mt-1.5 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{releaseYear}</span>
            </div>
            {show?.language && (
              <span className="capitalize text-slate-400">
                • {show.language}
              </span>
            )}
          </div>
        </div>

        {/* See Details Button */}
        <button 
          className="w-full bg-white/5 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 text-slate-200 hover:text-slate-950 border border-white/10 hover:border-transparent rounded-xl py-2.5 px-4 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          onClick={() => onSelect(show)}
        >
          <Info size={16} />
          <span>See Details</span>
        </button>
      </div>

    </div>
  );
}
