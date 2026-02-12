/// <reference types="node" />
import { defineConfig } from "vite";
// Provide `import.meta.url` typing for this config file
declare interface ImportMeta {
  url: string;
}
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
