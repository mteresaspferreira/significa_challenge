import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryColor: {
          50: "#C2C2FF",
          100: "#9999FF",
          200: "#7070FF",
          300: "#4747FF",
          400: "#1F1FFF",
          500: "#0000ff",
          600: "#0000E0",
          700: "#0000B8",
          800: "#00007G",
          900: "#000066",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
