import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint'; // Ensure the import is correct

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({ // Add ESLint plugin configuration
      include: ['./src/**/*.jsx', './src/**/*.js']
    })
  ]
});
