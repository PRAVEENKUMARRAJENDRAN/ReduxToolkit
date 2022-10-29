import { createSlice } from "@reduxjs/toolkit";

//Defining the initial state
const initialState = {
  value: 0,
};
//slicer needs a name,initialState and operation(reducers) how the state are updated
//Usually in normal redux we always want to use immutably action, whereas we return the previous state
//whereas redux toolkit uses immer functions
//Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    amountAdded(state,action){
        state.value += action.payload

    }
  },
});

export const { increment, decrement, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
