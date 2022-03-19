import { isFloat, isInt, isNum } from 'x-is-type';

/**
 * @param {Number} value
 * @param {String} currency
 */
const formatPrice = value => {
	return `${isFloat(value) ? value.toFixed(2) : value}`;
};

/**
 * @param  {...String} names
 */
const classNames = (...names) => {
	return names.filter(name => !!name).join(' ');
};

export { formatPrice, classNames };
