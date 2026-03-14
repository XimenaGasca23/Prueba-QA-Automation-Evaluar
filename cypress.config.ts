
import { defineConfig } from "cypress"

export default defineConfig({
  retries: 2,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://candidato.evaluar.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts"
  }
})
