import { createSlice } from "@reduxjs/toolkit";
import { dutyLists } from "../../array/Array";

const initialState = JSON.parse(localStorage.getItem('dutyLI')) || dutyLists;
const DutyLI = createSlice({
    name: 'dutyLI',
    initialState,
    reducers: {
        removeUser: (state, action) => {
            const remove = state.filter(item => item.id !== action.payload);
            localStorage.setItem('dutyLI', JSON.stringify(remove))
            return remove
        },
    }
});
export const { removeUser } = DutyLI.actions;
export default DutyLI.reducer;