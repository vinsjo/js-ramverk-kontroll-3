import { atom } from 'recoil';

export default atom({
	key: 'Products',
	default: [],
	effects: [
		({ setSelf }) => {
			setSelf(
				new Promise(async resolve => {
					const response = await fetch(
						'https://fakestoreapi.com/products',
						{
							method: 'GET',
							mode: 'cors',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					const data = await response.json();
					resolve(data);
				})
			);
		},
	],
});
