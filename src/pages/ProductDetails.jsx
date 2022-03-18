import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails = () => {
	const { productId } = useParams();
	const product = products.find(
		product => product.id.toString() === productId
	);

	return (
		<Layout>
			{!product ? (
				''
			) : (
				<ul>
					{Object.entries(product).map(([key, value], i) => {
						return typeof value === 'string' ? (
							<li key={i}>
								{key}: {value}
							</li>
						) : (
							''
						);
					})}
				</ul>
			)}
		</Layout>
	);
};

export default ProductDetails;
