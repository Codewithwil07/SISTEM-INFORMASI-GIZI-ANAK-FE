import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Semua library dari node_modules akan di-pisah ke dalam 'vendor.js'
          }
        },
      },
    },
    chunkSizeWarningLimit: 10000,
  },
  server: {
    port: 3000, // Port default untuk server dev
    open: true, // Membuka browser secara otomatis saat server dijalankan
    proxy: {
      '/api': {
        target: 'https://gis-gizi-be.vercel.app', // Ganti dengan URL backend Anda
        changeOrigin: true, // Mengubah origin header
        // Tidak menggunakan rewrite di sini
      },
    },
  },
  plugins: [react()],
});
