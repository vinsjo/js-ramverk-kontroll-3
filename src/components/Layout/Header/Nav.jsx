import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<ul className="nav-links">
				<li>
					<NavLink
						to="/products"
						title="Product Overview"
						className="nav-link"
					>
						Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cart"
						title="Shopping Cart"
						className="nav-link"
					>
						Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
