// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const existing = state.find((item) => item.id === action.payload.id);
//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     clearCart: () => [],

//     // ✅ New reducer added for updating quantity
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       // console.log("Type of quantity:", typeof quantity); 
//       const item = state.find((item) => item.id === id);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
// export default cartSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // ✅ Add item or increase quantity
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ Remove item from cart
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // ✅ Clear the cart
    clearCart: () => [],

    // ✅ Update quantity of an item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
