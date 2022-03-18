import React from 'react';
import { createCartItem, formatPrice } from '../utils';
import Button from './Button';
import './Product.css';
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/cart';

const Product = ({ product }) => {
	const [cart, setCart] = useRecoilState(cartState);
	const handleAddClick = () => {
		const i = cart.findIndex(item => item.product.id === product.id);
		setCart(
			i < 0
				? [...cart, createCartItem(product)]
				: cart.map(item =>
						item.product.id !== product.id
							? item
							: { ...item, count: item.count + 1 }
				  )
		);
	};

	return (
		<div className="product-container">
			<h3 className="title">{product.title}</h3>
			<div className="img-container">
				<img src={product.image} alt={product.title} />
			</div>
			<p className="description">{product.description}</p>
			<h4 className="price">${formatPrice(product.price)}</h4>
			<Button className="add-btn" onClick={handleAddClick}>
				Add To Cart
			</Button>
		</div>
	);
};

export default Product;
