import { useRecoilState } from 'recoil';
import cartState from './atom';

const createCartItem = product => ({ product, count: 1 });

const useCart = () => {
	const [cart, setCart] = useRecoilState(cartState);

	const findCartItem = id => cart.find(({ product }) => product.id === id);
	/**
	 * @param {Object} product
	 * @param {Number} incrementValue
	 */
	const updateItemCount = (id, incrementValue) => {
		return cart
			.map(item =>
				item.product.id === id
					? { ...item, count: item.count + incrementValue }
					: item
			)
			.filter(item => item.count);
	};

	const add = product => {
		setCart(
			!findCartItem(product.id)
				? [...cart, createCartItem(product)]
				: updateItemCount(product.id, 1)
		);
	};
	const remove = ({ id }) => {
		if (!findCartItem(id)) return;
		setCart(updateItemCount(id, -1));
	};

	const clear = ({ id }) => {
		setCart(cart.filter(({ product }) => product.id !== id));
	};

	return {
		items: cart,
		get count() {
			return cart.reduce((total, item) => total + item.count, 0);
		},
		get totalPrice() {
			return cart.reduce(
				(total, item) => total + item.product.price * item.count,
				0
			);
		},
		add,
		remove,
		clear,
		reset: () => setCart([]),
	};
};

export default useCart;
