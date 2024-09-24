/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // This ensures Tailwind scans all your Vue files for utility classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


