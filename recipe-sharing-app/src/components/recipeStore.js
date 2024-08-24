import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],
      favorites: [],
      recommendations: [],
      addRecipe: (newRecipe) => set((state) => ({ 
        recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
      })),
      deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id)
      })),
      updateRecipe: (id, updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe => 
          recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
        )
      })),
      setRecipes: (recipes) => set({ recipes }),
      setSearchTerm: (term) => {
        set({ searchTerm: term })
        get().filterRecipes()
      },
      filterRecipes: () => set((state) => ({
        filteredRecipes: state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      })),
      addFavorite: (recipeId) => set((state) => ({ 
        favorites: [...state.favorites, recipeId] 
      })),
      removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      generateRecommendations: () => set((state) => {
        const favoriteIngredients = state.favorites.flatMap(id => 
          state.recipes.find(recipe => recipe.id === id)?.ingredients || []
        );
        const recommendedRecipes = state.recipes.filter(recipe => 
          !state.favorites.includes(recipe.id) && 
          recipe.ingredients.some(ingredient => favoriteIngredients.includes(ingredient))
        );
        return { recommendations: recommendedRecipes.slice(0, 5) };
      }),
    }),
    {
      name: 'recipe-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useRecipeStore