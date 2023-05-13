import RecipeCard from './RecipeCard'

function RecipeList(props) {

  return (
    <div className="RecipeList">
      {
        props.allRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} id={recipe.id} />
        })
      }
    </div>
  )
}

export default RecipeList