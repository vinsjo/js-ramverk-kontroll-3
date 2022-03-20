import React from 'react';
import { Link } from 'react-router-dom';
import { classNames, formatPrice } from '../../utils';
import Button from '../Button';
import ProductImage from '../ProductImage';
import styles from './ProductGridItem.module.css';

const ProductGridItem = ({ product, onAdd }) => {
	return (
		<div className={styles.container}>
			<Link className={styles.link} to={`/product/${product.id}`}>
				<div className={classNames(styles.section, styles.img)}>
					<ProductImage product={product} />
				</div>

				<div className={classNames(styles.section, styles.info)}>
					<h5 className="title">{product.title}</h5>
					<h5 className="price">${formatPrice(product.price)}</h5>
				</div>
			</Link>
			<Button className={styles.btn} onClick={onAdd}>
				Add To Cart
			</Button>
		</div>
	);
};

export default ProductGridItem;
