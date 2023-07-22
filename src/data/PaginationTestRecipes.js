var paginationTestRecipes = [];
var recipe;

for (let i = 1; i <= 25; i++) {
    recipe = {
        id: i,
        name: "Recipe " + i,
        image: null,
        MealDbImage: "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
        ingredients: ["Penne Rigate", "Olive oil", "Garlic", "Chopped tomatoes", "Chile flakes", "Italian seasoning", "Basil", "Parmigiano-reggiano"],
        description: "Italian noodles with typical noodley seasoning like chopped tomatoes and basil.",
        instructions: "Bring a large pot of water to a boil. Add salt, olive oil and garlic and cook. Add the cooked tomatoes, chile flakes and italian seasoning and cook for 5 minutes. Drain the pasta and garnish with Parmigiano-Reggiano flakes and more basil. Serve.",
        prepTime: 30,
        cuisine: "Cuisine" + i,
        vegetarian: true
    };

    paginationTestRecipes.push(recipe);
}

export default paginationTestRecipes;
