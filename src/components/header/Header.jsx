import React from 'react';
import { Link, useLocation } from "react-router-dom"
import './Header.css';
import SearchBar from './SearchBar';

function Header(props) {
	const location = useLocation();

	const isRecipesPage = location.pathname === '/';

	return (
		<div className="header">
			<h2>Welcome, Chef!</h2>
			<nav className="navbar">
				<ul className="navbar ul">
					<li><Link to="/">List</Link></li>
					<li><Link to="/create-recipe">Add</Link></li>
					<li><SearchBar
						searchValue={props.searchValue}
						setSearchValue={props.setSearchValue} />
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;