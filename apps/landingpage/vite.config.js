import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

import { createClient } from "@supabase/supabase-js/dist/main/index.js"; 

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

  if (supabaseUrl && supabaseAnonKey) {
    try {
      // Use the directly imported createClient
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('title');

      if (projectsError) {
        console.error("Error fetching projects for sitemap:", projectsError);
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
    } catch (e) {
      console.error("Failed to initialize Supabase or fetch data for sitemap:", e);
    }
  } else {
    console.warn("Supabase URL or ANON Key not provided. Dynamic sitemap routes will not be generated.");
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