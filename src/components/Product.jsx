import React from 'react';
import { formatPrice } from '../utils';
import Button from './Button';
import './Product.css';
import { useCart } from '../recoil/cart';

const Product = ({ product }) => {
	const cart = useCart();

	return (
		<div className="product-container">
			<h3 className="title">{product.title}</h3>
			<div className="img-container">
				<img src={product.image} alt={product.title} />
			</div>
			<p className="description">{product.description}</p>
			<h4 className="price">${formatPrice(product.price)}</h4>
			<Button className="add-btn" onClick={() => cart.add(product)}>
				Add To Cart
			</Button>
		</div>
	);
};

export default Product;
