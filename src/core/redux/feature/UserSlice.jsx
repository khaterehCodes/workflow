import { createSlice } from "@reduxjs/toolkit";
import { users as initialUsers } from "../../array/Array";
const loadUsers = () => {
  try {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : initialUsers;
  } catch {
    return initialUsers;
  }
};

const saveUsers = (users) => {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch {}
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: loadUsers(),
  },
  reducers: {
    deleteUser: (state, action) => {
      state.list = state.list.filter((_, i) => i !== action.payload);
      saveUsers(state.list);
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
      saveUsers(state.list);
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(u => u.email === action.payload.email);
      if (index !== -1) {
        state.list[index] = action.payload;
        saveUsers(state.list);
      }
    },
  },
});

export const { deleteUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
