import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// **Async Thunks**
// Thunk untuk login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://gis-gizi-be.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: 'include', // Mengirim cookie dalam request
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      if (data.msg) {
        localStorage.setItem('isAuthenticated', 'true');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state for auth

// **Slice**
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = localStorage.removeItem('isAuthenticated');
      state.isAuthenticated = false; 
    },
  },
  extraReducers: (builder) => {
    builder
      // **Login User**
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
