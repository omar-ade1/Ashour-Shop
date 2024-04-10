import { createSlice } from "@reduxjs/toolkit";

const Silce = createSlice({
  initialState: [],
  name: "Silce",
  reducers: {
    // add And remove Products From Favourtie List
    AddProductToLike: (state, action) => {
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
      // if product is find remove it from list
      else {
        const filterState = state.filter((pro) => {
          return pro.id != action.payload.id 
        })
        // update state after filter
        return state = filterState
      }
    }
  }
})

export const { AddProductToLike } = Silce.actions

export default Silce.reducer