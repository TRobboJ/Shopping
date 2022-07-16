import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   products: [],
    cartQuantity: 0,
    maxCartQuantity: 10,
    cartIsOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    toggleCart(state) {
        state.cartIsOpen = !state.cartIsOpen;
      },
    clearCart(state) {
      state.products = initialState.products
      state.cartQuantity = initialState.cartQuantity
    },
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingItem = state.products.find((product) => product.id === newProduct.id);
      state.cartQuantity++;
      
      //if the item exists in the cart already, add one to its quantity
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice +=  newProduct.price;
      }
      //otherwise add the entire item
      if (!existingItem) {
        const defaultQuantity = 1
        state.products.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          totalPrice: newProduct.price,
          quantity: defaultQuantity,
          imageUrl: newProduct.imageUrl
        });
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((product) => product.id === id);
      state.cartQuantity--;
      
      //if the item is the last of its type in the cart than remove it completely
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      }
      //otherwise, just remove one
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const {toggleCart, clearCart, addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;
