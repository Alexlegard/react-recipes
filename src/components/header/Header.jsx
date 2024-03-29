import React from 'react';
import { Link, useLocation } from "react-router-dom"
import './Header.css';
import SearchBar from './SearchBar';

function Header(props) {
	const location = useLocation();

	const isRecipesPage = location.pathname === '/';

	if (!isRecipesPage) {
		return (
			<div className="header">
				<h2>Welcome, Chef!</h2>
				<nav className="navbar">
					<ul className="navbar ul">
						<li><Link to="/">List</Link></li>
						<li><Link to="/create-recipe">Add</Link></li>
					</ul>
				</nav>
			</div>
		);
	}

	return (
		<div className="header">
			<h2>Welcome, Chef!</h2>
			<nav className="navbar">
				<ul className="navbar ul">
					<li><Link to="/">List</Link></li>
					<li><Link to="/create-recipe">Add</Link></li>
					<li><SearchBar
						handleSearchBarSubmit={props.handleSearchBarSubmit} />
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;