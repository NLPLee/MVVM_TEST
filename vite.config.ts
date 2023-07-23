import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url"
import { viteRequire } from 'vite-require'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteRequire()],
  server: {
    proxy: {
      '/mapi': {
        target: '',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  }
})
