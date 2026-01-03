/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Horizon SACCO Brand Colors (from logo)
        brand: {
          // Dark Forest Green (main logo text)
          green: {
            50: '#e8f5ed',
            100: '#c5e6d1',
            200: '#9ed6b3',
            300: '#77c695',
            400: '#5ab97d',
            500: '#1B7340', // Primary brand green
            600: '#186639',
            700: '#145831',
            800: '#104a29',
            900: '#0c3c21',
          },
          // Golden Yellow (sun/person in logo)
          gold: {
            50: '#fef9e7',
            100: '#fdefc3',
            200: '#fce49b',
            300: '#fbd873',
            400: '#f9c84b',
            500: '#F7A824', // Primary brand gold
            600: '#de9620',
            700: '#c4841c',
            800: '#ab7318',
            900: '#916114',
          },
        },
        // Keep for backward compatibility
        primary: {
          50: '#e8f5ed',
          100: '#c5e6d1',
          200: '#9ed6b3',
          300: '#77c695',
          400: '#5ab97d',
          500: '#1B7340',
          600: '#186639',
          700: '#145831',
          800: '#104a29',
          900: '#0c3c21',
        },
        accent: {
          50: '#fef9e7',
          100: '#fdefc3',
          200: '#fce49b',
          300: '#fbd873',
          400: '#f9c84b',
          500: '#F7A824',
          600: '#de9620',
          700: '#c4841c',
          800: '#ab7318',
          900: '#916114',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Ethiopic', 'system-ui', 'sans-serif'],
        ethiopic: ['Noto Sans Ethiopic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
