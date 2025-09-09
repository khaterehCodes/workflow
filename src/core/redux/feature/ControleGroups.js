import { createSlice } from "@reduxjs/toolkit";
import { groupsControle } from "../../array/Array";

const initialState = JSON.parse(localStorage.getItem('controleGroup')) || groupsControle;
const ControleGroups = createSlice({
    name: 'controleGroup',
    initialState,
    reducers: {
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('controleGroup', JSON.stringify(remove))
            return remove
        },
    }
});
export const { removeUser } = ControleGroups.actions;
export default ControleGroups.reducer;