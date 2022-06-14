import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<div>
					<Link to="/">Khanh Nguyen</Link>
				</div>
				<ul>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
