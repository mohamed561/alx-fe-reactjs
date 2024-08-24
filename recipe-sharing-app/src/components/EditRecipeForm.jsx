import React, { useState } from 'react'
import useRecipeStore from '../store/recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(recipe.id, { title, description })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  )
}

export default EditRecipeForm