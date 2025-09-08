import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/UserSlice"
import SociétéUser from "../feature/SociétéUser";
import CommissairesMember from '../feature/CommissairesMember'
import CRCA from '../feature/CRCA'
const store = configureStore({
  reducer: {
    users: userReducer,
    items: SociétéUser,
    member: CommissairesMember,
    company: CRCA
  },
});

export default store;
