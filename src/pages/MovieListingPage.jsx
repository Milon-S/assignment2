import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { fetchTopShows, searchShows } from '../services/api';
import { Filter, Frown } from 'lucide-react';

export default function MovieListingPage({ searchQuery = '', setSearchQuery = () => {}, onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial top shows or run live search on search query change with debounce
  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        let results;
        if (searchQuery.trim() === '') {
          results = await fetchTopShows();
        } else {
          results = await searchShows(searchQuery);
        }
        if (isMounted) {
          setMovies(results || []);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch movies. Please check your network connection.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // Reset genre filter when search query changes
  useEffect(() => {
    setSelectedGenre('All');
  }, [searchQuery]);

  const [sortBy, setSortBy] = useState('default');

  // Extract unique genres for quick filter pills
  const availableGenres = useMemo(() => {
    const genreSet = new Set();
    (movies || []).forEach(movie => {
      if (movie && Array.isArray(movie.genres)) {
        movie.genres.forEach(g => genreSet.add(g));
      }
    });
    return ['All', ...Array.from(genreSet).sort()];
  }, [movies]);

  // Reset selected genre if it's no longer available in the active dataset
  useEffect(() => {
    if (selectedGenre !== 'All' && !availableGenres.includes(selectedGenre)) {
      setSelectedGenre('All');
    }
  }, [availableGenres, selectedGenre]);

  // Filter and sort movies by selected genre & criteria
  const filteredMovies = useMemo(() => {
    let result = (movies || []).filter(Boolean);
    if (selectedGenre !== 'All') {
      result = result.filter(movie => 
        Array.isArray(movie?.genres) && movie.genres.includes(selectedGenre)
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === 'rating') {
        const ratingA = typeof a?.rating?.average === 'number' ? a.rating.average : 0;
        const ratingB = typeof b?.rating?.average === 'number' ? b.rating.average : 0;
        return ratingB - ratingA;
      }
      if (sortBy === 'year') {
        const yearA = parseInt(a?.premiered?.split('-')[0], 10) || 0;
        const yearB = parseInt(b?.premiered?.split('-')[0], 10) || 0;
        return yearB - yearA;
      }
      if (sortBy === 'name') {
        return (a?.name || '').localeCompare(b?.name || '');
      }
      return 0;
    });
  }, [movies, selectedGenre, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
      {/* Live Search Bar */}
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search movies by title (e.g. Girls, Batman, Game of Thrones)..."
      />

      {/* Genre Filter Pills */}
      {availableGenres.length > 1 && (
        <div className="flex items-center gap-2 flex-wrap mb-8 justify-center">
          <span className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mr-2">
            <Filter size={14} /> Filter:
          </span>
          {availableGenres.slice(0, 10).map((genre) => {
            const isActive = selectedGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 shadow-md shadow-amber-500/20 cursor-pointer"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
                }
              >
                {genre}
              </button>
            );
          })}
        </div>
      )}

      {/* Title, Total Count & Sort Options Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Movies & TV Shows'}
          </h2>
          <span className="text-slate-400 text-xs sm:text-sm">
            {filteredMovies.length} {filteredMovies.length === 1 ? 'title' : 'titles'} found
          </span>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#131b2e] text-slate-200 border border-white/15 text-xs sm:text-sm rounded-xl px-3 py-2 outline-none focus:border-amber-500 transition-colors cursor-pointer"
          >
            <option value="default">Default / Relevance</option>
            <option value="rating">Highest Rated</option>
            <option value="year">Newest Release</option>
            <option value="name">Title (A - Z)</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">Searching TVMaze database...</p>
        </div>
      )}

      {/* Error Message */}
      {!loading && error && (
        <div className="text-center py-16 text-rose-400 text-sm">
          <p>{error}</p>
        </div>
      )}

      {/* Empty Search Results */}
      {!loading && !error && filteredMovies.length === 0 && (
        <div className="text-center py-20 px-4 flex flex-col items-center justify-center text-slate-400">
          <Frown size={48} className="opacity-40 mb-3" />
          <h3 className="text-lg font-bold text-white">No movies found matching your query</h3>
          <p className="text-sm text-slate-500 mt-1">Try typing a different title or resetting the genre filter.</p>
        </div>
      )}

      {/* Movie Cards Grid */}
      {!loading && !error && filteredMovies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              show={movie} 
              onSelect={onSelectMovie} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
