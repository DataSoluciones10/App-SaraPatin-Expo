
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
          disabledColor: Colors.light.disabledColor,
          success: Colors.light.success,
          error: Colors.light.error,
          warning: Colors.light.warning,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          text: Colors.dark.text,
          opaco: Colors.dark.opaco,
          disabledColor: Colors.dark.disabledColor,
          success: Colors.dark.success,
          error: Colors.dark.error,
          warning: Colors.dark.warning,
        }
      }
    },
  },
  plugins: [],
}

