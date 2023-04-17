import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

const StyledNavbar = () => {
	return (
		<nav className='navbar'>
			<NavLink
				to='/'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}
			>
				Home
			</NavLink>
			<NavLink
				to='/cart'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}
			>
				Cart
			</NavLink>
			{/* <NavLink
				to='/offers'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}
			>
				Offers
			</NavLink> */}
			<NavLink
				to='/about'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}
			>
				About
			</NavLink>
		</nav>
	);
};
export default StyledNavbar;
