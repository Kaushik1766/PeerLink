import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userName: "Prateek jain",
    uid: "22BCS14627"
  },
  reducers: {
    setUserData: (state, action) => {
      state.userName = action.payload.userName;
      state.uid = action.payload.uid;
    },
    clearUserData: (state) => {
      state.userName = null;
      state.uid = null;
    },
  },
});

export const { setUserData, clearUserData } = loginSlice.actions;
export const selectUserName = (state) => state.login.userName;
export const selectUid = (state) => state.login.uid;

export default loginSlice.reducer;
