import { createSlice } from "@reduxjs/toolkit";
import { CRCAitem } from "../../array/Array";

const initialState = JSON.parse(localStorage.getItem('company')) || CRCAitem;
const CRCA = createSlice({
    name: 'company',
    initialState,
    reducers: {
        pushUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('company', JSON.stringify(state))
        },
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('company', JSON.stringify(remove))
            return remove
        },
    }
});
export const { pushUser, removeUser } = CRCA.actions;
export default CRCA.reducer;