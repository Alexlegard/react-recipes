var paginationTestRecipes = [];
var recipe;

for (let i = 1; i <= 25; i++) {
    recipe = {
        id: i,
        name: "Recipe " + i,
        image: null,
        MealDbImage: "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
        ingredients: ["Jelly beans", "Maple Syrup"],
        description: "Recipe description",
        instructions: "Recipe instructions",
        prepTime: 30,
        cuisine: "Cuisine" + i,
        vegetarian: true
    };

    paginationTestRecipes.push(recipe);
}

export default paginationTestRecipes;