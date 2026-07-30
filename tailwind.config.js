/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          accent: '#6366f1'
        },
        slate: {
          950: '#080b11',
          900: '#0f141f',
          850: '#141a29',
          800: '#1e2638',
          700: '#2d374d',
          600: '#475569',
          400: '#94a3b8',
          300: '#cbd5e1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
