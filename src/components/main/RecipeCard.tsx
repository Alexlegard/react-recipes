import './RecipeCard.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type RecipeCardProps = {
	id: string,
	name: string,
	description: string,
	image: string | null
}

function RecipeCard(props: RecipeCardProps) {
	const { name, description, image } = props;
	const [imageValid, setImageValid] = useState(true);

	function handleImageError() {
		setImageValid(false);
	}

	return (
		<Link to={`show/${props.id}`}
			className='recipe-card-link'>
			<div className="recipe-card">
				<h3>{name}</h3>
				<div>{description}</div>
				{(image !== null && imageValid) &&
					<div className="UserSubmittedImage">
						<img src={image}
							alt={name}
							width="150"
							height="150"
							onError={handleImageError} />
					</div>}
			</div>
		</Link>
	);
}

export default RecipeCard