/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dots: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        dot1: "dots 1.5s infinite 0s ease-in-out",
        dot2: "dots 1.5s infinite 0.3s ease-in-out",
        dot3: "dots 1.5s infinite 0.6s ease-in-out",
      }
    },
  },
  plugins: [],
}

