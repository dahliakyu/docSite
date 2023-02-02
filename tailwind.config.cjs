/** @type {import('tailwindcss').Config} */

function injectHex(variableName) {

    return `var(${variableName})` ;

  };


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

  extend: {
    textColor: {
      skin: {
        base: injectHex("--color-text-base"),
        accent: injectHex("--color-accent"),
        "sub-accent": injectHex("--color-sub-accent"),
        inverted: injectHex("--color-fill"),
        card: injectHex("--color-text-card"),
        "md-heading":injectHex("--color-md-heading"),
      },
    },
    backgroundColor: {
      skin: {
        fill: injectHex("--color-fill"),
        accent: injectHex("--color-accent"),
        inverted: injectHex("--color-text-base"),
        card: injectHex("--color-card"),
        "card-muted": injectHex("--color-card-muted"),
      },
    },
    backgroundImage:{
      "gradient-blue-ltr": injectHex("--blog-heading-gradient-stops-ltr"),
      "gradient-blue-rtl": injectHex("--blog-heading-gradient-stops-rtl"),
      "gradient-bold-font":injectHex("--blog-bold-gradient"),
    },
    outlineColor: {
      skin: {
        fill: injectHex("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: injectHex("--color-border"),
        fill: injectHex("--color-text-base"),
        accent: injectHex("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: injectHex("--color-text-base"),
        accent: injectHex("--color-accent"),
      },
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["'Exo 2'", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
