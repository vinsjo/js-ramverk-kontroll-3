import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils';
import './ProductGridItem.css';

const ProductGridItem = ({ product }) => {
	return (
		<div className="grid-item">
			<Link className="product-content" to={`/product/${product.id}`}>
				<div className="img-container">
					<img src={product.image} alt={product.title} />
				</div>

				<div className="info">
					<h5 className="title">{product.title}</h5>
					<h5 className="price">${formatPrice(product.price)}</h5>
				</div>
			</Link>
		</div>
	);
};

export default ProductGridItem;
