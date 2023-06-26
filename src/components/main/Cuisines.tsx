import { Recipe } from "../../types"
import "./Cuisines.css"
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import CuisineButton from './CuisineButton'

type CuisinesProps = {
    allRecipes: Recipe[];
    selectedCuisine: string | null;
    handleCuisineButtonClick: (cuisine: string | null, cuisineIsSelected: boolean) => void;
};

function Cuisines(props: CuisinesProps) {
    const { allRecipes,
        selectedCuisine,
        handleCuisineButtonClick } = props;

    // Get unique cuisines
    const uniqueCuisines = Array.from(
        new Set(allRecipes.map(recipe => recipe.cuisine))
    ).sort();

    let cuisineButtons: JSX.Element[] = [];

    if (selectedCuisine) {
        cuisineButtons.push(
            <CuisineButton
                key={selectedCuisine}
                cuisine={selectedCuisine}
                cuisineIsSelected={true}
                handleCuisineButtonClick={handleCuisineButtonClick}
            />
        );
    } else {
        cuisineButtons = uniqueCuisines.map(cuisine => (
            <CuisineButton
                key={cuisine}
                cuisine={cuisine}
                cuisineIsSelected={false}
                handleCuisineButtonClick={handleCuisineButtonClick}
            />
        ));
    }



    return (
        <div>
            <h2>What do you want to cook today?</h2>
            <ScrollContainer >
                {cuisineButtons}
            </ScrollContainer>
        </div>
    );
}

export default Cuisines