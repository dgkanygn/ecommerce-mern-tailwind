import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./slices/loginSlice";
import userReducer from "./slices/userSlice";
import tokenReducer from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    token: tokenReducer,
  },
});
