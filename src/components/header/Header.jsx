import React from 'react';
import {Link} from "react-router-dom"
import './Header.css';

function Header() {
	return (
		<div className="header">
			<h1>Marvelous Meals</h1>
			<nav className="navbar">
				<ul className="navbar ul">
					<li><Link to="/create-recipe">Add</Link></li>
					<li><Link to="/update-recipe">Update</Link></li>
					<li><Link to="/delete-recipe">Delete</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;