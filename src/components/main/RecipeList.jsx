import React from 'react'
import RecipeCard from './RecipeCard'
import { recipes } from "../../data/Recipes"

function RecipeList() {
  return (
    <div>
      {
        recipes.map( (recipe) => {
          return <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} />
        })
      }
    </div>
  )
}

export default RecipeList