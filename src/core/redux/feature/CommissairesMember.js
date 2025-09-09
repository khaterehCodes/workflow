import { createSlice } from "@reduxjs/toolkit";
import { commissairesUsers } from "../../array/Array";


const initialState = JSON.parse(localStorage.getItem('member')) || commissairesUsers;
const CommissairesMember = createSlice({
    name: 'member',
    initialState,
    reducers: {
        pushUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('member', JSON.stringify(state))
        },
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('member', JSON.stringify(remove))
            return remove
        },
    }
});
export const { pushUser, removeUser } = CommissairesMember.actions;
export default CommissairesMember.reducer;