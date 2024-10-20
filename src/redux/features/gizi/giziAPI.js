import { createAsyncThunk } from '@reduxjs/toolkit';

// const baseUrl = 'https://gis-gizi-be.vercel.app';

export const getData = createAsyncThunk(
  'data/getData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/laporan-gizi`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message); // Menangani error jika gagal
    }
  }
);

export const getDataById = createAsyncThunk(
  'data/getDataById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/laporan-gizi/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching ny id: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message); // Menangani error jika gagal
    }
  }
);

export const createData = createAsyncThunk(
  'data/createData',
  async (form, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/laporan-gizi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Error creating: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeData = createAsyncThunk(
  'data/removeData',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/laporan-gizi/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error deleting: ${response.statusText}`);
      }

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateData = createAsyncThunk(
  'data/updateData',
  async ({ forms, id }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/laporan-gizi/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(forms),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error updating: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
