/**
 * TVMaze API Service Module
 * Handles show queries, searching, and endpoint fetching.
 */

const BASE_URL = 'https://api.tvmaze.com';

/**
 * Fetch top/popular TV shows from TVMaze
 * @returns {Promise<Array>} Array of show objects
 */
export async function fetchTopShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    // Return first 50 shows for fast performance
    return data.slice(0, 48);
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
}

/**
 * Search shows by title query
 * @param {string} query - The search keyword
 * @returns {Promise<Array>} Array of normalized show objects
 */
export async function searchShows(query) {
  if (!query || query.trim() === '') {
    return fetchTopShows();
  }

  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error(`Search error: ${response.status}`);
    }
    const rawData = await response.json();
    
    // TVMaze search returns [{ score, show: {...} }]
    // Extract and normalize the show objects
    return rawData.map(item => item.show);
  } catch (error) {
    console.error(`Error searching shows for "${query}":`, error);
    throw error;
  }
}
