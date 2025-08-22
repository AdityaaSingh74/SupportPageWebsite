/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // JARVIS color palette
        jarvis: {
          blue: {
            50: '#e6f7ff',
            100: '#bae7ff',
            200: '#91d5ff',
            300: '#69c0ff',
            400: '#40a9ff',
            500: '#1890ff',
            600: '#096dd9',
            700: '#0050b3',
            800: '#003a8c',
            900: '#002766',
          },
          cyan: {
            50: '#e6fffb',
            100: '#b5f5ec',
            200: '#87e8de',
            300: '#5cdbd3',
            400: '#36cfc9',
            500: '#13c2c2',
            600: '#08979c',
            700: '#006d75',
            800: '#00474f',
            900: '#002329',
          },
          matrix: {
            green: '#00ff00',
            cyan: '#00ffff',
            blue: '#0099ff',
          }
        },
        // Custom background colors
        'bg-dark': '#0a0a0a',
        'bg-panel': 'rgba(19,27,42,0.93)',
        'border-glow': 'rgba(0,255,255,0.4)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'broken-flicker': 'broken-flicker 0.2s infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'pulse-cyan': 'pulse-cyan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-rain': 'matrix-rain 2s linear infinite',
        'holographic': 'holographic 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'broken-flicker': {
          '0%': { opacity: '0.1' },
          '25%': { opacity: '0.8' },
          '40%': { opacity: '0.2' },
          '60%': { opacity: '1' },
          '75%': { opacity: '0.4' },
          '100%': { opacity: '0.1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(89vh)', opacity: '0' },
        },
        'pulse-cyan': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'holographic': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5)',
            filter: 'brightness(1.2)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'holographic-gradient': 'linear-gradient(45deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.3), rgba(255, 255, 0, 0.3), rgba(0, 255, 255, 0.3))',
        'matrix-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(0, 20, 40, 0.9))',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.5)',
        'neon-strong': '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        },
        '.glass-morphism': {
          background: 'rgba(0, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 255, 255, 0.2)',
        },
        '.matrix-text': {
          fontFamily: '"Courier New", monospace',
          color: '#00ff00',
          textShadow: '0 0 5px #00ff00',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}