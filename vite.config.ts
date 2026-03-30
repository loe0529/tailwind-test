import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** GitHub 프로젝트 Pages: https://loe0529.github.io/tailwind-test/ */
const githubPagesBase = '/tailwind-test/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Actions에서만 base 고정. Vercel/로컬은 '/'
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase : '/',
})
