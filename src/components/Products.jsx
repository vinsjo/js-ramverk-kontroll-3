import React from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '../recoil/products';
import styles from './Products.module.css';

const Products = () => {
	const products = useRecoilValue(productsState);
	return (
		<div className={styles.grid}>
			{products.map((product, i) => (
				<div key={i} className={styles['grid-item']}>
					<img
						className={styles.image}
						src={product.image}
						alt={product.title}
					/>
					<h4>{product.title}</h4>
					<h5>{product.price} dollarz</h5>
				</div>
			))}
		</div>
	);
};

export default Products;
