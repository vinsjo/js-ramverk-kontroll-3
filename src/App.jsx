import { Suspense } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';

const App = () => {
	return (
		<div className="App">
			<h1 className="logo">rss</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<ProductGrid />
			</Suspense>
		</div>
	);
};

export default App;
