import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/Login/loginSlice.js"

export default configureStore({
  reducer: { 
    login: loginSlice
 }
});
