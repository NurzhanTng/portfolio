import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/shared/assets/images/'),
      '@const': path.resolve(__dirname, './src/shared/assets/constants/'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  tsconfig: './tsconfig.app.json',
});
