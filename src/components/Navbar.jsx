import React from 'react';
import { Film, Compass, Search, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, searchQuery = '', onSearchChange = () => {} }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl font-extrabold cursor-pointer text-white select-none flex-shrink-0" 
          onClick={() => onNavigate('home')}
        >
          <div className="bg-gradient-to-br from-amber-500 to-pink-500 p-1.5 sm:p-2 rounded-xl text-white shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <Film size={20} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <span className="hidden sm:inline">
            Movie
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              Hub
            </span>
          </span>
        </div>

        {/* Quick Search Input in Navbar */}
        <div className="flex-1 max-w-xs sm:max-w-md relative">
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Quick search movies & TV..."
              className="w-full bg-white/5 border border-white/15 focus:border-amber-500/80 focus:bg-white/10 text-slate-100 text-xs sm:text-sm pl-9 pr-8 py-1.5 sm:py-2 rounded-full outline-none transition-all duration-200 placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 text-slate-400 hover:text-white p-0.5 rounded-full cursor-pointer"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-3 sm:gap-6 list-none m-0 p-0">
            <li>
              <a 
                href="#home" 
                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  currentPage === 'home' ? 'text-white border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#movies" 
                className={`text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  currentPage === 'listing' ? 'text-white border-b-2 border-amber-500 pb-1' : 'text-slate-400 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('listing');
                }}
              >
                Movies
              </a>
            </li>
            <li>
              {/* Primary Action Button */}
              <button 
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                onClick={() => onNavigate('listing')}
              >
                <Compass size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">Explore</span>
                <span className="hidden sm:inline">Movies</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

