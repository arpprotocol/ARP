/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neutral accents
        slate: {
          DEFAULT: '#64748B', // Primary - Slate Gray
        },
        taupe: {
          DEFAULT: '#A68A64', // Secondary - Warm Taupe
        },
        sage: {
          DEFAULT: '#8B9A7F', // Success - Muted Sage
        },
        coral: {
          DEFAULT: '#E57373', // Error - Soft Coral
        },
        // Text colors
        textLight: '#1A1A1A', // Black for day mode
        textDark: '#E0E0E0', // Soft white for night mode
        // Background colors
        bgLight: '#FFFFFF', // White for day mode
        bgDark: '#1C2526', // Dark charcoal for night mode
        // Solana accent (optional)
        solana: '#9945FF',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}; 