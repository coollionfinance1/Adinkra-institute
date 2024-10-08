/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
      hind: ["Hind", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#C6A650",
        secondary: "#FCF976",
        third: "#212121",
        title: "#333333",
        bg: "#F0EDE7",
      },
    },
  },
  plugins: [],
});
