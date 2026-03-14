
Cypress.Commands.add("waitForDashboard", () => {
  cy.url({ timeout: 20000 }).should("include", "dashboard")
})

declare global {
  namespace Cypress {
    interface Chainable {

      waitForDashboard(): Cypress.Chainable<void>

      loginCandidate(): Cypress.Chainable<void>

    }
  }
}

Cypress.Commands.add("loginCandidate", () => {

  cy.session("candidato", () => {

    cy.visit("/auth/login/controlled/basic")

    cy.get('h1') 
    

    const email = `test${Date.now()}@mail.com`

    //cy.get('input[name="firstName"]').type("Test")
    //cy.get('input[name="lastName"]').type("QA")
    cy.get('input[name="email"]').type(email)

    cy.get('button[type="submit"]').click()

    cy.contains("Evaluaciones", { timeout: 20000 })
      .should("be.visible")

  })

})

export {}
