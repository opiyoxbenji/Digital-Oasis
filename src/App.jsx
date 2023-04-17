import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Offers from './pages/Offers';
import SharedLayout from './pages/SharedLayout';
import Header from './components/head_footer/Header';
import Footer from './components/head_footer/Footer'

import './App.css';


function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className='container '>
			<BrowserRouter>
				<nav></nav>
				{/* <Header /> */}
				<Routes>
					<Route path='/' element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path='/offers' element={<Offers />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
