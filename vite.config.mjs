import { cpSync } from "node:fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "copy-verified-canary-build",
      closeBundle() {
        cpSync("site", "dist", { recursive: true });
      },
    },
  ],
});
