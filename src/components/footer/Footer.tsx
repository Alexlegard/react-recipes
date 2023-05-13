import './Footer.css';
import ClearRecipes from './ClearRecipes'
import GitHubIcon from '@mui/icons-material/GitHub'

function Footer() {

	return (
		<footer className="footer">
			<div className="flex">
				<div className="github">
					<a href="https://github.com/Alexlegard/React-Recipes">
						<div className="GitHubIcon">
							<GitHubIcon />
						</div>
					</a>
				</div>

				<div className="copyright">
					&copy; Alex Legard 2023
				</div>

				<ClearRecipes />
			</div>

		</footer>
	);
}

export default Footer