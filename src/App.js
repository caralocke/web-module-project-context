import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//Now that we've created our `ProductContext` we can import into our `App.js`.
import { ProductContext } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//In `App.js` there is a function called `addItem`. Finish writing the logic in this function to be able to add the given item to the shopping cart
	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			item
		])
	};
	
	return (
		<div className="App">
			<Navigation cart={cart} />
			{/* 1.) Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component. 2.) Next pass a value prop to your `Provider`. 3.) In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart. */}
			<ProductContext.Provider value={}>
				{/* Routes */}
				<Route exact path="/">
					{/*  Now that we're providing our products state and addItem function we can simplify our products route a bit. (Remove props) */}
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
