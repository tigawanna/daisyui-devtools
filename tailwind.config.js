/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// src/components
export default {
  darkMode: ["class", 'html[class~="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // prefix: "daisyui-devtools-",
  plugins: [require('daisyui'), require('@tailwindcss/container-queries'),],
  daisyui: {
    themes: false,
  }
};
