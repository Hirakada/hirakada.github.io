import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'HirakadaUI',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') {
          return 'index.es.js';
        }
        if (format === 'umd') {
          return 'index.umd.cjs';
        }
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
        },
      },
    },
  },
});