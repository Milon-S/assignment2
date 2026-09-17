const BASE_URL = 'https://api.tvmaze.com';

export async function fetchTopShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data.slice(0, 48);
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
}

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
    return rawData.map(item => item.show);
  } catch (error) {
    console.error(`Error searching shows for "${query}":`, error);
    throw error;
  }
}
