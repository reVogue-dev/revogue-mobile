import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIClient } from "../../Utilities/server/api-client";
import { API_OTP_GENERATE } from "../../Utilities/constants/api-routes";
import * as Keychain from 'react-native-keychain';

const config = {
  name: "auth",
};

// Function to save token securely
const saveToken = async (token: string) => {
  await Keychain.setGenericPassword("authToken", token);
};



// Function to remove token securely
const removeToken = async () => {
  await Keychain.resetGenericPassword();
};

export const getLoginOTP: any = createAsyncThunk(
  `${config.name}/getLoginOTP`,
  async (params: any) => {
    const response = await APIClient.post(API_OTP_GENERATE, { params });
    return response.data.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    otpDetails: null,
    loader: false,
    userDetails: null as any,
    token: null,
  },
  reducers: {
    resetOTP: (state) => {
      state.otpDetails = null;
    },
    setDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      saveToken(action.payload); // Save token securely
    },
    logout: () => {
      removeToken(); // Clear secure token
      return { otpDetails: null, loader: false, userDetails: null, token: null };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getLoginOTP.fulfilled, (state: any, action: any) => {
        state.otpDetails = action.payload;
        state.loader = false;
      })
      .addCase(getLoginOTP.rejected, (state: any) => {
        state.otpDetails = null;
        state.loader = false;
      })
      .addCase(getLoginOTP.pending, (state: any) => {
        state.loader = true;
      });
  },
});

export const { resetOTP, setDetails, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
