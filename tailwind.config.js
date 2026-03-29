/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  /* 기존 style.css / responsive.css 리셋과 충돌하지 않게 */
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      maxWidth: {
        page: '1920px',
      },
    },
  },
  plugins: [],
}
