import { createSlice } from "@reduxjs/toolkit";
import { controleArray } from "../../array/Array";

const initialState = JSON.parse(localStorage.getItem('controle')) || controleArray;
const ControleSet = createSlice({
    name: 'controle',
    initialState,
    reducers: {
        pushUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('controle', JSON.stringify(state))
        },
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('controle', JSON.stringify(remove))
            return remove
        },
    }
});
export const { pushUser, removeUser } = ControleSet.actions;
export default ControleSet.reducer;