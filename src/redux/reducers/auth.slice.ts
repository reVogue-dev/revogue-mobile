import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIClient } from "../../Utilities/server/api-client";
import { API_OTP_GENERATE, API_OTP_VALIDATE } from "../../Utilities/constants/api-routes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  name: "auth",
};


export const getLoginOTP: any = createAsyncThunk(
  `${config.name}/getLoginOTP`,
  async (params: any) => {
    const response = await APIClient.post(API_OTP_GENERATE, { params });
    return response.data.data;
  }
);

export const validateOTP: any = createAsyncThunk(
  `${config.name}/validateOTP`,
  async (params: any) => {
    const response = await APIClient.post(API_OTP_VALIDATE, { params });
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
   
    logout: () => {

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
      })


      .addCase(validateOTP.fulfilled, (state: any, action: any) => {
        state.userDetails = action.payload;
        state.loader = false;
         AsyncStorage.setItem('token', action.payload.token);
      })
      .addCase(validateOTP.rejected, (state: any) => {
        state.otpDetails = null;
        state.loader = false;
      })
      .addCase(validateOTP.pending, (state: any) => {
        state.loader = true;
      });
  },
});

export const { resetOTP, setDetails,  logout } = authSlice.actions;
export default authSlice.reducer;
