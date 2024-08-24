import React from 'react'
import useRecipeStore from '../store/recipeStore'

const FilterOptions = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h3>Filter by:</h3>
      <select onChange={handleFilterChange}>
        <option value="">All Recipes</option>
        <option value="quick">Quick Meals (Under 30 mins)</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="dessert">Desserts</option>
      </select>
    </div>
  )
}

export default FilterOptions