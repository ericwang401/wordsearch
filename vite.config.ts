import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    target: ['es2020'],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
