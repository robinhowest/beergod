import { createContext, useState } from "react";

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verifica se o produto já está no carrinho
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Se existir, incrementa a quantidade
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Se não existir, adiciona ao carrinho com quantidade 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const contextValue = {
    cart,
    addToCart,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};