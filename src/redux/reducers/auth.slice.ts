import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIClient } from "../../Utilities/server/api-client";
import { API_LOGIN } from "../../Utilities/constants/api-routes";


const config = {
  name: "auth",
};
export const getLoginOTP: any = createAsyncThunk(
  `${config.name}/getLoginOTP`,
  async (data:any) => {
     const response= await APIClient.post(API_LOGIN,data);
     return response.data.data; 
  }
);



//CRUD

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    otpDetails: null,
    loader:false,
    userDetails:null as any
  },
  reducers: {
    resetOTP: (state) => {
      state.otpDetails = null;
    },
    setDetails:(state,payload)=>{
      state.userDetails = payload?.payload;
    },
    logout: () => {
      localStorage.removeItem("token"); // Clear localStorage
      localStorage.removeItem("persist:root"); // Clear sessionStorage
      // Reset state to initial state
      return { otpDetails: null, loader: false, userDetails: null };
    },
  },
  extraReducers(builder:any) {
    builder
     

      .addCase(getLoginOTP.fulfilled, (state:any, action:any) => {
        state.otpDetails = action.payload;
        state.loader = false;
      })
      .addCase(getLoginOTP.rejected, (state:any, action:any) => {
        state.otpDetails = null;
        state.loader = false;
      })
      .addCase(getLoginOTP.pending, (state:any, action:any) => {
        state.loader = true;
      })


  },
});

export const {
  resetOTP,setDetails,logout
} = authSlice.actions;

export default authSlice.reducer;
