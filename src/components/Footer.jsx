import React from 'react';
import { Film, Github, Facebook, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
    handleScrollTop();
  };

  return (
    <footer className="bg-[#070a12] border-t border-white/10 pt-12 pb-8 mt-20 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Row: Brand, Nav Links & Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Logo & Copyright */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <div 
              className="flex items-center gap-2 font-bold text-base sm:text-lg text-white cursor-pointer hover:opacity-90 transition-all select-none group"
              onClick={handleHomeClick}
              title="MovieHub Home"
            >
              <div className="bg-amber-500/10 p-1.5 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                <Film size={20} className="text-amber-500" />
              </div>
              <span className="group-hover:text-amber-400 transition-colors">MovieHub</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 text-xs">
              &copy; 2026 MovieHub. All rights reserved.
            </span>
          </div>

          {/* Quick Nav Link Items */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs text-slate-400">
            <button 
              onClick={handleHomeClick}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('listing')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Catalog
            </button>
            <span className="hover:text-slate-200 transition-colors cursor-default">Terms</span>
            <span className="hover:text-slate-200 transition-colors cursor-default">Privacy</span>
            <span className="hover:text-slate-200 transition-colors cursor-default">Security</span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Milon-S"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 bg-white/5 hover:text-amber-400 hover:bg-amber-500/15 w-9 h-9 rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.facebook.com/mdmilon.sarker.165"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 bg-white/5 hover:text-amber-400 hover:bg-amber-500/15 w-9 h-9 rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all duration-200"
              title="Facebook Profile"
            >
              <Facebook size={18} />
            </a>

            {/* Back to top button */}
            <button
              onClick={handleScrollTop}
              className="bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 w-9 h-9 rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Micro Subtitle */}
        <div className="pt-6 text-center text-[11px] text-slate-500">
          Created By <span className="text-slate-300 font-semibold">MilonS</span>. Built with React & Tailwind CSS for Assignment 2.
        </div>

      </div>
    </footer>
  );
}
