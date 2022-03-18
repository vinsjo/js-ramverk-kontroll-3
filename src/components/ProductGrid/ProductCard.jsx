import React from 'react';
import { formatPrice } from '../../utils';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
	return (
		<div className={styles.container}>
			<img
				className={styles.image}
				src={product.image}
				alt={product.title}
			/>
			<div className={styles.info}>
				<h5 className={styles.title}>{product.title}</h5>

				<h5 className={styles.price}>{formatPrice(product.price)}</h5>
			</div>
		</div>
	);
};

export default ProductCard;
