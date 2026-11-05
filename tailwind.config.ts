import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#242424",
        accent: "#FF4D5A",
        highlight: "#FF8087",
        muted: "#888888",
        // Dienstensite: licht en vriendelijk
        cream: "#FAF7F2",
        sand: "#F1EBE1",
        ink: "#1F2A37",
        brand: {
          50: "#EEF7F5",
          100: "#D6EDE8",
          500: "#2A8C7E",
          600: "#1F7366",
          700: "#195C52",
        },
        warm: "#E8A25C",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
