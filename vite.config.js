import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- Tailwind ko upar rakhin
    react(), // <-- React ko niche
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 500,
      binaryInterval: 1000,
    },
  },
});
