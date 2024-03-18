// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Home2: resolve(__dirname, './src/Home 2 page/Home2.html'),
        Home3: resolve(__dirname, './src/Home 3 page/Home2.html'),
      },
    },
  },
})