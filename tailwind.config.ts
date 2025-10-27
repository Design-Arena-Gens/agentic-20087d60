import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f8f7f4',
          100: '#ede9e0',
          200: '#ddd5c3',
          300: '#c8bb9f',
          400: '#b3a07e',
          500: '#a18b67',
          600: '#8d7757',
          700: '#75614a',
          800: '#5f5040',
          900: '#4f4337',
        },
        forest: {
          50: '#f3f6f3',
          100: '#e3e9e1',
          200: '#c8d4c5',
          300: '#a3b79f',
          400: '#7d9778',
          500: '#5f7b5a',
          600: '#4a6145',
          700: '#3c4f39',
          800: '#324030',
          900: '#2a3529',
        },
        cream: '#FFF8F0',
        orange: '#FF7A00',
      },
    },
  },
  plugins: [],
}
export default config
