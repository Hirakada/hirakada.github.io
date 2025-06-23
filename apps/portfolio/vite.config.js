import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createClient } from '@supabase/supabase-js';

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const supabaseUrl = env.VITE_SUPABASE_URL;
  const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key is missing for sitemap generation. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment.');
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const staticRoutes = [
    '/',
    '/project-cgroovy/',
  ];

  let dynamicRoutes = [];
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('descriptiveTitleSlug');

    if (error) {
      console.error('Error fetching project slugs for sitemap:', error.message);
    } else if (data) {
      dynamicRoutes = data.map(project => `/detail/${project.descriptiveTitleSlug}`);
    }
  } catch (e) {
    console.error('Failed to fetch dynamic routes from Supabase for sitemap:', e);
  }

  const allRoutesForSitemap = [...staticRoutes, ...dynamicRoutes];

  return {
    base: '/',
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://portfolio.hirakada.com/',
        routes: allRoutesForSitemap,
        generateRobotsTxt: false,
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    optimizeDeps: {},
  };
});