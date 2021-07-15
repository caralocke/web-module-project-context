//To start create a new file in our contexts folder named `CartContext.js`, this context is going to be utilized by our `ShoppingCart` and `Navigation` component.
//Inside of our new `CartContext` import `createContext` and create a new context named `CartContext`.

import { createContext } from "react";

export const CartContext = createContext()