/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { 
    extend: { 
      colors: { 
        primary: '#0088FF',
        'primary-dark': '#0066CC',
        'primary-light': '#E6F3FF',
        'surface': '#FFFFFF',
        'surface-hover': '#F8FAFC',
        'text': {
          primary: '#1E293B',
          secondary: '#64748B',
          light: '#94A3B8'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    } 
  },
  plugins: [],
}
