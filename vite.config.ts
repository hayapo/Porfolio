import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import Pages from 'vite-plugin-pages'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
