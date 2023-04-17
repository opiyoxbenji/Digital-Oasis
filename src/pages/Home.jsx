// Where all the books are going to be displayed
import { Outlet } from 'react-router-dom';
import Page from './Page';
import Products from '../components/products/Products';
// import StyledNavbar from '../components/Navbar/StyledNavbar';


const Home = () => {
	return (
		<>
			
			<Page />

			{/* <StyledNavbar /> */}

			<Products />
		</>
	);
};
export default Home;
