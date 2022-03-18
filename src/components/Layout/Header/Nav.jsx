import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<ul className="nav-links">
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
