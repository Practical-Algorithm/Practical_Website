import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
});
