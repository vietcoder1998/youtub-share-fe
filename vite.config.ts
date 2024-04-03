import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default ({mode}: {mode: string}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  console.log('process.env', process.env);

  return defineConfig({
  plugins: [react(),reactRefresh()],
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
  }
})}
