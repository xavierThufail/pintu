/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scrollIn 0.5s ease-in-out',
      },
      keyframes: () => ({
        scrollIn: {
          '0%': { marginTop: '-100vh', opacity: 0 },
          '100%': { marginTop: '0', opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}

