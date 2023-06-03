import { recipes } from '../data/Recipes'
import { useParams } from 'react-router-dom'
import './ShowRecipe.css'
import { Recipe } from '../types'

function ShowRecipe() {

    const localStorageRecipes = JSON.parse(localStorage.getItem('recipes') ?? "[]")
    const allRecipes: Recipe[] = [...recipes, ...localStorageRecipes];
    console.log(allRecipes);

    const { id } = useParams();

    const thisRecipe = id && allRecipes[Number(id) - 1]

    if (!thisRecipe) {
        return (
            <h1>Recipe not found.</h1>
        );
    }

    const ingredientsList = thisRecipe.ingredients ? thisRecipe.ingredients.join(', ') : null

    return (
        <div>
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
        </div>
    );
}

export default ShowRecipe