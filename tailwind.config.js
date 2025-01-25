/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          DEFAULT: 'var(--text)',
          light: '#1e293b',
          dark: '#f8fafc',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: '#6366f1',
          dark: '#818cf8',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          light: '#f1f5f9',
          dark: '#1e293b',
        },
        accent: '#EC4899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};