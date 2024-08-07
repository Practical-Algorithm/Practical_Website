import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  site: "https://example.com",
  integrations: [
    expressiveCode({
      theme: [
        "rose-pine-dawn",
        // , "slack-dark"
      ],
      plugins: [pluginLineNumbers()],
    }),
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
