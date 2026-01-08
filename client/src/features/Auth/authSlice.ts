
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  token: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout(state) {
      return initialState;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

// TODO: move refresh-token handling here once backend finalizes API
