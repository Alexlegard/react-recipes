var paginationTestRecipes = [];
var recipe;

for (let i = 1; i <= 25; i++) {
    recipe = {
        id: i,
        name: "Recipe " + i,
        image: "https://alexlegard.ca/default.jpg",
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