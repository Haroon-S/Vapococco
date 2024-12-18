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
    addToCart: (state, action) => {
      const { id, name, price, quantity, image, size, color } = action.payload;
      const existingItem = state.items.find(
        item => item.id === id && item.size === size && item.color === color
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, quantity, image, size, color });
      }

      state.totalQuantity += quantity;
      state.totalAmount += price * quantity;
    },

    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;
      const index = state.items.findIndex(
        item => item.id === id && item.size === size && item.color === color
      );

      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity, size, color } = action.payload;
      const selectedItem = state.items.find(item => item.id === id && item.size === size && item.color === color);

      if (selectedItem) {
        state.totalQuantity += quantity - selectedItem.quantity;
        state.totalAmount += (quantity - selectedItem.quantity) * selectedItem.price;
        selectedItem.quantity = quantity;
      }
    },
  },
});

export const { addQuantity, subQuantity, addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
