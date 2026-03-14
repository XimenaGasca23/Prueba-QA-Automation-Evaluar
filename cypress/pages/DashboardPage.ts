
class DashboardPage { 

  visit() {
    cy.visit('process/63bed1d4-2e0f-4899-a424-0015ab7dad04')
  }

  openTeletrabajadorTest() {

    // Ir a la evaluación
    cy.contains("button", "Ir a la evaluación", { timeout: 20000 })
      .should("be.visible")
      .click()

    // Primer botón Iniciar (pantalla Teletrabajo)
    cy.contains("button", "Iniciar", { timeout: 20000 })
      .should("be.visible")
      .click()

    // Esperar que aparezca el popup
    cy.contains("¿Está listo para iniciar la evaluación?", { timeout: 20000 })
      .should("be.visible")
      .parents('[role="dialog"]')
      .within(() => {
      
        // Segundo Iniciar (popup)
        cy.contains("button", "Iniciar")
          .click({ force: true })
      })
  }

}

export default new DashboardPage()
