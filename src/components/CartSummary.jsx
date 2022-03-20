import React from 'react';
import { useCart } from '../recoil/cart';
import { formatPrice } from '../utils';
import CartItem from './CartItem';
import Button from './Button';
import styles from './CartSummary.module.css';

const CartSummary = () => {
	const cart = useCart();
	return (
		<div className={styles.container}>
			<ul className={styles.items}>
				{!cart.count
					? 'Cart is empty'
					: cart.items.map(({ product, count }) => (
							<CartItem
								key={product.id}
								product={product}
								count={count}
								onCountChange={value =>
									cart.setItemCount(product, value)
								}
								onDelete={() => cart.setItemCount(product, 0)}
							/>
					  ))}
			</ul>
			<div className={styles.total}>
				<span>Total:</span> <span>${formatPrice(cart.totalPrice)}</span>
			</div>
			<div className={styles.actions}>
				<Button variant="filled" onClick={() => cart.empty()}>
					Empty Cart
				</Button>
				<Button> Checkout</Button>
			</div>
		</div>
	);
};

export default CartSummary;
