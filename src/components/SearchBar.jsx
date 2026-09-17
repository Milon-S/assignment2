import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, placeholder = "Search for a movie..." }) {
  return (
    <div className="py-6 w-full">
      <div className="relative max-w-2xl mx-auto w-full">
        {/* Search Icon */}
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
        
        {/* Input Field */}
        <input
          type="text"
          className="w-full bg-[#131b2e] border border-white/10 rounded-2xl py-3.5 pl-12 pr-12 text-white placeholder-slate-400 text-base outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 transition-all duration-200 shadow-lg shadow-black/20"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
        />
        
        {/* Clear Button */}
        {searchQuery && (
          <button 
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            onClick={() => setSearchQuery('')}
            title="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
