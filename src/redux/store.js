import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";

export default configureStore({
  reducer: {
    user: userSlice,
    devTools: true,
  },
});