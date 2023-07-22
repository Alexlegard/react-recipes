import './RecipeCard.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

type RecipeCardProps = {
    id: string,
    name: string,
    description: string,
    MealDbImage: string
}

function MealDbRecipeCard(props: RecipeCardProps) {
    const { name, description, MealDbImage } = props;
    const [recipeImage, setRecipeImage] = useState<string | undefined>(undefined);

    //console.log(MealDbImage);

    useEffect(() => {

        fetch(MealDbImage)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log("Data: ", data.meals[0]);
                console.log("strMealThumb: ", data.meals[0].strMealThumb);
                setRecipeImage(data.meals[0].strMealThumb);
            })
    }, [MealDbImage])


    return (
        <Link to={`show/${props.id}`}
            className='recipe-card-link'>
            <div className="recipe-card">
                <h3>{name}</h3>
                <div>{description}</div>
                <img src={recipeImage} alt={name} width="150" height="150" />
            </div>
        </Link>
    );
}

export default MealDbRecipeCard