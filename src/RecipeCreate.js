import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Recipe name"
      />
      <input
        name="cuisine"
        type="text"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine"
      />
      <input
        name="photo"
        type="text"
        value={formData.photo}
        onChange={handleChange}
        placeholder="Photo URL"
      />
      <textarea
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
      />
      <textarea
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
        placeholder="Preparation steps"
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;