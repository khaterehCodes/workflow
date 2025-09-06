import { createSlice } from "@reduxjs/toolkit";
import { users as initialUsers } from "../../array/Array";

const loadUsers = () => {
  const stored = localStorage.getItem("users");
  return stored ? JSON.parse(stored) : initialUsers;
};

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: loadUsers(),
  },
  reducers: {
    deleteUser: (state, action) => {
      state.list = state.list.filter((user ,  i) => i !== action.payload);
      saveUsers(state.list);
    },
    addUser: (state, action) => {
      state.list = [...state.list, action.payload];
      saveUsers(state.list);
    },
    updateUser: (state, action) => {
      state.list = state.list.map((user) =>
        user.email === action.payload.email ? action.payload : user
      );
      saveUsers(state.list);
    },
  },
});

export const { deleteUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
