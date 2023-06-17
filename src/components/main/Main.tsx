import { useState, useEffect } from 'react';
import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
// import { recipes } from "../../data/Recipes"
import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"
import Cuisines from "./Cuisines"


type MainProps = {
  searchValue: string | null;
};

function Main(props: MainProps) {
  const { searchValue } = props;

  // State for the search value and currently selected cuisine
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  // Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = paginationTestRecipes;

  // Set number of recipes per page
  const recipesPerPage = 10;

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  let allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];

  // Log the contents of localStorage
  useEffect(() => {
    console.log(localStorageRecipes);
  }, [localStorageRecipes]);

  // Create a list of cuisines variable
  const allCuisines: Recipe[] = allRecipes;

  // First filter for searchValue
  if (searchValue) {
    allRecipes = allRecipes.filter(recipe => {
      const titleMatches = recipe.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const descriptionMatches = recipe.description
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const ingredientsMatch = recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase() === searchValue.toLowerCase());
      const cuisineMatches = recipe.cuisine
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      return titleMatches || descriptionMatches || ingredientsMatch || cuisineMatches;
    });
  }

  // Check if a cuisine is selected. If there is, filter allRecipes for the
  // selected cuisine.
  if (selectedCuisine) {
    allRecipes = allRecipes.filter(recipe => recipe.cuisine === selectedCuisine);
  }

  // Time to manage the query parameter!!!
  // We use the urlSearchParams class
  const urlSearchParams = new URLSearchParams(window.location.search);
  // Make a variable containing all the query parameters
  const queryParams = Object.fromEntries(urlSearchParams);
  // Now for just the value of page
  const page = Number(queryParams.page);
  let pageStart = (page - 1) * 10;

  // Make an empty paginatedContent array
  let paginatedContent: Recipe[] = [];
  // If queryParams is not present, that means the current page is page 1
  // That means paginatedContent should slice from the beginning of allRecipes.
  if (!queryParams.page) {
    paginatedContent = allRecipes.slice(0, recipesPerPage);
  } else {
    paginatedContent = allRecipes.slice(pageStart, pageStart + recipesPerPage);
  }

  return (
    <div className="main">
      <Cuisines allRecipes={allCuisines}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine} />
      <RecipeList allRecipes={paginatedContent} />
      <Pagination
        numRecipes={allRecipes.length}
        recipesPerPage={recipesPerPage}
        searchValue={searchValue}
        cuisine={selectedCuisine} />
    </div>
  )
}

export default Main