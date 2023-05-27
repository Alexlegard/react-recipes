import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
import { recipes } from "../../data/Recipes"
// import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"
import Cuisines from "./Cuisines"


type MainProps = {
  numRecipes: number;
};

function Main(props: MainProps) {

  //Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = recipes;


  // Set number of recipes per page
  const recipesPerPage = 10;

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  console.log("🚀 ~ file: Main.tsx:24 ~ Main ~ lsRecipes:", lsRecipes)
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  const allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];
  console.log("🚀 ~ file: Main.tsx:27 ~ Main ~ allRecipes:", allRecipes)

  // We use the urlSearchParams class
  const urlSearchParams = new URLSearchParams(window.location.search);
  // Make a variable containing all the query parameters
  const queryParams = Object.fromEntries(urlSearchParams);
  // Now for just the value of page
  const page = Number(queryParams.page);
  let pageStart = (page - 1) * 10;

  // Make an empty displayedContent array
  let displayedContent: Recipe[] = [];
  if (!queryParams.page) {
    displayedContent = allRecipes.slice(0, recipesPerPage);
  } else {
    displayedContent = allRecipes.slice(pageStart, pageStart + recipesPerPage);
  }

  return (
    <div className="main">
      <Cuisines allRecipes={allRecipes} />
      <RecipeList allRecipes={displayedContent} />
      <Pagination
        numRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage} />
    </div>
  )
}

export default Main