import { Link } from 'react-router-dom';

const Cart = () => {
	return (
		<div>
			<h3>Items in your cart</h3>

			<Link className='button' to='/'>
				Back Home
			</Link>
		</div>
	);
};
export default Cart;
