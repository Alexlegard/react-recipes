import RecipeCard from './RecipeCard'
import { recipes } from "../../data/Recipes"
import { Recipe } from "../../types"

function RecipeList() {

  const lsRecipes = localStorage.getItem('recipes') || ""
  console.log("🚀 ~ file: RecipeList.tsx:8 ~ RecipeList ~ lsRecipes:", lsRecipes)
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  const allRecipes: Recipe[] = [...recipes, ...localStorageRecipes];
  console.log(allRecipes);

  return (
    <div>
      {
        allRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} id={recipe.id} />
        })
      }
    </div>
  )
}

export default RecipeList