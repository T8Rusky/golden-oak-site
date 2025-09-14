
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        oak: {
          gold: "#CDAA6A",     // warm gold
          goldDark: "#9B7A44",
          leaf: "#4A7C59",     // warm green
          leafDark: "#2F6041",
          cream: "#FAF7F2",    // soft background
          ink: "#23313A"       // deep ink text
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
