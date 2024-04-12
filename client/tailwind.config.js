/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: {
          light: "#4FE3C1",
          dark: "#444",
        },
        mySecondary: {
          light: "#674CB2",
          dark: "#444",
        },
        MyGray: {
          light: "#9FACBD",
          dark: "#444",
        },
        MyOrange: {
          light: "#FF9800",
          dark: "#444",
        },
        MyBlue: {
          light: "#6FCEFF",
          dark: "#444",
        },
      },
    },
  },
  plugins: [],
};
