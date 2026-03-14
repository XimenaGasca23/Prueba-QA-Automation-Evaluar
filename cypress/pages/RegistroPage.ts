
class RegistroPage {

  visit() {
    cy.visit('/auth/autoregister/controlled/63bed1d4-2e0f-4899-a424-0015ab7dad04')
  }

  fillForm(nombre:string, apellido:string, email:string) {

    cy.get('input[name="firstName"]:visible', {timeout:10000}) //Aqui se diligencia el nombre en el formulario
      .should("be.visible")
      .type(nombre) 

    cy.get('input[name="lastName"]:visible') //Aqui se diligencia el apellido en el formulario
      .should("be.visible")
      .type(apellido) 

    cy.get('input[name="email"]:visible') //Aqui se diligencia el correo en el formulario
      .should("be.visible")
      .type(email)
      .should('have.value', email) //Esta es una validacion de que el input tenga el valor exrito

    cy.get('[role="combobox"]:visible') //Aqui se selecciona una Ubicacion del listado
      .first()
      .click()

    cy.get('[role="option"]')
      .should("be.visible")
      .first()
      .click()
  }

  submit() {

    cy.get('form:visible') //Esto es para usar solo el boton si esta visible o esperar a que este habilitado si todos los campos previos estan debidamente diligenciados
      .find('button[type="submit"]') 
      .should('be.enabled')
      .click()

  }

}

export default new RegistroPage()
