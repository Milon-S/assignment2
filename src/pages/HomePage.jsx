import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieCard from '../components/MovieCard';
import { fetchTopShows } from '../services/api';
import { Compass, Flame } from 'lucide-react';

export default function HomePage({ onNavigate, onSelectMovie }) {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await fetchTopShows();
        setFeaturedMovies(data.slice(0, 8)); // Top 8 featured shows
      } catch (err) {
        console.error('Failed to load featured movies:', err);
      } finally {
        setLoading(false);
      }
    }
    loadFeatured();
  }, []);

  return (
    <div>
      {/* Hero Banner Section */}
      <HeroBanner onExplore={() => onNavigate('listing')} />

      {/* Trending Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Flame size={16} className="text-amber-400 fill-amber-400/20" />
              <span>TRENDING NOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Featured Highlights
            </h2>
          </div>

          <button 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer self-start sm:self-auto" 
            onClick={() => onNavigate('listing')}
          >
            <span>View All Movies</span>
            <Compass size={16} />
          </button>
        </div>

        {/* Loading Spinner or Grid Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
            <p className="text-slate-400 text-sm">Loading popular titles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                show={movie} 
                onSelect={onSelectMovie} 
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
