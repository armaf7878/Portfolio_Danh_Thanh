module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Gothic: ['Science Gothic', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        p: {
          900: '#11071f',
          800: '#10061e',
          700: '#120721',
          600: '#1a0b2e',
          500: '#4b2d8f',
          450: '#693B93',
          400: '#8B5CF6',
          300: '#A78BFA',
          200: '#C4B5FD',
          100: '#EDE9FE',
        },
        n: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#d1cce0',
          300: '#6EBFF4',
          400: '#4690D4',
        }
      }
    }
  },
  plugins: []
}
