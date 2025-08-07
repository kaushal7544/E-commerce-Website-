// src/redux/localStorage.js

export const loadCartState = () => {
    try {
      const serializedState = localStorage.getItem("cart");
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
      console.warn("Failed to load cart from localStorage:", e);
      return [];
    }
  };
  
  export const saveCartState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cart", serializedState);
    } catch (e) {
      console.warn("Failed to save cart to localStorage:", e);
    }
  };
  