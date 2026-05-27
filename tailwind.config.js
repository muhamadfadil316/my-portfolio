/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0B0F14',
        surface: '#0F1720',
        border: '#1f2a37',
        accent: '#5B8FB9',
        'accent-2': '#8A6FBF',
        muted: '#6b7280',
        text: '#e6eef6',
        'text-dim': '#93a0b2',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
