import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalPrice += product.price;
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.filter((item) => item.id !== productId);

      return existingProduct;
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity++;
        state.totalQuantity++;
        state.totalPrice += existingProduct.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find((item) => item.id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        state.totalQuantity--;
        state.totalPrice -= existingProduct.price;
      }
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
