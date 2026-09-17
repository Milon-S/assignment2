import React from 'react';
import { ArrowRight, Clapperboard, Film, Star, Zap } from 'lucide-react';

export default function HeroBanner({ onExplore }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden border-b border-white/10 bg-[#0b0f19]">

      {/* Cinematic Movie Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 filter brightness-110 contrast-105 scale-105 transform transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />

      {/* Balanced Vignette & Gradient Overlays for Text Readability & Image Clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/45 to-[#0b0f19]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#0b0f19_90%)] opacity-70" />

      {/* Decorative Glow Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Floating Glassmorphic Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber-500/30 backdrop-blur-md text-amber-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-amber-500/5 animate-pulse">
          <Clapperboard size={16} className="text-amber-400" />
          <span>CINEMATIC MOVIE & TV EXPLORER</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6 text-white drop-shadow-md">
          DISCOVER{' '}
          <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">
            MOVIES & TV SHOWS
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-10 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/10 shadow-lg shadow-black/20">
            Explore thousands of popular shows, stream info, IMDb ratings, release years, and detailed cast summaries in one place.
          </p>
        </div>

        {/* Action Button & Quick Highlights */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
            onClick={onExplore}
          >
            <span>Explore Catalog</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Features Micro Banner */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 max-w-lg mx-auto text-center gap-4 text-slate-400 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold text-white text-lg flex items-center gap-1">
              <Film size={18} className="text-amber-400" /> 10,000+
            </span>
            <span className="text-slate-400 text-xs">Shows & Series</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold text-white text-lg flex items-center gap-1">
              <Star size={18} className="text-amber-400 fill-amber-400" /> Top Rated
            </span>
            <span className="text-slate-400 text-xs">Curated Movies</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold text-white text-lg flex items-center gap-1">
              <Zap size={18} className="text-amber-400" /> Instant Search
            </span>
            <span className="text-slate-400 text-xs">Fast & Responsive</span>
          </div>
        </div>

      </div>
    </section>
  );
}


