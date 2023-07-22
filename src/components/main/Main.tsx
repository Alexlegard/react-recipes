import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
// import { recipes } from "../../data/Recipes"
import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"
import Cuisines from "./Cuisines"
import { useGlobalStateStore } from 'utils/store'
import { filterSearchValue, filterCuisine, paginateRecipes } from './mainUtils'


type MainProps = {
  pageNum: number;
  url: string | null;
  handlePaginationButtonClick: (page: number) => void;
  handlePaginationLeftArrowClick: (page: number) => void;
  handlePaginationRightArrowClick: (page: number, numPages: number) => void;
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
    handlePaginationLeftArrowClick,
    handlePaginationRightArrowClick,
    handleCuisineButtonClick } = props;

  // Change this variable to switch to the other data set
  const storedRecipes: Recipe[] = paginationTestRecipes;

  // Set number of recipes per page
  const recipesPerPage = 10;

  const searchValue = useGlobalStateStore(state => state.searchValue)
  const cuisine = useGlobalStateStore(state => state.cuisine)

  // Create a combined array of stored recipes and localstorage recipes
  const lsRecipes = localStorage.getItem('recipes') || ""
  const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
  let allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];

  // preparing raw recipes based on search/filter values
  let searchValuefilteredRecipes = filterSearchValue(allRecipes, searchValue);
  let cuisineFilteredRecipes = filterCuisine(searchValuefilteredRecipes, cuisine);
  let paginatedRecipes = paginateRecipes(cuisineFilteredRecipes, pageNum, recipesPerPage);

  return (
    <div className="main">
      <Cuisines allRecipes={allRecipes}
        selectedCuisine={cuisine}
        handleCuisineButtonClick={handleCuisineButtonClick} />
      <RecipeList allRecipes={paginatedRecipes} />
      <Pagination
        pageNum={pageNum}
        numRecipes={cuisineFilteredRecipes.length}
        recipesPerPage={recipesPerPage}
        handlePaginationButtonClick={handlePaginationButtonClick}
        handlePaginationLeftArrowClick={handlePaginationLeftArrowClick}
        handlePaginationRightArrowClick={handlePaginationRightArrowClick} />
    </div>
  )
}
// Normal comment
// * Highlight important information
// ! Alert
// ? Asking a question
// TODO: Something that I need to do

export default Main


// TODO images
// TODO later? user accounts / login? try Auth0 for simplest solution