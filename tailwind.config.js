/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Poppins", "sans-serif"],
         },
         colors: {
            navy: "#160442",
         },
      },
   },
   plugins: [],
}
