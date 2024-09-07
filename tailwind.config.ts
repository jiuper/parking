import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      'black-transparent': {
        70: '#000000B2',
      },
      gray: '#929292',
      steel: '#666D97',
      red: 'red',
      primary: '#F9B004',
      'primary-accent': '#9A8452',
      secondary: '#D9D9D9',
      'secondary-accent': '#E4E4E4',
      additional: '#1D1D1D',
      'additional-accent': '#191919',
      'additional-accent-70': '#252525',
      "grey-1": "#f1f1f1",
      "grey-2": "#ccc",
      "grey-3": "#A7A7A7",
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.jpeg')",
        'about-us': "url('/images/about-us.jpeg')",
        'about-place': "url('/images/about-place.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config
