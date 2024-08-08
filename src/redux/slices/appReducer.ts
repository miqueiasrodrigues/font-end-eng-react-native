import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseInterface } from "../../app/models/ResponseInterface";
import { LanguageType } from "../../app/models/types/LanguageType";

interface AppState {
  snackbar: ResponseInterface;
  response: ResponseInterface;
  language: LanguageType;
}

const initialState: AppState = {
  snackbar: {
    status: "success",
    message: "",
  },

  response: {
    status: "success",
    message: "",
    data: null,
  },

  language: "pt",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setResponse(state, action: PayloadAction<ResponseInterface>) {
      state.response = action.payload;
    },

    resetResponse(state) {
      state.response = initialState.response;
    },

    setSnackbar(state, action: PayloadAction<ResponseInterface>) {
      state.snackbar = {
        ...state.snackbar,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    resetSnackbar(state) {
      state.snackbar = initialState.snackbar;
    },

    setLanguage(state, action: PayloadAction<LanguageType>) {
      state.language = action.payload;
    },
  },
});

export const { setResponse, resetResponse, setSnackbar, resetSnackbar, setLanguage } =
  appSlice.actions;

export default appSlice.reducer;
