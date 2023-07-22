import RecipeCard from './RecipeCard'
import MealDBRecipeCard from './MealDBRecipeCard'

function RecipeList(props) {

  return (
    <div className="RecipeList">
      {
        props.allRecipes.map((recipe) => {

          if (recipe.image && !recipe.MealDbImage) {
            // There's an image but no MealDBImage (meaning the recipe is a user-submitted recipe)
            return <RecipeCard key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
              id={recipe.id} />

          } else if (!recipe.image && recipe.MealDbImage) {
            // There's a MealDBImage but no image, meaning the recipe is a stored recipe in recipes.js or
            // PaginationTestRecipes.js
            return <MealDBRecipeCard key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              MealDbImage={recipe.MealDbImage}
              id={recipe.id} />

          } else {
            // There's no image or MealDBImage, meaning it's a user-submitted image where the user didn't add an image
            return <RecipeCard key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              image={null}
              id={recipe.id} />
          }
        })
      }
    </div>
  )
}

export default RecipeList