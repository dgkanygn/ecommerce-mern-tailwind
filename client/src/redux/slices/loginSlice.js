import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: localStorage.getItem("isLogin") || false,
  },
  reducers: {
    changeValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeValue } = loginSlice.actions;
export default loginSlice.reducer;
