import { isFloat } from 'x-is-type';

/**
 * @param {Number} value
 * @param {String} currency
 */
const formatPrice = value => {
	return `${isFloat(value) ? value.toFixed(2) : value}`;
};

const createCartItem = product => {
	return { product: product, count: 1 };
};
/**
 * @param  {...String} names
 */
const classNames = (...names) => {
	return names.filter(name => !!name).join(' ');
};

export { formatPrice, createCartItem, classNames };
