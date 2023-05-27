import { Recipe } from "../../types"

type CuisinesProps = {
    allRecipes: Recipe[];
};

function Cuisines(props: CuisinesProps) {
    const { allRecipes } = props;

    // Get unique cuisines
    const cuisinesArray = allRecipes.map(recipe => recipe.cuisine);
    const uniqueCuisines = Array.from(new Set(cuisinesArray)).sort();

    return (
        <div>
            <h2>What do you want to cook today?</h2>
            <div className="cuisine-buttons">
                {uniqueCuisines.map(cuisine => (
                    <button key={cuisine}>{cuisine}</button>
                ))}
            </div>
        </div>
    );
}

export default Cuisines