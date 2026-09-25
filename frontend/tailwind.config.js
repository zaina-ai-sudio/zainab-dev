/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette — CV ke pink/navy theme se inspired, lekin apna distinct look
        ink: "#0F1226", // deep indigo-black background
        surface: "#171B3A", // card/surface background
        surface2: "#1F2447", // thora lighter surface for hover states
        rose: "#FF6B9D", // primary pink accent
        violet: "#7C5CFC", // secondary violet accent
        mint: "#3DDC97", // tertiary success/highlight accent
        ivory: "#F5F3FF", // main text color
        muted: "#A8A4C7", // secondary/muted text
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"], // headings ke liye
        body: ["'Plus Jakarta Sans'", "sans-serif"], // body text ke liye
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #FF6B9D 0%, #7C5CFC 100%)",
        "grad-soft": "radial-gradient(circle at top left, rgba(124,92,252,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,107,157,0.25)",
        "glow-violet": "0 0 40px rgba(124,92,252,0.25)",
      },
    },
  },
  plugins: [],
};
