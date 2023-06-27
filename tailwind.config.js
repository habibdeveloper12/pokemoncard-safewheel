/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        container: "1220px",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#013B94",
        para: "#8F8E8E",
        yellow: "#FEDA00",
        primaryBg: "#F0FBFF",
      },
      boxShadow: {
        cshadow: "2px 2px 5px 2px rgba(0,0,0,0.1)",
        cshadow2: "0px 0px 20px 0px rgba(0,0,0,0.2)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#013B94",
          para: "#8F8E8E",
          yellow: "#FEDA00",
          primaryBg: "#F0FBFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
