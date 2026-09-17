import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

/**
 * HeroBanner Component
 * High-impact hero section for the landing page with gradient background glows and action button.
 */
export default function HeroBanner({ onExplore }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/25 via-[#0b0f19] to-[#0b0f19] border-b border-white/10 overflow-hidden">
      
      {/* Decorative Glow Blobs */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Top Feature Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <Sparkles size={16} />
          <span>Unlimited Entertainment Database</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-5 text-white">
          DISCOVER{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            MOVIES & TV SHOWS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore and discover your favorite movies from around the world. Stream info, ratings, release years, and detailed summaries powered by TVMaze.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center gap-4">
          <button 
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-base bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" 
            onClick={onExplore}
          >
            <span>Explore Now</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
