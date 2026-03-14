
/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import RegistroPage from "../pages/RegistroPage"
import DashboardPage from "../pages/DashboardPage"
import TestPage from "../pages/TestTeletrabajadorPage"

describe("Completar Test Teletrabajador", () => { //Esto es el Escenario 2: Completar el Test "Teletrabajador"
  
  /*beforeEach(() => { //Este es el proceso para iniciar sesion pero no fue posible
    cy.loginCandidate()
  })*/

  it("Debe responder todas las preguntas", () => {

    //DashboardPage.visit() //Esto es para ingresar al proceso de evaluacion pero no fue posible

    //Se hace ingreso nuevamente porque no fue posible en ingreso de sesion con solo el correo y tampo desde el link donde queda el registro 
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



    DashboardPage.openTeletrabajadorTest() //Esto es para ingresar al test confirmando el ingreso


    Cypress._.times(22, () => { // Esto es para un contador de tiempo sin importar la cantidad de preguntas, puede ser 1 o pueden ser 20, lo que se alcance a responder en este tiempo, para este caso las 11 preguntas se responden en 25

      TestPage.responderPreguntas()

      cy.get('body').then(body => {

        if(body.text().includes("Finalizar")){ //Esto permite que el script no dependa del número exacto de preguntas y valide si esta el boton de finalizar o si no continue con la siguiente pregunta
          TestPage.finalizar()
        } else {
          TestPage.siguiente()
        }

      })
    })

    //TestPage.validarExperiencia() //Esto es para responder la última pregunta de como le parecio el proceso de evaluación

    //TestPage.validarFinalizacion()

  })
})
describe("Test Teletrabajador", () => {

})
