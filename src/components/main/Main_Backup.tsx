// import { useState } from 'react';
import RecipeList from './RecipeList'
import Pagination from './Pagination'
import './Main.css'
// import { recipes } from "../../data/Recipes"
import paginationTestRecipes from "../../data/PaginationTestRecipes"
import { Recipe } from "../../types"
import Cuisines from "./Cuisines"


type MainProps = {
    searchValue: string | null;
    isSearchbarModified: boolean;
    pageNum: number;
    cuisine: string | null;
    url: string | null;
    setCuisine: (cuisine: string | null) => void;
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
    const { searchValue,
        pageNum,
        cuisine,
        handlePaginationButtonClick,
        handleCuisineButtonClick } = props;

    // Change this variable to switch to the other data set
    const storedRecipes: Recipe[] = paginationTestRecipes;

    // Set number of recipes per page
    const recipesPerPage = 10;

    // Create a combined array of stored recipes and localstorage recipes
    const lsRecipes = localStorage.getItem('recipes') || ""
    const localStorageRecipes = lsRecipes ? JSON.parse(lsRecipes) : []
    let allRecipes: Recipe[] = [...storedRecipes, ...localStorageRecipes];

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

    // Time to manage the query parameter!!!
    // We use the urlSearchParams class
    const urlSearchParams = new URLSearchParams(window.location.search);
    // Make a variable containing all the query parameters
    const queryParams = Object.fromEntries(urlSearchParams);

    let pageStart = (pageNum - 1) * 10;
    let paginatedContent: Recipe[] = [];
    // If queryParams is not present, that means the current page is page 1
    // That means paginatedContent should slice from the beginning of allRecipes.
    if (!queryParams.page) {
        paginatedContent = allRecipes.slice(0, recipesPerPage);
    } else {
        // If not, slice from pageStart (10 if page 2) until pageStart + recipesPerPage (10)
        paginatedContent = allRecipes.slice(pageStart, pageStart + recipesPerPage);
    }

    return (
        <div className="main">
            <Cuisines allRecipes={allCuisines}
                selectedCuisine={cuisine}
                handleCuisineButtonClick={handleCuisineButtonClick} />
            <RecipeList allRecipes={paginatedContent} />
            <Pagination
                numRecipes={allRecipes.length}
                recipesPerPage={recipesPerPage}
                handlePaginationButtonClick={handlePaginationButtonClick} />
        </div>
    )
}

export default Main