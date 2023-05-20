/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'margin': 'margin',
        'inline': 'inline',
        'hidden': 'hidden',
        'width': 'width'
      },
      colors: {
        primary: {
          dark: "#65B000",
          light: "#CEEBA8",
          semi: "#78B526"
        },
        customGray: "#F1F2F9",
        blueCard: "#25637c",
        pizzaGraphic: "#71C4C3",
        customGreen: "#3BED04",
        customPurple: "#88A1E1",
        customRed: "#EE6E59"
      }
    },
  },
  plugins: [],
}
