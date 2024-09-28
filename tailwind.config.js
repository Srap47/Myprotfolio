module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff00ff',
        neonBlue: '#00ffff',
        neonGreen: '#00ff00',
      },
      animation: {
        pulseNeon: 'pulseNeon 1.5s infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff, 0 0 30px #ff00ff' },
          '50%': { textShadow: '0 0 15px #ff00ff, 0 0 25px #00ffff, 0 0 35px #ff00ff' },
        },
      },
    },
  },
  plugins: [],
}
