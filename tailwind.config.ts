import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef6ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a5ff',
          500: '#2d82f5',
          600: '#1762eb',
          700: '#134fd8',
          800: '#1541b0',
          900: '#173a8a',
          950: '#11255c',
        },
      },
      fontFamily: {
        display: ['Inter', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
        body:    ['Inter', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 2px 8px 0 rgba(45,130,245,0.10)',
        'brand-md': '0 4px 24px 0 rgba(45,130,245,0.15)',
        'brand-lg': '0 8px 40px 0 rgba(45,130,245,0.20)',
      },
    },
  },
  plugins: [],
};

export default config;
