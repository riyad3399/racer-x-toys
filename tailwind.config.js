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
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/img/background.jpg')",
        update: "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/img/update.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

