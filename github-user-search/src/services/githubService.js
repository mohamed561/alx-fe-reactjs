import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query, location, minRepos, page = 1) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { 
        q: searchQuery, 
        per_page: 10,
        page: page
      },
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};