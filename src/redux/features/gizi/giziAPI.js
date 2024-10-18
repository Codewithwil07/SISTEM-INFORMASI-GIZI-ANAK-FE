import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://gis-gizi-be.vercel.app';

export const getData = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/api/laporan-gizi`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
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
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseUrl}/api/laporan-gizi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error creating:', response.message);
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
