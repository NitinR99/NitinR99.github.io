import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * The vite server configuration.
 */
export default defineConfig({
  // The Vite server configurations.
  base: "/",
  server: {
    // Open the browser once ready.
    open: true,

    // Explicitly defining the port the server should run on.
    port: 5173,
    host: "localhost",
    strictPort: true, // terminate the app if the above port is not available.
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    react(),
    // Custom plugin to load markdown files
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
});
