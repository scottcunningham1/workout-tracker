/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "surface": "var(--surface)",
        "accent": {
          "DEFAULT": "var(--accent)",
          "foreground": "var(--accent-foreground)"
        },
        "input": {
          "background": "var(--input-background)",
          "foreground": "var(--input-foreground)",
        }
      }
    },
  },
  plugins: [],
}

