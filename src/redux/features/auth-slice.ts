import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  phoneNumber: string;
  password: string;
};

const initialState: AuthState = {
  isAuth: false,
  phoneNumber: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      state.phoneNumber = "";
      state.password = "";
    },
    logIn: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = true;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
    },
  },
});
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
