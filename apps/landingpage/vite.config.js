import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(async ({ mode }) => {

  const staticRoutes = [
    '/',
    '/project',
    '/doc',
    '/journey',
  ];

  const allDynamicRoutes = [...staticRoutes];

  return {
    base: '/',
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://hirakada.com/',
        dynamicRoutes: allDynamicRoutes,
        generateRobotsTxt: false,
      }),
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