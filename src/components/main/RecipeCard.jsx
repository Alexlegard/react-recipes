import React from 'react'
import './RecipeCard.css'

function RecipeCard(props) {
	return (
		<div className='recipe-card'>
			<h3>{props.name}</h3>
			<div>{props.description}</div>
		</div>
	);
}

export default RecipeCard