import React from 'react';
import { useCart } from '../recoil/cart';
import { formatPrice } from '../utils';
import Button from './Button';
import './CartSummary.css';

const CartSummary = () => {
	const cart = useCart();
	return (
		<div className="cart-container">
			<ul className="cart-items">
				{!cart.count
					? 'Cart is empty'
					: cart.items.map(({ product, count }) => (
							<li key={product.id} className="cart-item">
								<div className="details">
									<span>{product.title}</span>
									<span>
										{count} * ${formatPrice(product.price)}
									</span>
								</div>
								<div className="button-container">
									<Button
										onClick={() => cart.remove(product)}
									>
										-
									</Button>
									<Button onClick={() => cart.add(product)}>
										+
									</Button>
								</div>
							</li>
					  ))}
			</ul>
			<div className="cart-bottom">
				<div className="total-price">
					<span>Total:</span>{' '}
					<span>${formatPrice(cart.totalPrice)}</span>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
