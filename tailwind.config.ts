import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        oxblood: {
          DEFAULT: '#6B1F18',
          dark: '#4A1410',
          light: '#8B2A20',
        },
        cream: '#F5EDE0',
        kraft: '#A88556',
        ink: '#1A1614',
        caramel: '#9C6B3E',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
