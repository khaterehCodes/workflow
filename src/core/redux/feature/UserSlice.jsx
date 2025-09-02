import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../array/Array";
const loadUsers = () => {
  try {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveUsers = (users) => {
  try {
    localStorage.setItem("users", JSON.stringify(users));
  } catch {
  }
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: loadUsers(), 
    initialized: false, 
  },
  reducers: {
    initializeUsers: (state) => {
      if (!state.initialized) {
        state.list = users;
        saveUsers(state.list);
        state.initialized = true;
      }
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter((_, i) => i !== action.payload);
      saveUsers(state.list);
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
      saveUsers(state.list);
    },
  },
});

export const { deleteUser, addUser, initializeUsers } = userSlice.actions;
export default userSlice.reducer;
