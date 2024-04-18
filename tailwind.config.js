/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7E2",
        secondary: "#3A643B",
      },
      screens: {
        "custom-md-0": "416px",
        "custom-md-1": "860px",
        "custom-md-2": "1044px",
        "custom-md-4": "1188px",
      },
    },
  },
  plugins: [],
};
