import React, { useState } from 'react';
import './forms.css'
import { recipes } from "../../data/Recipes"

function CreateRecipeForm() {

    const numRecipesJsRecipes = recipes.length + 1;
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')
    const [instructions, setInstructions] = useState('')
    const [prepTime, setPrepTime] = useState('')
    let [nextId, setNextId] = useState(
        numRecipesJsRecipes + (JSON.parse(localStorage.getItem('recipes')) || []).length
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        const ingredientsArray = ingredients.split(",")
            .map((ingredient) => ingredient.trim());

        const recipe = {
            name: name,
            image: image,
            ingredients: ingredientsArray,
            description: description,
            instructions: instructions,
            prepTime: parseInt(prepTime),
            id: nextId
        };

        // Make an existing recipes variable
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || []

        // Make an updated recipes variable and update localstorage
        const updatedRecipes = [...existingRecipes, recipe];
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

        // Reset the form fields
        setName('');
        setImage('');
        setIngredients('');
        setDescription('');
        setInstructions('');
        setPrepTime('');
        setNextId(nextId + 1);
    }

    return (
        <div className="create">
            <h2>Create a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label>Image:</label>
                <input type="url"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />

                <label>Ingredients:</label>
                <input type="text"
                    required
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)} />

                <label>Description:</label>
                <input type="textarea"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <label>Instructions:</label>
                <input type="textarea"
                    required
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)} />

                <label>Prep time:</label>
                <input type="number"
                    required
                    value={prepTime}
                    onChange={(e) => setPrepTime(e.target.value)} />

                <button type="submit">Create Recipe</button>

                <p>Name: {name}</p>
                <p>Image: {image}</p>
                <p>Ingredients: {ingredients}</p>
                <p>Description: {description}</p>
                <p>Instructions: {instructions}</p>
                <p>prepTime: {prepTime}</p>
                <p>nextId: {nextId}</p>

                <p>{localStorage.getItem('recipes')}</p>
            </form>
        </div>
    );
}

export default CreateRecipeForm