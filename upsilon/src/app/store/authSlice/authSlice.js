import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const authUser = createAsyncThunk(
  'user/authUser',
  async ({ username, password }) => {
    const response = await axios.post(`http://localhost:8080/api/user/auth?username=${username}&password=${password}`);
    return response.data;
  }
);

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const authSlice = createSlice({
  name: 'auth',
  initialState: usersAdapter.getInitialState(
    { loadingStatus: 'idle', error: null }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        usersAdapter.addOne(state, action.payload);
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error;
      });
  },
});

export const setUser = (state) => state.auth;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
