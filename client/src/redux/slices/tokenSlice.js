import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: localStorage.getItem("token") || "",
  },
  reducers: {},
});

export default tokenSlice.reducer;
