
/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import RegistroPage from "../pages/RegistroPage"

describe("Autoregistro candidato", () => { //Esto es el Escenario 1: Autoregistro del Candidato

  it("Debe registrar un candidato nuevo", () => {

    const email = faker.internet.email() //Esto sirve para que no se duplique los correos

    RegistroPage.visit() //Esto es para ingresar el formulario de registro

    RegistroPage.fillForm(  //Esto es para el diligenciamiento del formulario
      faker.person.firstName(),
      faker.person.lastName(),
      email
    )

    cy.intercept("POST", "**/candidate/**").as("registro") //Esto es para interceptar API del registro

    RegistroPage.submit() //Esto es para subir la informacion y terminar el registro

    cy.contains("Evaluaciones", { timeout: 20000 })  //Esto busca el texto Evaluaciones en el dashboard
      .should("be.visible")

    //cy.contains("Teletrabajo")
      //.should("be.visible")


    //cy.waitForDashboard()

  })

})
