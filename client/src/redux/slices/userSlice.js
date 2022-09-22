import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("user")) || "",
  },
  reducers: {},
});

export default userSlice.reducer;
