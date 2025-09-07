import { createSlice } from "@reduxjs/toolkit";
import { SociétéUsers } from "../../array/Array";


const initialState = JSON.parse(localStorage.getItem('items')) || SociétéUsers;
const SociétéUser = createSlice({
    name: 'items',
    initialState,
    reducers: {
        pushUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('items', JSON.stringify(state))
        },
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('items', JSON.stringify(remove))
            return remove
        },
        editUser: (state, action) => {
            const edit = state.indexOf(item => item.id === action.payload.id);
            if (edit !== -1) {
                state[edit] = action.payload;
                localStorage.setItem('items', JSON.stringify(state))
            }
        }
    }
});
export const { pushUser, removeUser, editUser } = SociétéUser.actions;
export default SociétéUser.reducer;