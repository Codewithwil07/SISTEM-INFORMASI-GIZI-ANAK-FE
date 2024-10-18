import { createSlice } from '@reduxjs/toolkit';
import { createData, getData } from './giziAPI';

const GiziSlice = createSlice({
  name: 'gizi',
  initialState: {
    data: [], // Menyimpan data gizi
    status: 'idle', // Status permintaan data: 'idle', 'loading', 'succeeded', 'failed'
    error: null, // Menyimpan pesan error jika gagal
  },
  reducers: {
    setGiziData: (state, action) => {
      state.data = action.payload; // Mengubah data gizi
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading'; // Menandakan bahwa data sedang dimuat
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'success'; // Data berhasil didapatkan
        state.data = action.payload; // Menyimpan data yang didapatkan
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'failed'; // Gagal memuat data
        state.error = action.payload; // Menyimpan pesan error
      })
      .addCase(createData.pending, (state) => {
        state.status = 'loading'; // Menandakan bahwa data sedang dimuat
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.status = 'success'; // Data berhasil
        state.data = action.payload; // Menyimpan data yang
      })
      .addCase(createData.rejected, (state, action) => {
        state.status = 'failed'; // Gagal memuat data
        state.error = action.payload; // Menyimpan pesan error
      });
  },
});

export const { setGiziData } = GiziSlice.actions;

export default GiziSlice.reducer;
