import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query, location, minRepos, page = 1) => {
  try {
    // Construct the search query
    let searchQuery = query || '';
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>=${minRepos}`;

    // Debugging the query string to verify it's correct
    console.log('Search query:', searchQuery);

    // API request with axios
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { 
        q: searchQuery.trim(),  // Trim to avoid accidental whitespace errors
        per_page: 10,
        page: page
      },
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    });

    // Debugging API response
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error.response?.data || error.message);
    throw error;
  }
};
