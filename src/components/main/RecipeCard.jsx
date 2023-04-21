import React from 'react'

function RecipeCard(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			<div>{props.description}</div>
		</div>
	);
}

export default RecipeCard