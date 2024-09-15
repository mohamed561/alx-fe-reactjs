import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { title, ingredients, steps });
      // Reset form after submission
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`mt-1 block w-full ${errors.title ? 'border-red-500' : ''}`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <Textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`mt-1 block w-full ${errors.ingredients ? 'border-red-500' : ''}`}
          placeholder="Enter ingredients (one per line)"
          rows={5}
        />
        {errors.ingredients && <p className="mt-1 text-sm text-red-500">{errors.ingredients}</p>}
      </div>

      <div>
        <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <Textarea
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`mt-1 block w-full ${errors.steps ? 'border-red-500' : ''}`}
          placeholder="Enter preparation steps"
          rows={7}
        />
        {errors.steps && <p className="mt-1 text-sm text-red-500">{errors.steps}</p>}
      </div>

      <Button type="submit" className="w-full">
        Add Recipe
      </Button>

      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>
            Please correct the errors above before submitting.
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default AddRecipeForm;