/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F4EA',
          200: '#F1E7D3',
          300: '#E5D3B3',
        },
        forest: {
          700: '#1C3F32',
          800: '#143026',
          900: '#0D211A',
          950: '#081510',
        },
        gold: {
          300: '#E4C580',
          400: '#D4AF37',
          500: '#C59B27',
          600: '#A37E1B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 20px 45px -15px rgba(13, 33, 26, 0.08)',
        'elegant-lg': '0 25px 60px -15px rgba(13, 33, 26, 0.16)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
