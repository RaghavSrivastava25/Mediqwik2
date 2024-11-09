/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#f0fff4',
        'app-primary': '#1a365d',
        'app-secondary': '#2b6cb0',
      },
    },
  },
  plugins: [],
};