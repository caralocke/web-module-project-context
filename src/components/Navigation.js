//First import the `useContext` hook and our `CartContext`
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
	//Next, pass our `CartContext` to the `useContext` hook and assign it to a variable named cart.
	const cart = useContext(CartContext)
	// Lastly we need to remove all instances of `props`
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
