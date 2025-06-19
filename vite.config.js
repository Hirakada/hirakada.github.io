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
    // No console.error here to avoid clutter during normal operation
    // The sitemap will just be static, which is a graceful fallback
  } else {
    try {
      supabaseForSitemap = createClient(supabaseUrl, supabaseAnonKey);

      if (supabaseForSitemap && typeof supabaseForSitemap.from === 'function') {
        const { data: projectsData, error: projectsError } = await supabaseForSitemap
          .from('projects')
          .select('title');

        if (projectsError) {
          // No console.error here to avoid clutter during normal operation
          // The sitemap will just be static, which is a graceful fallback
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
        // No console.warn here to avoid clutter during normal operation
        // The sitemap will just be static, which is a graceful fallback
      }
    } catch (e) {
      // No console.error here to avoid clutter during normal operation
      // The sitemap will just be static, which is a graceful fallback
    }
  }

  const allDynamicRoutes = [...staticRoutes, ...projectSlugs];

  return {
    base: '/',
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://hirakada.github.io/',
        dynamicRoutes: allDynamicRoutes,
        generateRobotsTxt: true,
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});