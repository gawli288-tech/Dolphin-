import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel deploys to root by default
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    // This allows Vercel build environment to inject the key
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
});