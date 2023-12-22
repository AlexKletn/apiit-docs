import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from '@nabla/vite-plugin-eslint';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), eslintPlugin(), svgr()],
  build: {
    terserOptions: {
      toplevel: true,
      format: {
        comments: false
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
