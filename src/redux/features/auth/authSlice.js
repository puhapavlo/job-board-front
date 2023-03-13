import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false,
  isAuthenticated: false,
  // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: {},
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
