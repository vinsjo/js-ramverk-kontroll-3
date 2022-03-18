import React from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products.json';

const ProductsOverview = () => {
	return (
		<Layout>
			<ProductGrid products={products} />
		</Layout>
	);
};

export default ProductsOverview;
