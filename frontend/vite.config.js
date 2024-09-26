import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
        host: "localhost",
    },
    port: 3000,
    host: true,
  },
  plugins: [vue()],
})
