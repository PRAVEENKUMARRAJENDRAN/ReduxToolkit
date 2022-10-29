//It is wrapper where it automatically imports necessary dev tools
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/dog/dogSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer

  },
  //caching purpose
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});
