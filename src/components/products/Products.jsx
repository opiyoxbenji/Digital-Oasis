import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
// import '.'

const Products = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
export default Products;

// const listItems = product_card.map(item => (
// 	<div className='card' key={item.id}>
// 		<div className='card_img'>
// 			<img src={item.thumbnail} alt='thumbnail' />
// 		</div>
// 		<div className='card_header'>
// 			<h2>{item.title}</h2>
// 			<p>{item.description}</p>
// 			<p className='price'>{item.price}</p>
// 			<div className='btn'>Add to cart</div>
// 		</div>
// 	</div>
// ));

// return (
// 	<div className='main_content'>
// 		<h3>Products</h3>
// 		{listItems}
// 	</div>
// );
