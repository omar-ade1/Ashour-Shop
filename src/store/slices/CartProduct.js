import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  initialState: [],
  name: "Silce",
  reducers: {
    AddToCart:  (state, action) => {
      // check if product in find in list or not
      const check = state.find((pro) => {
        if ( pro.id == action.payload.id) {
          return true
        }
      })
      // if product is not find add it to list
      if ( check === undefined) {
        state.push(action.payload)
      }
      
    },
    RemoveFromCart: (state,action) => {
      const filterState = state.filter((pro) => {
        return pro.id != action.payload.id 
      })
      // update state after filter
      return state = filterState
    },
    AddCount: (state,action) => {
      state.forEach((pro) => {
        pro.count = 1
      })
    },
    ChangeCount: (state, action) => {
      const { id, count } = action.payload;
      return state.map((product) => {
        if (product.id === id) {
          return { ...product, count };
        }
        return product;
      });
    }
    }

})

export const {AddToCart,RemoveFromCart,AddCount,ChangeCount} = Cart.actions

export default Cart.reducer