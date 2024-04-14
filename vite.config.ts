import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig, loadEnv } from 'vite';
import dotenv from 'dotenv'

// Load environment variables from .env.production
dotenv.config({ path: '.env.production' });

// https://vitejs.dev/config/
export default ({mode}: {mode: string}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  const metaEnv = dotenv.config({ path: `.env.${mode}`}).parsed

  return defineConfig({
  // Config for react
  plugins: [react(),reactRefresh()],
  // Config for tailwind loading
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ],
    },
  },
  server: {
    port: process.env.NODE_ENV !== 'production' ? 5173 : 3000
  },
  define: {
    // Define config for production mode
    "process.env":  JSON.stringify(metaEnv),
    "import.meta.env.MODE": JSON.stringify(process.env.MODE),
    'import.meta.env': JSON.stringify(metaEnv),
  }
})}
