/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  totalQuantity: 0, // Total number of items
  total_price: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      const cartData = action.payload;

      state.items = cartData?.items;

      state.totalQuantity += cartData?.quantity || 0;
      state.total_price += (cartData?.item_price || 0) * (cartData?.quantity || 0);

      localStorage.setItem('cart', JSON.stringify(state));
    },
    addToCart: (state, action) => {
      const {
        variations,
        size,
        variation_name: variationName,
        item_size: itemSize,
        product_title: productTitle,
        product_image: productImage,
        item_price: itemPrice,
        quantity,
        product,
      } = action.payload;

      const existingItem = state.items.find(
        item => item.product === product && item.size === size && item.variations === variations
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          variations,
          size,
          variation_name: variationName,
          item_size: itemSize,
          item_price: itemPrice,
          product_title: productTitle,
          product_image: productImage,
          product,
          quantity,
        });
      }

      state.totalQuantity += quantity;
      state.total_price += itemPrice * quantity;

      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      // const { id, size, color } = action.payload;
      const { variations, size, product } = action.payload;
      const index = state.items.findIndex(
        item => item.product === product && item.size === size && item.variations === variations
      );

      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.total_price -= item.item_price * item.quantity;
        state.items.splice(index, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },

    addQuantity: (state, action) => {
      const { size, product, variations } = action.payload;
      const selectedItem = state.items.find(
        item => item.product === product && item.size === size && item.variations === variations
      );

      if (selectedItem) {
        selectedItem.quantity += 1;
        state.totalQuantity += 1;
        state.total_price += selectedItem.item_price;
      }
      // localStorage.setItem('cart', JSON.stringify(state));
    },
    subQuantity: (state, action) => {
      const { size, product, variations } = action.payload;
      const selectedItem = state.items.find(
        item => item.product === product && item.size === size && item.variations === variations
      );

      if (selectedItem) {
        selectedItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.total_price -= selectedItem.price;
      }
      // localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addQuantity, subQuantity, addToCart, removeFromCart, initializeCart } = cartSlice.actions;

export default cartSlice.reducer;
