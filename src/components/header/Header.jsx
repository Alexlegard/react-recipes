import React from 'react';
import {Link} from "react-router-dom"
import './Header.css';

function Header(props) {
	return (
		<div className="header">
			<h2>Welcome, Alex!</h2>
			<nav className="navbar">
				<ul className="navbar ul">
					<li><Link to="/">List</Link></li>
					<li><Link to="/create-recipe">Add</Link></li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;