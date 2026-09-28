/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'Plus Jakarta Sans'",
          "'Inter'",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "'SF Pro Display'",
          "-apple-system",
          "sans-serif"
        ],
        mono: [
          '"SF Mono"',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      letterSpacing: {
        'display': '-0.045em',
        'heading': '-0.03em',
        'card': '-0.02em',
        'eyebrow': '0.16em',
      },
      colors: {
        ink: {
          DEFAULT: '#141416',
          primary: '#141416',
          secondary: '#55555c',
          muted: '#86868b',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-subtle': 'rgba(0, 0, 0, 0.05)',
        },
        apple: {
          bg: "#fcfcfd",
          text: "#1d1d1f",
          secondary: "#86868b",
          subtle: "#a1a1a6",
          border: "rgba(0, 0, 0, 0.08)",
          card: "rgba(255, 255, 255, 0.72)",
          accent: "#0071e3"
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
