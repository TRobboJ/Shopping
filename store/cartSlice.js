import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cartQuantity: 0,
    changed: false,
    cartIsOpen: false,
  },
  reducers: {
    toggleCart(state) {
        state.cartIsOpen = !state.cartIsOpen;
      },
    replaceCart(state, action) {
      state.cartQuantity = action.payload.cartQuantity;
      state.products = action.payload.products;
    },
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingItem = state.products.find((product) => product.id === newProduct.id);
      state.cartQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.products.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          totalPrice: newProduct.price,
          quantity: 1,
          imageUrl: newProduct.imageUrl
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice +=  newProduct.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((product) => product.id === id);
      state.cartQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const {toggleCart, addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
