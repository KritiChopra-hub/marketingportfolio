import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When building for GitHub Pages, set GITHUB_PAGES=true (done automatically
// by the deploy workflow). Local dev always uses '/'.
const base = process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
