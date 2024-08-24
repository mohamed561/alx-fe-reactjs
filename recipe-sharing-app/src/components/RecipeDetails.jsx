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

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
      <Link to="/">Back to Recipes</Link>
    </div>
  )
}

export default RecipeDetails