import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieListingPage from './pages/MovieListingPage';
import MovieModal from './components/MovieModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'listing'
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (currentPage !== 'listing') {
      setCurrentPage('listing');
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans">
      {/* Top Sticky Navbar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectMovie={handleSelectMovie} 
          />
        ) : (
          <MovieListingPage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectMovie={handleSelectMovie} 
          />
        )}
      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal 
          show={selectedMovie} 
          onClose={handleCloseModal} 
        />
      )}

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
