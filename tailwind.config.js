
import { Colors } from './constants/Colors'
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          text: Colors.light.text,
          opaco: Colors.light.opaco,
          error: Colors.light.error,
          success: Colors.light.success,
          disabledColor: Colors.light.disabledColor,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          text: Colors.dark.text,
          opaco: Colors.dark.opaco,
          error: Colors.dark.error,
          success: Colors.dark.success,
          disabledColor: Colors.dark.disabledColor,
        }
      }
    },
  },
  plugins: [],
}

