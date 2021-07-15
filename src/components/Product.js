//Now that our `ProductContext` is now providing data we can finally consume it! To do so let's head over to our `Products` component and import the `useContext` hook as well as our `ProductContext`
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import React from 'react';

const Product = props => {
	//In the component, call the `useContext` hook and pass in the context object we want to use into it.
	const {product, addItem} = useContext(ProductContext)
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
