import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        navDivShadow: "0px 1px 2px 0px #1018280D",
        homeBtnShadow: "10px 14px 61.8px 0px #00000063",
      },
    },
  },
  plugins: [],
};
export default config;
