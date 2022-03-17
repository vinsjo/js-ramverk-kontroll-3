import { Suspense } from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from './recoil/cart';
import './App.css';
import Products from './components/Products';

const App = () => {
	const [cart, setCart] = useRecoilState(cartState);

	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Products />
			</Suspense>
		</div>
	);
};

export default App;
