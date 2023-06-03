import { Recipe } from "../../types"
import "./Cuisines.css"
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'

type CuisinesProps = {
    allRecipes: Recipe[];
    selectedCuisine: string | null;
    setSelectedCuisine: (cuisine: string | null) => void;
};

function Cuisines(props: CuisinesProps) {
    const { allRecipes, selectedCuisine, setSelectedCuisine } = props;

    // Get unique cuisines
    const cuisinesArray = allRecipes.map(recipe => recipe.cuisine);
    const uniqueCuisines = Array.from(new Set(cuisinesArray)).sort();

    // Function for when the user clicks a cuisine button
    const handleCuisineSelection = (cuisine: string) => {
        if (selectedCuisine === cuisine) {
            // If the same cuisine is clicked again, unselect it
            setSelectedCuisine(null);
        } else {
            // Otherwise, select that cuisine
            setSelectedCuisine(cuisine);
        }
    }

    const filteredRecipes = selectedCuisine
        ? allRecipes.filter(recipe => recipe.cuisine === selectedCuisine)
        : allRecipes;

    console.log(filteredRecipes);

    return (
        <div>
            <h2>What do you want to cook today?</h2>
            <ScrollContainer>
                <div className="cuisine-buttons">
                    {uniqueCuisines.map(cuisine => (
                        <div
                            className={"cuisine-button-container"}
                            key={cuisine}
                            onClick={() => handleCuisineSelection(cuisine)}>
                            <button className={`cuisine-button ${selectedCuisine === cuisine ? 'selected' : ''}`}>{cuisine}</button>
                        </div>
                    )
                    )}
                </div>
            </ScrollContainer>
        </div>
    );
}

export default Cuisines