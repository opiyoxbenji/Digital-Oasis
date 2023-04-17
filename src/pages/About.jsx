// Where info about the website will be displayed

import { Link } from 'react-router-dom';

const About = () => {
	return (
		<section>
			<h3>About Us</h3>

			<p>
				Welcome to Digital Oasis, your one-stop-shop for the latest
				smartphones and laptops. We strive to provide our customers with
				the most cutting-edge technology at competitive prices. Our
				selection includes the latest models from top brands such as
				Apple, Samsung, Google, Dell, HP, and Lenovo.
			</p>
			<p>
				Our team of experts is committed to providing the highest level
				of customer service and technical support. We understand that
				technology can be overwhelming, which is why we are here to
				guide you through the process of selecting the perfect device to
				meet your needs. Our financing options also make it easy for you
				to access the latest technology without breaking the bank.
			</p>

			<p>
				Thank you for choosing Digital Oasis. We are passionate about
				helping you stay connected and productive in today's digital
				world. Shop with confidence knowing that you'll receive the
				assistance you need to make informed purchasing decisions.
			</p>

			<Link className='button' to='/'>
				Back Home
			</Link>
		</section>
	);
};
export default About;
