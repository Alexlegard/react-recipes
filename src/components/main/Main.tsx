import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
// import { recipes } from "../../data/Recipes"
import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"
import Cuisines from "./Cuisines"
import { useGlobalStateStore } from 'utils/store'


type MainProps = {
  pageNum: number;
  url: string | null;
  handlePaginationButtonClick: (page: number) => void;
  handleCuisineButtonClick: (cuisine: string | null, cuisineIsSelected: boolean) => void;
};

// In this component, we create a combined set of recipes of the ones in storage and the
// localstorage recipes.
// Then, we use helper functions to filter the recipes for searchValue
// (ie. the current value of the search bar)
// AND filter the recipes for selected cuisine.
// THEN we paginate the content
// Finally we display it.

function Main(props: MainProps) {
  const {
    pageNum,
    handlePaginationButtonClick,
    handleCuisineButtonClick } = props;

  // Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = paginationTestRecipes;

  // Set number of recipes per page
  const recipesPerPage = 10;

  // TODO talk with Daniel about possible cleanup here?

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  let allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];
  const searchValue = useGlobalStateStore(state => state.searchValue)
  const cuisine = useGlobalStateStore(state => state.cuisine)
  let searchValuefilteredRecipes = filterSearchValue(allRecipes, searchValue);
  let cuisineFilteredRecipes = filterCuisine(searchValuefilteredRecipes, cuisine);
  let paginatedRecipes = paginateRecipes(cuisineFilteredRecipes, pageNum, recipesPerPage);

  console.log(paginatedRecipes);

  return (
    <div className="main">
      <Cuisines allRecipes={allRecipes}
        selectedCuisine={cuisine}
        handleCuisineButtonClick={handleCuisineButtonClick} />
      <RecipeList allRecipes={paginatedRecipes} />
      <Pagination
        numRecipes={cuisineFilteredRecipes.length}
        recipesPerPage={recipesPerPage}
        handlePaginationButtonClick={handlePaginationButtonClick} />
    </div>
  )

  function filterSearchValue(recipes: Recipe[], searchValue: string | null) {
    return recipes.filter(recipe => {
      if (!searchValue) {
        return true;
      }
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

  function filterCuisine(recipes: Recipe[], cuisine: string | null) {
    if (!cuisine) {
      return recipes;
    }
    return recipes.filter(recipe => recipe.cuisine.toLowerCase() === cuisine.toLowerCase());
  }

  function paginateRecipes(recipes: Recipe[], page: number, recipesPerPage: number) {
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return recipes.slice(startIndex, endIndex);
  }
}
// Normal comment
// * Highlight important information
// ! Alert
// ? Asking a question
// TODO: Something that I need to do

export default Main