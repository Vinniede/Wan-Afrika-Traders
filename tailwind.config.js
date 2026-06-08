/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbff',
          100: '#d7f5fb',
          200: '#afeaf5',
          300: '#74d7eb',
          400: '#31bad7',
          500: '#1297b9',
          600: '#0d789a',
          700: '#0f607d',
          800: '#124f67',
          900: '#123f54',
          950: '#062635',
          blue: '#075E89',
          cyan: '#17B7D5',
        },
        dark: {
          primary: '#082D3F',
          secondary: '#113E4F',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F3FAFB',
        },
        accent: {
          green: '#1BAA74',
          amber: '#F4B84A',
          coral: '#F26D5B',
        },
      },
      boxShadow: {
        water: '0 18px 45px rgba(8, 45, 63, 0.12)',
        glow: '0 18px 50px rgba(23, 183, 213, 0.22)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
