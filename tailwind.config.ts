import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
          gradient: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        },
        secondary: '#8FE9D0',
        dark: {
          500: '#414141',
          600: '#2E2E2E',
        },
        light: '#FFFFFF',
        gray: '#777777',
      },
    },
  },
  plugins: [],
};
export default config;
