import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on GitHub Pages whether served from a
  // user site (user.github.io) or a project site (user.github.io/repo).
  base: './',
  plugins: [react()],
})
