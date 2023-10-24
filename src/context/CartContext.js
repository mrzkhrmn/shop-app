import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialValue = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialValue);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updateTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedCartList },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (item) => item.id !== product.id
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      paylaod: { products: updatedCartList },
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    dispatch({ type: "UPDATE_TOTAL", payload: { total } });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    productCount: state.productCount,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Cant access to useCart CartContext!");
  return context;
};
