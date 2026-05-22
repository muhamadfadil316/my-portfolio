/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#080C14',
        surface: '#0D1220',
        border: '#1a2340',
        accent: '#4F8EF7',
        'accent-2': '#7C5CF6',
        muted: '#4a5568',
        text: '#e2e8f0',
        'text-dim': '#8892a4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
