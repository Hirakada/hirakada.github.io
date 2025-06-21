import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_'); 

  return {
    base: '/',
    plugins: [
      react(),

    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        external: ['react-router-dom'],
      },
    },
    optimizeDeps: {
    }
  };
});