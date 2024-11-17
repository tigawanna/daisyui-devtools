/** @type {import('tailwindcss').Config} */
import shadcnTailwindPlugin from "./src/components/shadcn/lib/shadcn-tailwind-config";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    shadcnTailwindPlugin,
  ],

  daisyui: {
    themes: ["forest","cupcake","bumblebee"],
  },
};
