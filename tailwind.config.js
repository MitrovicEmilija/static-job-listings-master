/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#5ba4a4',
        secondary: '#effafa',
        tertiary: '#eef6f6',
        'dark-grayish-cyan': '#7b8e8e',
        'very-dark-grayish-cyan': '#2c3a3a'
      }
    },
    screens: {
      xs: "375px",
      xl: "1440px"
    },
    backgroundImage: {
      "hero-pattern": "url('src/assets/images/bg-header-desktop.svg')"
    }
  },
  plugins: [],
}

