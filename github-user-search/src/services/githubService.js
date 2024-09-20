import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (query, location, minRepos) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: searchQuery, per_page: 10 },
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

export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};