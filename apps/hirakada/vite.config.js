// apps/hirakada/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap'; 

export default defineConfig(async ({ mode }) => {
  const staticRoutes = [
    '/',
    '/doc',
    '/journey'
  ];

  const allRoutesForSitemap = [...staticRoutes];

  return {
    base: '/',
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://hirakada.com/',
        dynamicRoutes: allRoutesForSitemap, 
        generateRobotsTxt: false,
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});