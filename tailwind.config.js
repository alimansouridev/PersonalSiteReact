module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundClip: {
        text: "text",
        "-webkit-text": "-webkit-text", // Adds Chrome compatibility
      },
    },
  },
  variants: {
    backgroundClip: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
