import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ProductsProvider } from './contexts/products.context';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart.context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
		{/* </BrowserRouter> */}
	</React.StrictMode>
);
