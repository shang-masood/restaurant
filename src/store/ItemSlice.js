import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
  name: "food",
  initialState:{
    FoodItems:[]
  },
  reducers: {
      additemTolist: (state, action) => {
     state.FoodItems.push({
      text:action.payload
      

     })
     localStorage.setItem("food", JSON.stringify(state.value));
    },
    /*inc(state, action) {
      const increment = state.value.find(
        (food) => food.name === action.payload
      );
      if (increment) {
        increment.quantity += 1;
      }
    },
    dec(state, action) {
      const decrement = state.value.find(
        (food) => food.name === action.payload
      );
      if (decrement) {
        if (decrement.quantity > 0) {
          decrement.quantity -= 1;
        }
      }
    },
    toggle(state) {
      state.theme = !state.theme;
      localStorage.setItem("theme", state.theme);
    },*/
  },
});
export const getitems=state=>state.food.FoodItems
export const { additemTolist} = Slice.actions;
export default Slice.reducer;