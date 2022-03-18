import React from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '/src/recoil/products';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => {
	const products = useRecoilValue(productsState);
	return (
		<div className="product-grid">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
