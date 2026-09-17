import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the root of the custom domain (amkaz.dev), so use an
  // absolute base. The public/CNAME file tells GitHub Pages which domain to
  // serve, and is copied verbatim into the build output (dist/CNAME).
  base: '/',
  plugins: [react()],
})
