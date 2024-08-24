import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  )
  const favorites = useRecipeStore((state) => state.favorites)
  const addFavorite = useRecipeStore((state) => state.addFavorite)
  const removeFavorite = useRecipeStore((state) => state.removeFavorite)

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  const isFavorite = favorites.includes(recipe.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id)
    } else {
      addFavorite(recipe.id)
    }
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
      <Link to="/">Back to Recipes</Link>
    </div>
  )
}

export default RecipeDetails