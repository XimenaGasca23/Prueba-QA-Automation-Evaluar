
class TestTeletrabajadorPage {

  responderPreguntas(){

    cy.get('[role="radio"][aria-checked="false"]', { timeout: 10000 }) //Este es para selecionar una opcion de las preguntas
      .first()
      .click({ force: true })

  }

  //value="TEL11_Q2_A3"

  siguiente(){

    cy.get('button') //Esto es para dar continuar en cada pregunta de la 1 a la 10
      .last()
      .should('be.visible')
      .click({ force: true })

  }

  finalizar(){

    cy.contains(/Finalizar/i) //Esto es para finalizar el llenado del formulario donde la ultima opcion es finalizar
      .should('be.visible')
      .click()

  }



  validarExperiencia(){

          /*cy.contains('button', '10', { timeout: 10000 })
            .should('be.visible')
            .click(¨*/

          //cy.get('[role="radio"][value=10]', { timeout: 10000 })
            //.first()
            //.check()

          
          //cy.get('#number_9b78e933-d98d-4fde-b96e-9654e61015a2_10')
            //.should('be.disabled')
            //.check({ force: true })

                  /*<input id="number_9b78e933-d98d-4fde-b96e-9654e61015a2_10" 
                  type="radio" 
                  required="" 
                  name="linear_scale_9b78e933-d98d-4fde-b96e-9654e61015a2" 
                  value="10"> */

          //cy.get('label').contains(/^10$/).click()

          //cy.contains('label', '10').click()

          //cy.get('input[type="radio"][id$="_10"]', { timeout: 10000 })
            //.check({ force: true })

          /*cy.contains("Esto nos ayuda a mejorar tu experiencia en futuras postulaciones", { timeout: 20000 })
            .should("be.visible")
            .parents('[role="dialog"]')
            .within(() => {
            
              // Segundo Iniciar (popup)
              cy.get('[role="radio"][value=10]')
                .check({ force: true })
            })*/

          //cy.contains('button', /^10$/).click()

          cy.get('input[type="radio"], button,[id$="_10"]')
            //.contains(/^10$/)
            .last()
            .check({ force:true })

          cy.contains('button','Enviar')
            .last()
            .should('be.visible')
            .click({ force: true })
 
  }

  validarFinalizacion(){

    cy.contains("button", "Finalizar", { timeout: 20000 })
      .should("be.visible")
      .click()

  }

}

export default new TestTeletrabajadorPage()
