import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18212f",
        muted: "#667085",
        line: "#d9e1ec",
        brand: {
          DEFAULT: "#0f766e",
          dark: "#0a5d57",
          soft: "#e7f7f4",
        },
        accent: "#2563eb",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 33, 47, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
