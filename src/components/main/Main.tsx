import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
// import { recipes } from "../../data/Recipes"
import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"


type MainProps = {
  numRecipes: number;
};

function Main(props: MainProps) {

  //Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = paginationTestRecipes;


  // Set number of recipes per page
  const recipesPerPage = 10;

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  const allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];

  // We use the urlSearchParams class
  const urlSearchParams = new URLSearchParams(window.location.search);
  // Make a variable containing all the query parameters
  const queryParams = Object.fromEntries(urlSearchParams);
  // Now for just the value of page
  const page = Number(queryParams.page);
  let pageStart = (page - 1) * 10;
  console.log("🚀 ~ file: Main.tsx:34 ~ Main ~ page:", page)
  console.log("🚀 ~ file:Main.tsx:35 ~ Main ~ pageStart:", pageStart)


  let displayedContent: Recipe[] = [];
  if (!queryParams.page) {
    displayedContent = paginationTestRecipes.slice(0, recipesPerPage);
  } else {
    displayedContent = paginationTestRecipes.slice(pageStart, pageStart + recipesPerPage);
  }
  console.log("🚀 ~ file: Main.tsx:44 ~ Main ~ displayedContent:", displayedContent)

  return (
    <div className="main">
      <RecipeList allRecipes={displayedContent} />
      <Pagination
        numRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage} />
    </div>
  )
}

export default Main