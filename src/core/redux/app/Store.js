import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../feature/UserSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
