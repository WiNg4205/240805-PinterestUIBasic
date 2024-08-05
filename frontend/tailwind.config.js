/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: "#e4002a",
        search: "#f1f1f1",
        icon: "#767676"
      },
    },
  },
  plugins: [],
}

