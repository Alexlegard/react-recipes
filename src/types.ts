export type Recipe = {
    id: number,
    name: string,
    image: string,
    MealDBImage: string,
    ingredients: string[],
    description: string,
    instructions: string,
    prepTime: number,
    cuisine: string,
    vegetarian: boolean
}

export type RecipesArray = Recipe[];