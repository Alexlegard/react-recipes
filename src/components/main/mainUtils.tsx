import { Recipe } from "../../types";

export function filterCuisine(recipes: Recipe[], cuisine: string | null) {
    if (!cuisine) {
        return recipes;
    }
    return recipes.filter(recipe => recipe.cuisine.toLowerCase() === cuisine.toLowerCase());
}
export function filterSearchValue(recipes: Recipe[], searchValue: string | null) {
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
        const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.toLowerCase() === searchValue.toLowerCase());
        const cuisineMatches = recipe.cuisine
            .toLowerCase()
            .includes(searchValue.toLowerCase());

        return titleMatches || descriptionMatches || ingredientsMatch || cuisineMatches;

    });
}
export function paginateRecipes(recipes: Recipe[], page: number, recipesPerPage: number) {
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return recipes.slice(startIndex, endIndex);
}