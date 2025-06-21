// D:\Portfolio\hirakada.github.io\apps\landingpage\vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createClient } from "@supabase/supabase-js";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  const supabaseUrl = env.VITE_SUPABASE_URL;
  const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

  const staticRoutes = [
    '/',
    '/project',
    '/doc',
    '/journey',
  ];

  let projectSlugs = [];
  let supabaseForSitemap = null;

  if (!supabaseUrl || !supabaseAnonKey) {
  } else {
    try {
      supabaseForSitemap = createClient(supabaseUrl, supabaseAnonKey);

      if (supabaseForSitemap && typeof supabaseForSitemap.from === 'function') {
        const { data: projectsData, error: projectsError } = await supabaseForSitemap
          .from('projects')
          .select('title');

        if (projectsError) {
        } else if (projectsData) {
          const createSlug = (title) => {
            return title
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-');
          };
          projectSlugs = projectsData.map(project => `/project/${createSlug(project.title)}`);
        }
      } else {
      }
    } catch (e) {
    }
  }

  const allDynamicRoutes = [...staticRoutes, ...projectSlugs];

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