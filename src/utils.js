import { isFloat } from 'x-is-type';

/**
 * @param {Number} value
 * @param {String} currency
 */
const formatPrice = (value, currency = '$') => {
	return `${currency} ${isFloat(value) ? value.toFixed(2) : value}`;
};

export { formatPrice };
