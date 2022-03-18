import React from 'react';
import { formatPrice } from '../../utils';
import './ProductCard.css';

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<div className="image-container">
				<img src={product.image} alt={product.title} />
			</div>

			<div className="info">
				<h5 className="title">{product.title}</h5>

				<h5 className="price">{formatPrice(product.price)}</h5>
			</div>
		</div>
	);
};

export default ProductCard;
