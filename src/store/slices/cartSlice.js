/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  totalQuantity: 0, // Total number of items
  totalPrice: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    subQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          // Remove the item completely if quantity becomes 0
          state.items = state.items.filter(item => item.id !== id);
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        }
      }
    },
    addToCart: (state, action) => {
      const { id, price, name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // Update the quantity and totalPrice of the existing item
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice += (quantity - existingItem.quantity) * price;

        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * price;
      } else {
        // Add the item if it doesn't exist
        state.items.push({
          id,
          name,
          price,
          quantity,
          totalPrice: quantity * price,
        });

        state.totalQuantity += quantity;
        state.totalPrice += quantity * price;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // Update the totals
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;

        // Remove the item from the cart
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addQuantity, subQuantity, addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
