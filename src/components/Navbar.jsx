import React from 'react';
import { Film, Compass } from 'lucide-react';

/**
 * Navbar Component
 * Displays sticky glassmorphic navigation header with brand logo and page links.
 */
export default function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 text-xl font-extrabold cursor-pointer text-white select-none" 
          onClick={() => onNavigate('home')}
        >
          <div className="bg-gradient-to-br from-amber-500 to-pink-500 p-2 rounded-xl text-white shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <Film size={22} />
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
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <a 
                href="#home" 
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
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
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                onClick={() => onNavigate('listing')}
              >
                <Compass size={18} />
                <span>Explore Movies</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
