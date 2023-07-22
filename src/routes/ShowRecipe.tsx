// import { recipes } from '../data/Recipes'
import paginationTestRecipes from "../data/PaginationTestRecipes"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ShowRecipe.css'
import { Recipe } from '../types'

function ShowRecipe() {

    // Derive the list of recipes from recipes.js / PaginationTestRecipes.js and
    // the recipes in localstorage.
    const localStorageRecipes = JSON.parse(localStorage.getItem('recipes') ?? "[]")
    const allRecipes: Recipe[] = [...paginationTestRecipes, ...localStorageRecipes];
    const [recipeImage, setRecipeImage] = useState<string | undefined>(undefined);
    const [imageValid, setImageValid] = useState(true);

    // Extract the 'id' parameter from the url
    const { id } = useParams();

    // Find the recipe we need to display from the allRecipes array
    const thisRecipe = id && allRecipes[Number(id) - 1]

    useEffect(() => {

        if (!thisRecipe || !thisRecipe.MealDbImage) {
            return;
        }

        fetch(thisRecipe.MealDbImage)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log("Data: ", data.meals[0]);
                console.log("strMealThumb: ", data.meals[0].strMealThumb);
                setRecipeImage(data.meals[0].strMealThumb);
            })

    }, [])

    if (!thisRecipe) {
        return (
            <h1>Recipe not found.</h1>
        );
    }

    const ingredientsList = thisRecipe.ingredients ? thisRecipe.ingredients.join(', ') : null

    function handleImageError() {
        setImageValid(false);
    }

    return (
        <div className="show">
            <h1>{thisRecipe.name}</h1>

            <div className="description">{thisRecipe.description}</div>

            <div className="imageUrl">
                <b>Image URL:</b> {thisRecipe.image}
            </div>
            <div className="ingredients">
                <b>Ingredients:</b> {ingredientsList}
            </div>
            <div className="instructions">
                <b>Instructions:</b> {thisRecipe.instructions}
            </div>
            <div className="prepTime">
                <b>Prep time:</b> {thisRecipe.prepTime} minutes
            </div>
            <div className="cuisine">
                <b>Cuisine: </b>{thisRecipe.cuisine}
            </div>
            <div className="vegetarian">
                <b>Vegetarian: </b>{
                    thisRecipe.vegetarian ? "Yes" : "No"
                }
            </div>
            {(recipeImage !== undefined && imageValid) &&
                <div className="MealDbImage">
                    <img src={recipeImage}
                        alt={thisRecipe.name}
                        width="150"
                        height="150"
                        onError={handleImageError} />
                </div>}
            {(thisRecipe.image !== undefined && imageValid) &&
                <div className="UserSubmittedImage">
                    <img src={thisRecipe.image}
                        alt={thisRecipe.name}
                        width="150"
                        height="150"
                        onError={handleImageError} />
                </div>}
            {!imageValid &&
                <div className="imageError">
                    <p>Image not found.</p>
                </div>}
        </div>
    );
}

export default ShowRecipe