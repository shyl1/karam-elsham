import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve:{
    alias: {
      '@' : path.resolve(__dirname , './src'),
      '@assets' : path.resolve(__dirname , './src/assets'),
      '@components' : path.resolve(__dirname , './src/components'),
      "@API" : path.resolve(__dirname , './src/API'),
      "@constants" : path.resolve(__dirname , './src/constants'),
      "@forms": path.resolve(__dirname , './src/forms'),
      "@hooks" : path.resolve(__dirname , './src/hooks'),
      "@pages": path.resolve(__dirname , './src/pages'),
      "@routers" : path.resolve(__dirname , './src/routers'),
      "@UI": path.resolve(__dirname , './src/UI'),
      "@store": path.resolve(__dirname , './src/store'),
      "@feedback": path.resolve(__dirname , './src/feedback'),
    }
  },
})
