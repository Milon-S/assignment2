import React from 'react';
import { Film, Github, Facebook } from 'lucide-react';

/**
 * Footer Component
 * Contains copyright, brand identity, and social links.
 */
export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-white/10 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2 font-bold text-lg text-white">
          <Film size={20} className="text-amber-500" />
          <span>MovieExplorer</span>
        </div>

        {/* Copyright */}
        <p className="text-slate-400 text-sm">
          &copy; 2026 MovieExplorer. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/Milon-S" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 bg-white/5 hover:text-amber-400 hover:bg-amber-500/15 w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-200"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.facebook.com/mdmilon.sarker.165" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 bg-white/5 hover:text-amber-400 hover:bg-amber-500/15 w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-200"
            title="Facebook Profile"
          >
            <Facebook size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
