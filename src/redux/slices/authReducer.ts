import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../app/models/UserInterface";
import defaultUser from "../../data/defaultUser";

interface AuthState {
  user: UserInterface;
  token: string | null;
}

const initialState: AuthState = {
  user: defaultUser,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<UserInterface>) {
      state.user = action.payload;
    },

    resetAuth(state) {
      state.user = initialState.user;
      state.token = initialState.token;
    },
  },
});

export const { setToken, setUser, resetAuth } = authSlice.actions;

export default authSlice.reducer;
