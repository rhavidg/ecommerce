import { createContext, useMemo, useState } from 'react';

export const CartContext = createContext({});

export function CartStorage({ children }) {
  const [cart, setCart] = useState([]);

  function add(product) {
    setCart(cart.concat(product));
  }

  function clearCart() {
    setCart([]);
  }
  const value = useMemo(
    () => ({
      cart,
      setCart,
      add,
      clearCart,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
