import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Generate pagination items (e.g. 1 2 3 4 5 ... 31)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Direct sequence visible at start

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-1.5 sm:gap-2.5 my-10 select-none" aria-label="Pagination">
      {/* PREVIOUS BUTTON */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 font-extrabold text-xs sm:text-sm tracking-wider text-slate-300 hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-slate-300 disabled:cursor-not-allowed px-2.5 py-2 transition-all duration-200 cursor-pointer mr-1"
        aria-label="Previous Page"
      >
        <ChevronLeft size={18} className="stroke-[2.5]" />
        <span>PREV</span>
      </button>

      {/* PAGE NUMBERS */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-8 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-500 font-bold text-sm"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={
                isActive
                  ? "w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center font-extrabold text-sm sm:text-base text-white bg-[#0a1120] border border-cyan-400/80 rounded-sm shadow-[0_0_16px_rgba(6,182,212,0.6)] transition-all duration-300 cursor-pointer"
                  : "w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center font-bold text-sm sm:text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-sm transition-all duration-200 cursor-pointer"
              }
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* NEXT BUTTON */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 font-extrabold text-xs sm:text-sm tracking-wider text-slate-300 hover:text-cyan-400 disabled:opacity-30 disabled:hover:text-slate-300 disabled:cursor-not-allowed px-2.5 py-2 transition-all duration-200 cursor-pointer ml-1"
        aria-label="Next Page"
      >
        <span>NEXT</span>
        <ChevronRight size={18} className="stroke-[2.5]" />
      </button>
    </nav>
  );
}
