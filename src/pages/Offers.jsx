import { Link } from 'react-router-dom';

const Offers = () => {
	return (
		<div>
			<h4>Get 10% off</h4>
			<Link className='button' to='/'>
				Back Home
			</Link>
		</div>
	);
};
export default Offers;
