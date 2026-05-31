/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        bg: '#07111D',
        surface: '#0F1A28',
        border: '#233247',
        accent: '#4F8CFF',
        'accent-2': '#88D8FF',
        muted: '#708096',
        text: '#EAF1F8',
        'text-dim': '#9BA8B8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
