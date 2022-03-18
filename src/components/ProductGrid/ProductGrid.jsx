import React from 'react';
import ProductGridItem from './ProductGridItem';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
	return (
		<div className="product-grid">
			{products.map(product => (
				<ProductGridItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
