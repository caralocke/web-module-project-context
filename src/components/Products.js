//Now that our `ProductContext` is now providing data we can finally consume it! To do so let's head over to our `Products` component and import the `useContext` hook as well as our `ProductContext`
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import React from 'react';

// Components
import Product from './Product';

const Products = () => {
	//In the component, call the `useContext` hook and pass in the context object we want to use into it. When we do this, `useContext` is going to return value passed by our `ProductContext` Provider `value` prop. In our case we're getting back an object with two properties. A `products` property and a `addItem` property. We can go ahead and destructure those.

	const {products, addItem} = useContext(ProductContext)

//Now that we have all of the data we need we can refactor our `Products` component from using props. To do so we just need to remove every instance of `props`.
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
