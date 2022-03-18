import React from 'react';
import Layout from '../components/Layout';
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/cart';

const Cart = () => {
	const [cart, setCart] = useRecoilState(cartState);
	return (
		<Layout>
			{!cart || !cart.length ? (
				'Cart is empty'
			) : (
				<ul>
					{cart.map(({ product, count }, i) => (
						<li key={i}>
							{product.title}: {count}
						</li>
					))}
				</ul>
			)}
		</Layout>
	);
};

export default Cart;
