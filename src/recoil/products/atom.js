import { atom } from 'recoil';

export default atom({
	key: 'ProductData',
	default: [],
	effects: [
		({ setSelf }) => {
			setSelf(
				(async () => {
					try {
						const response = await fetch(
							'https://fakestoreapi.com/products',
							{
								method: 'GET',
								mode: 'cors',
							}
						);
						const data = await response.json();
						return data;
					} catch (e) {
						console.error(e);
						return [];
					}
				})()
			);
		},
	],
});
