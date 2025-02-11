import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        xl: '12rem',
        lg: '8rem',
        md: '4rem',
        sm: '2rem',
      }
    }
  },
  plugins: [],
} satisfies Config;
