import React from 'react';
import Products from './Products';

const Store = ({products,addToCart}) => {
	return (
		<div>
			<Products 
				products={products}
				addToCart={addToCart}
			/>
		</div>
	);
}
 
export default Store;