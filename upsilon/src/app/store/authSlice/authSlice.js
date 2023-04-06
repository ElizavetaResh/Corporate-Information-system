import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:8080/api';

export const authUser = createAsyncThunk(
  'auth/authUser',
  async ({ username, password }) => {
    const response = await axios.get(`/api/auth?username=${username}&password=${password}`);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;