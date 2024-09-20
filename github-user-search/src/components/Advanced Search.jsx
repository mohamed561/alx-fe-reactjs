import React, { useState } from 'react';
import { searchUsers, fetchUserDetails } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(query, location, minRepos);
      const detailedUsers = await Promise.all(
        data.items.slice(0, 10).map(user => fetchUserDetails(user.login))
      );
      setUsers(detailedUsers);
    } catch (error) {
      setError('An error occurred while searching for users');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await searchUsers(query, location, minRepos);
      const newUsers = await Promise.all(
        data.items.slice(page * 10, (page + 1) * 10).map(user => fetchUserDetails(user.login))
      );
      setUsers([...users, ...newUsers]);
      setPage(page + 1);
    } catch (error) {
      setError('An error occurred while loading more users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter GitHub username"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="p-2 border rounded"
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Minimum repositories"
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Search
          </button>
        </div>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="border rounded p-4">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
            <p className="text-gray-600">{user.location}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
      
      {users.length > 0 && (
        <button onClick={loadMore} className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 mx-auto block">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;