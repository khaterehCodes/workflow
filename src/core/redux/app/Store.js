import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/UserSlice"
import SociétéUser from "../feature/SociétéUser";
import CommissairesMember from '../feature/CommissairesMember'
import CRCA from '../feature/CRCA'
import ControleSet from '../feature/ControleSet'
import ControleGroups from '../feature/ControleGroups'
import DutyLI from '../feature/DutyLI'
const store = configureStore({
  reducer: {
    users: userReducer,
    items: SociétéUser,
    member: CommissairesMember,
    company: CRCA,
    controle: ControleSet,
    controleGroup:ControleGroups,
    dutyLI:DutyLI
  },
});

export default store;
