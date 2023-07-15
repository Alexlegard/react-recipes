import './RecipeCard.css'
import { Link } from 'react-router-dom'

type RecipeCardProps = {
    id: string,
    name: string,
    description: string,
    MealDbImage: string
}

function RecipeCard(props: RecipeCardProps) {
    return (
        <Link to={`show/${props.id}`}
            className='recipe-card-link'>
            <div className="recipe-card">
                <h3>{props.name}</h3>
                <div>{props.description}</div>
				<div>Image: {props.MealDbImage}</div>
            </div>
        </Link>
    );
}

export default RecipeCard