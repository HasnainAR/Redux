import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementCount(state, action) {
      return state + 1;
    },
    decrementCount(state, action) {
      return state - 1;
    }
  }
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount } = counterSlice.actions;
