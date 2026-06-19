/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#05070d',
          panel: '#0a0f1e',
          raised: '#0e1426',
          line: '#162038',
        },
        circuit: {
          DEFAULT: '#0ef0ff',
          dim: '#0a8fa8',
          electric: '#3b6eff',
          glow: '#7df9ff',
          deep: '#0b2a4a',
        },
        mist: {
          DEFAULT: '#aab4cc',
          soft: '#717d99',
          bright: '#e7ecf7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-sm': '0 0 8px rgba(14, 240, 255, 0.35)',
        'neon-md': '0 0 24px rgba(14, 240, 255, 0.25), 0 0 4px rgba(14, 240, 255, 0.4)',
        'neon-lg': '0 0 60px rgba(14, 240, 255, 0.18), 0 0 12px rgba(59, 110, 255, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(14, 240, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 240, 255, 0.06) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 240, 255, 0.12), transparent 60%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'trace-flow': 'trace-flow 3s linear infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.4)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'trace-flow': {
          '0%': { strokeDashoffset: 40 },
          '100%': { strokeDashoffset: 0 },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
