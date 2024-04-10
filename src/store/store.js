import { configureStore } from '@reduxjs/toolkit'
import Slice from "./slices/LikeProductSlice"
import Cart from "./slices/CartProduct"
const store = configureStore({

  reducer: {
    Slice: Slice,
    Cart: Cart
  }
})


/*
  reducer: {
    Products: ProductsSlice,
    Cart : cartSlice
  },
*/


export default store