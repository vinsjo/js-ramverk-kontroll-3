import React from 'react';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io';
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
								<h3 className="title">{product.title}</h3>
								<div className="item-bottom">
									<span>
										{count} * ${product.price}
									</span>
									<div className="button-container">
										<Button
											className="cart-btn"
											variant="icon"
											onClick={() => cart.remove(product)}
										>
											<IoMdRemoveCircleOutline />
										</Button>
										<Button
											className="cart-btn"
											variant="icon"
											onClick={() => cart.add(product)}
										>
											<IoMdAddCircleOutline />
										</Button>
									</div>
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
