import React from 'react'
import { recipes } from "../data/Recipes"

function UpdateRecipe() {
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

export default UpdateRecipe