import './CuisineButton.css'

type CuisineButtonProps = {
    cuisine: string | null;
    cuisineIsSelected: boolean;
    handleCuisineButtonClick: (cuisine: string | null, cuisineIsSelected: boolean) => void;
}

function CuisineButton(props: CuisineButtonProps) {
    const { cuisine, cuisineIsSelected, handleCuisineButtonClick } = props;

    const handleClick = () => {
        handleCuisineButtonClick(cuisine, cuisineIsSelected);
    }

    return (
        <button
            className="cuisine-button"
            onClick={handleClick}>
            {cuisine}
        </button>
    );
}

export default CuisineButton