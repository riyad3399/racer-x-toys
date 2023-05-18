/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
        "linear-gradient(to right bottom, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('/img/background.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

