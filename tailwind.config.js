/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        accent: ["Kanit", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"]
      },

      colors: {
        primary: "#E3B6FF",
        secondary: "#61A0FF",
        background: "#F2F6FF"
      },

      animation: {
        "fade-in": "fade-in .5s both",
        "slow-fade-in": "fade-in 1.75s both",
        "reveal-on-scroll": "slide-up 1.5s both"
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        "slide-up": {
          "0%": { transform: "translateY(3rem)", opacity: 0 },
          "33%": { opacity: 0.75 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(0)" }
        }
      }

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

