import React from 'react';
import {Link} from "react-router-dom"
import './Header.css';

function Header(props) {
	return (
		<div className="header">
			<h1>Welcome, {props.name}!</h1>
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