import React from 'react';
import Layout from '../components/Layout';
import { useRecoilValue } from 'recoil';
import { productsState } from '/src/recoil/products';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const products = useRecoilValue(productsState);
	const { productId } = useParams();
	const product = products.find(
		product => product.id === parseInt(productId)
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
