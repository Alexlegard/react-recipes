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
    const [cuisine, setCuisine] = useState('')
    const [vegetarian, setVegetarian] = useState(false)
    let [nextId, setNextId] = useState(
        numRecipesJsRecipes + (JSON.parse(localStorage.getItem('recipes')) || []).length
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        const ingredientsArray = ingredients.split(",")
            .map((ingredient) => ingredient.trim());

        const recipe = {
            id: nextId,
            name: name,
            image: image,
            ingredients: ingredientsArray,
            description: description,
            instructions: instructions,
            prepTime: parseInt(prepTime),
            cuisine: cuisine,
            vegetarian: vegetarian,
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
        setCuisine('');
        setVegetarian(false);
        setNextId(nextId + 1);
    }

    const handleCheckboxChange = () => {
        setVegetarian(!vegetarian);
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

                <label>Cuisine:</label>
                <input type="text"
                    required
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)} />

                <label>Vegetarian:</label>
                <input type="checkbox"
                    checked={vegetarian}
                    onChange={(e) => handleCheckboxChange(e.target.value)} />

                <button type="submit">Create Recipe</button>

                {console.log("🚀 Name:", name)}
                {console.log("🚀 Image:", image)}
                {console.log("🚀 Ingredients:", ingredients)}
                {console.log("🚀 Description:", description)}
                {console.log("🚀 Instructions:", instructions)}
                {console.log("🚀 PrepTime:", prepTime)}
                {console.log("🚀 Cuisine:", cuisine)}
                {console.log("🚀 Vegetarian:", vegetarian)}
                {console.log("🚀 NextId:", nextId)}

                <p>{localStorage.getItem('recipes')}</p>
            </form>
        </div>
    );
}

export default CreateRecipeForm