/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      baijamjuree: ["Bai Jamjuree", "Sarabun", "sans-serif"],
      sriracha: ["Sriracha", "Sarabun", "sans-serif"],
      sarabun: ["Sarabun", "sans-serif"],
    },
    colors: {
      text: {
        primary: "rgba(var(--text-primary), <alpha-value>)",
        "primary_on-brand": "rgba(var(--text-primary_on-brand), <alpha-value>)",
        secondary: "rgba(var(--text-secondary), <alpha-value>)",
        secondary_hover: "rgba(var(--text-secondary_hover), <alpha-value>)",
        "secondary_on-brand":
          "rgba(var(--text-secondary_on-brand), <alpha-value>)",
        tertiary: "rgba(var(--text-tertiary), <alpha-value>)",
        tertiary_hover: "rgba(var(--text-tertiary_hover), <alpha-value>)",
        "tertiary_on-brand":
          "rgba(var(--text-tertiary_on-brand), <alpha-value>)",
        quaternary: "rgba(var(--text-quaternary), <alpha-value>)",
        "quaternary_on-brand":
          "rgba(var(--text-quaternary_on-brand), <alpha-value>)",
        disabled: "rgba(var(--text-disabled), <alpha-value>)",
        placeholder: "rgba(var(--text-placeholder), <alpha-value>)",
        placeholder_subtle:
          "rgba(var(--text-placeholder_subtle), <alpha-value>)",
        brand: {
          primary: "rgba(var(--text-brand-primary), <alpha-value>)",
          secondary: "rgba(var(--text-brand-secondary), <alpha-value>)",
          tertiary: "rgba(var(--text-brand-tertiary), <alpha-value>)",
          tertiary_alt: "rgba(var(--text-brand-tertiary_alt), <alpha-value>)",
        },
        success: "rgba(var(--text-success-primary), <alpha-value>)",
        warning: "rgba(var(--text-warning-primary), <alpha-value>)",
        error: "rgba(var(--text-error-primary), <alpha-value>)",
        white: "rgba(var(--text-white), <alpha-value>)",
      },
      border: {
        primary: "rgba(var(--border-primary), <alpha-value>)",
        secondary: "rgba(var(--border-secondary), <alpha-value>)",
        tertiary: "rgba(var(--border-tertiary), <alpha-value>)",
        disabled: "rgba(var(--border-disabled), <alpha-value>)",
        brand: {
          primary: "rgba(var(--border-brand-primary), <alpha-value>)",
          secondary: "rgba(var(--border-brand-secondary), <alpha-value>)",
          tertiary: "rgba(var(--border-brand-tertiary), <alpha-value>)",
        },
        error: "rgba(var(--border-error), <alpha-value>)",
      },
      bg: {
        primary: "rgba(var(--bg-primary), <alpha-value>)",
        primary_hover: "rgba(var(--bg-primary_hover), <alpha-value>)",

        secondary: "rgba(var(--bg-secondary), <alpha-value>)",
        secondary_hover: "rgba(var(--bg-secondary_hover), <alpha-value>)",

        tertiary: "rgba(var(--bg-tertiary), <alpha-value>)",

        error: {
          primary: "rgba(var(--bg-error-primary), <alpha-value>)",
          secondary: "rgba(var(--bg-error-secondary), <alpha-value>)",
          solid: "rgba(var(--bg-error-solid), <alpha-value>)",
        },
        success: {
          primary: "rgba(var(--bg-success-primary), <alpha-value>)",
          secondary: "rgba(var(--bg-success-secondary), <alpha-value>)",
          solid: "rgba(var(--bg-success-solid), <alpha-value>)",
        },
        warning: {
          primary: "rgba(var(--bg-warning-primary), <alpha-value>)",
          secondary: "rgba(var(--bg-warning-secondary), <alpha-value>)",
          solid: "rgba(var(--bg-warning-solid), <alpha-value>)",
        },
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
