import './Footer.css';
import ClearRecipes from './ClearRecipes'

function Footer() {
	return (
		<footer className="footer">
			<div className="copyright">&copy; Alex Legard 2023</div>

			<div>
				<a href="https://github.com/Alexlegard/React-Recipes"></a>
			</div>
			
			<ClearRecipes />
		</footer>
	);
}

export default Footer