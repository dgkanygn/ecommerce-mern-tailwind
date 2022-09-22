import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "productCard",
  initialState: {
    value: "",
  },
  reducers: {
    changeValue: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeValue } = loginSlice.actions;
export default loginSlice.reducer;
