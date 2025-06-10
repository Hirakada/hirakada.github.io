import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        assetsDir: 'assets', 
        
        rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            projects: resolve(__dirname, 'projects/index.html'),
            projectDetail: resolve(__dirname, 'projects/project-detail.html'),
            docs: resolve(__dirname, 'docs/index.html'), 
            contact: resolve(__dirname, 'contact/index.html'),
        },
        },
    },
})