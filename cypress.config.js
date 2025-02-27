import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      console.log("Cypress setupNodeEvents initialized"); // Dummy usage to prevent errors
    },
  },
});
