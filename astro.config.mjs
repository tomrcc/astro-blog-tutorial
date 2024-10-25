import { defineConfig } from "astro/config";
import bookshop from "@bookshop/astro-bookshop";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), bookshop()],
});
