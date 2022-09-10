/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { Roboto: "Roboto", MsMadi: "Ms Madi" },
      colors: {
        black: "#090c0f",
        orange: "#b99272",
        secondary: "#0E1317",
      },
      backgroundImage: {
        "main-bg":
          "url('https://bslthemes.com/kaffen/wp-content/uploads/2022/04/started_img_n5.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
