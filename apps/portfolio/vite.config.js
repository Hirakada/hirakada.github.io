// apps/portfolio/vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { createClient } from '@supabase/supabase-js';

const createSlug = (title) => {
    if (!title) return ''; 
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};

export default defineConfig(async ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    const supabaseUrl = env.VITE_SUPABASE_URL;
    const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('Supabase URL or Anon Key is missing for sitemap generation. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment.');
        return {
            base: '/',
            plugins: [
                react(),
                Sitemap({
                    hostname: 'https://portfolio.hirakada.com/',
                    dynamicRoutes: [ 
                        '/cgroovy-wbad/',
                        '/blockchain-wbad/'
                    ],
                    generateRobotsTxt: false,
                }),
            ],
            build: {
                outDir: 'dist',
                emptyOutDir: true,
            },
            optimizeDeps: {},
        };
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const staticRoutes = [
        '/cgroovy-wbad/',
        '/blockchain-wbad/',
    ];

    let dynamicRoutes = [];
    try {
        const { data: projectsData, error: projectsError } = await supabase
            .from('projects')
            .select('title');

        if (projectsError) {
            console.error('Error fetching project titles for sitemap:', projectsError.message);
        } else if (projectsData) {
            dynamicRoutes = projectsData.map(project => `/detail/${createSlug(project.title)}`);
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
                dynamicRoutes: allRoutesForSitemap,
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