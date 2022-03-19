import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../recoil/cart';
import './Nav.css';

const Nav = () => {
	const cart = useCart();
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
						Cart ({cart.count || 0})
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
