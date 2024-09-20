import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

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
      setUsers(data.items);
    } catch (error) {
      setError('An error occurred while searching for users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await searchUsers(query, location, minRepos, page + 1);
      setUsers(prevUsers => [...prevUsers, ...data.items]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError('An error occurred while loading more users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Form and results display code remains the same */}
    </div>
  );
};

export default Search;