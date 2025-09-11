import { createSlice } from "@reduxjs/toolkit";

const loadFromLocal = (key, fallback = []) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : fallback;
};

const saveToLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
  users: loadFromLocal("users"),
  countries: loadFromLocal("countries"),
  products: loadFromLocal("products"),
  cities: loadFromLocal("cities"),
  evaluationMethods: loadFromLocal("evaluationMethods"),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { key, item } = action.payload;
      state[key].push(item);
      saveToLocal(key, state[key]);
    },
    deleteItem: (state, action) => {
      const { key, id } = action.payload;
      state[key] = state[key].filter((item) => item.id !== id);
      saveToLocal(key, state[key]);
    },
    updateItem: (state, action) => {
      const { key, item } = action.payload;
      state[key] = state[key].map((i) => (i.id === item.id ? item : i));
      saveToLocal(key, state[key]);
    },
  },
});

export const { addItem, deleteItem, updateItem } = dataSlice.actions;
export default dataSlice.reducer;
