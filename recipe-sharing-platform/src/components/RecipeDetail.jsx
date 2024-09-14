import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'summary':
        setSummary(value);
        break;
      default:
        break;
    }
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!summary) newErrors.summary = 'Summary is required';
    if (ingredients.some((ingredient) => !ingredient)) newErrors.ingredients = 'All ingredients must be provided';
    if (instructions.some((instruction) => !instruction)) newErrors.instructions = 'All instructions must be provided';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRecipe = {
        title,
        summary,
        ingredients,
        instructions,
      };
      onAddRecipe(newRecipe);
      // Reset the form
      setTitle('');
      setSummary('');
      setIngredients(['']);
      setInstructions(['']);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={summary}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient} className="text-blue-500 hover:text-blue-600">
          Add Ingredient
        </button>
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={addInstruction} className="text-blue-500 hover:text-blue-600">
          Add Instruction
        </button>
        {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
