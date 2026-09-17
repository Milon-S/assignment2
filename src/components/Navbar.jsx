import React from 'react';
import { Film, Compass } from 'lucide-react';

/**
 * Navbar Component
 * Displays sticky glassmorphic navigation header with brand logo and page links.
 */
export default function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2.5 sm:gap-3 text-lg sm:text-xl font-extrabold cursor-pointer text-white select-none" 
          onClick={() => onNavigate('home')}
        >
          <div className="bg-gradient-to-br from-amber-500 to-pink-500 p-1.5 sm:p-2 rounded-xl text-white shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <Film size={20} className="sm:w-[22px] sm:h-[22px]" />
          </div>
          <span>
            Movie
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explorer
            </span>
          </span>
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

