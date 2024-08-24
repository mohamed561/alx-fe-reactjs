import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
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
    filteredRecipes: state.recipes.filter(recipe => {
      const matchesSearch = 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
  
      switch(state.searchTerm) {
        case 'quick':
          return matchesSearch && recipe.prepTime < 30
        case 'vegetarian':
          return matchesSearch && recipe.isVegetarian
        case 'dessert':
          return matchesSearch && recipe.category === 'dessert'
        default:
          return matchesSearch
      }
    })
  })),
}))

export default useRecipeStore