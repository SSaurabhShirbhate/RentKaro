import React, { createContext, useState, useContext } from 'react';

// Create a CartContext to manage the cart state
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to provide cart data throughout the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart state to hold the products

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevCart, product];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
