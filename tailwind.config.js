/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
    './node_modules/@wavebooking/aqua-fusion/dist/**/*.{js,mjs}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--aqua-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--aqua-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--aqua-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--aqua-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--aqua-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--aqua-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--aqua-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--aqua-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--aqua-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--aqua-color-primary-900) / <alpha-value>)',
        },
        content: {
          primary: 'rgb(var(--aqua-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--aqua-text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--aqua-text-tertiary) / <alpha-value>)',
          disabled: 'rgb(var(--aqua-text-disabled) / <alpha-value>)',
          inverse: 'rgb(var(--aqua-text-inverse) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--aqua-bg-default) / <alpha-value>)',
          subtle: 'rgb(var(--aqua-bg-subtle) / <alpha-value>)',
          muted: 'rgb(var(--aqua-bg-muted) / <alpha-value>)',
          emphasis: 'rgb(var(--aqua-bg-emphasis) / <alpha-value>)',
          inverse: 'rgb(var(--aqua-bg-inverse) / <alpha-value>)',
        },
        line: {
          DEFAULT: 'rgb(var(--aqua-border-default) / <alpha-value>)',
          subtle: 'rgb(var(--aqua-border-subtle) / <alpha-value>)',
          emphasis: 'rgb(var(--aqua-border-emphasis) / <alpha-value>)',
        },
      },
      borderRadius: {
        ui: 'var(--aqua-radius-default)',
        'ui-sm': 'var(--aqua-radius-sm)',
        'ui-md': 'var(--aqua-radius-md)',
        'ui-lg': 'var(--aqua-radius-lg)',
        'ui-xl': 'var(--aqua-radius-xl)',
        'ui-2xl': 'var(--aqua-radius-2xl)',
        'ui-full': 'var(--aqua-radius-full)',
      },
      boxShadow: {
        ui: 'var(--aqua-shadow-default)',
        'ui-sm': 'var(--aqua-shadow-sm)',
        'ui-md': 'var(--aqua-shadow-md)',
        'ui-lg': 'var(--aqua-shadow-lg)',
        'ui-xl': 'var(--aqua-shadow-xl)',
      },
      zIndex: {
        dropdown: 'var(--aqua-z-dropdown)',
        sticky: 'var(--aqua-z-sticky)',
        fixed: 'var(--aqua-z-fixed)',
        backdrop: 'var(--aqua-z-backdrop)',
        modal: 'var(--aqua-z-modal)',
        popover: 'var(--aqua-z-popover)',
        tooltip: 'var(--aqua-z-tooltip)',
        toast: 'var(--aqua-z-toast)',
      },
      fontFamily: {
        sans: ['var(--aqua-font-sans)'],
        display: ['var(--aqua-font-display)'],
      },
    },
  },
  plugins: [],
};
