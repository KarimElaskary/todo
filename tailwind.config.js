/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Almarai, sans-serif',
      secondary: 'Source Code Pro, monospace',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xs: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        body: '#040C18',
        white: '#fff',
        pink: 'pink',
        transparent: 'transparent',
      },
      colors: {
        buttonColor: '#FF8413',
        primary: '#00B860',
        secondary: '#FF8413',
        dimWhite: '#81AFDD',
      },
      backgroundColor: {
        primary: '#FF8413',
      },
    },
  },
  plugins: [],
};
