import React from 'react'
import useRecipeStore from '../store/recipeStore'

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
  const searchTerm = useRecipeStore((state) => state.searchTerm)

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchBar