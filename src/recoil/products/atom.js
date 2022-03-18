import { atom } from 'recoil';
import products from '../../assets/products.json';

export default atom({
	key: 'ProductData',
	default: products,
});
