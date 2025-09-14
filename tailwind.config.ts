import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oak: {
          blue: "#0D47A1",      // deep accent (buttons/links)
          blueDark: "#08306b",
          gold: "#CDAA6A",      // headings/emphasis
          goldDark: "#A67C43",
          ink: "#1F2937",       // text (gray-800)
          inkSoft: "#4B5563",   // text secondary (gray-600)
          cream: "#F3F4F6",     // section background (very light gray)
          white: "#FFFFFF",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
