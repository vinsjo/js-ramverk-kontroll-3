import React from 'react';
import { formatPrice } from '../utils';
import Button from './Button';
import './Product.css';

const Product = ({ product }) => {
	return (
		<div className="product-container">
			<h2 className="title">{product.title}</h2>
			<div className="img-container">
				<img src={product.image} alt={product.title} />
			</div>
			<p className="description">{product.description}</p>
			<h3 className="price">${formatPrice(product.price)}</h3>
			<Button className="add-btn">Add To Cart</Button>
		</div>
	);
};

export default Product;
