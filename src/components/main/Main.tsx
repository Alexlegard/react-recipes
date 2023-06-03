import { useState } from 'react';
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

  // State for the currently selected cuisine
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  // Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = recipes;


  // Set number of recipes per page
  const recipesPerPage = 10;

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  let allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];
  let cuisineFilteredRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];


  if (selectedCuisine) {
    cuisineFilteredRecipes = allRecipes.filter(recipe => recipe.cuisine === selectedCuisine);
  }

  // We use the urlSearchParams class
  const urlSearchParams = new URLSearchParams(window.location.search);
  // Make a variable containing all the query parameters
  const queryParams = Object.fromEntries(urlSearchParams);
  // Now for just the value of page
  const page = Number(queryParams.page);
  let pageStart = (page - 1) * 10;

  // Make an empty displayedContent array
  let paginatedContent: Recipe[] = [];
  if (!queryParams.page) {
    paginatedContent = cuisineFilteredRecipes.slice(0, recipesPerPage);
  } else {
    paginatedContent = cuisineFilteredRecipes.slice(pageStart, pageStart + recipesPerPage);
  }

  return (
    <div className="main">
      <Cuisines allRecipes={allRecipes}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine} />
      <RecipeList allRecipes={paginatedContent} />
      <Pagination
        numRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage} />
    </div>
  )
}

export default Main