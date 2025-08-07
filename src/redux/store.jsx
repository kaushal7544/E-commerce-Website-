// // src/redux/store.js
// // import { configureStore } from "@reduxjs/toolkit";
// // import cartReducer from "./cartSlice";

// // export const store = configureStore({
// //   reducer: {
// //     cart: cartReducer,
// //   },
// // });


// // src/redux/store.js

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import { loadCartState, saveCartState } from "./localStorage";

// const preloadedState = {
//   cart: loadCartState(),
// };

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
//   preloadedState,
// });

// // Save to localStorage on any cart state change
// store.subscribe(() => {
//   saveCartState(store.getState().cart);
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadCartState, saveCartState } from "./localStorage";

const preloadedState = {
  cart: loadCartState(),
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export default store;
