import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/UserSlice"
import SociétéUser from "../feature/SociétéUser";
const store = configureStore({
  reducer: {
    users: userReducer,
    items: SociétéUser,
  },
});

export default store;
