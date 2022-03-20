import React from 'react';

import { useCart } from '../../recoil/cart';
import NavLink from './NavLink';
import styles from './Nav.module.css';

const Nav = () => {
	const cart = useCart();
	return (
		<nav>
			<ul className={styles.links}>
				<li>
					<NavLink to="/products" title="Product Overview">
						Products
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart" title="Shopping Cart">
						Cart ({cart.count})
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
