import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/UserSlice"
import SociétéUser from "../feature/SociétéUser";
import CommissairesMember from '../feature/CommissairesMember'
import CRCA from '../feature/CRCA'
import ControleSet from '../feature/ControleSet'
const store = configureStore({
  reducer: {
    users: userReducer,
    items: SociétéUser,
    member: CommissairesMember,
    company: CRCA,
    controle: ControleSet
  },
});

export default store;
