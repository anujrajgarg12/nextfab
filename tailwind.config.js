/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#000000",
        "accent-2": "#c91c1c",
        "accent-2-light": "rgb(var(--color-base-accent-2-light))",
        "accent-2-dark": "rgb(var(--color-base-accent-2-dark))",
        "accent-2-darker": "rgb(var(--color-base-accent-2-darker))",
        "accent-3": "rgb(var(--color-base-accent-3))",
        "accent-4": "rgb(var(--color-base-accent-4))",
        "body-base": "rgb(var(--color-base-text))",
        "background-1": "rgb(var(--color-base-background-1))",
      },
      fontFamily: {
        body: "'Lato', sans-serif",
        heading: "'Oswald', sans-serif",
      },
      borderWidth: {
        default: "var(--buttons-border-width)",
      },
      borderRadius: {
        button: "6px",
        media: "6px",
        input: "6px",
        card: "20px",
      },
    },
  },
  plugins: [],
};
