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
        bg: '#05060A',
        surface: '#0D1018',
        border: '#222036',
        accent: '#8B5CF6',
        'accent-2': '#C084FC',
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
