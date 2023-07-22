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
      const existingProduct = state.products.find(
        (item) => item._id === product._id);

        if (existingProduct) {
            // If the product already exists in the cart, update its quantity
           return state;
          } else {
            // If the product is not in the cart, add it as a new entry
            state.products.push({ ...product, quantity: 1 });
            state.totalQuantity++;
            state.totalPrice += product.price;
          }
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((item) => item._id !== productId);
      state.totalQuantity--;
      state.totalPrice -= state.products.price;
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
    //   const existingProduct = state.products.find((item) => item._id === productId);

    //   if (existingProduct) {
    //     existingProduct.quantity++;
    //     state.totalQuantity++;
    //     state.totalPrice += existingProduct.price;
    //   }

      const cartItem = state.products.find((item) => item._id === productId);
      cartItem.quantity = cartItem.quantity + 1;
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
    //   const existingProduct = state.products.find(
    //     (item) => item.id === productId
    //   );

    //   if (existingProduct && existingProduct.quantity > 1) {
    //     existingProduct.quantity--;
    //     state.totalQuantity--;
    //     state.totalPrice -= existingProduct.price;
    //   }

    const cartItem = state.products.find((item) => item._id === productId);
      
      if(cartItem.quantity < 1){
        state.products = state.products.filter((item) => item._id !== productId);
        state.totalQuantity--;
        state.totalPrice -= state.products.price;
      }else {
        cartItem.quantity = cartItem.quantity - 1;
      }
    },

    removeAll: (state, action) => {
        state.products = []; 
        state.totalQuantity = 0; 
        state.totalPrice = 0; 
      },
  },
});

export const { addProduct, removeProduct, increaseQuantity, decreaseQuantity,removeAll } =
  cartSlice.actions;
export default cartSlice.reducer;
