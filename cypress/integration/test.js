describe('Kitchen Sink', function () {
    it('.should() - assert that <title> is correct', function () {
      // https://on.cypress.io/visit
      cy.visit('http://localhost:3000/')
  
      cy.get('input').type('Hello, World')
      cy.get('#three').click()   
      cy.get('input').clear()
      cy.get('input').type('Hello, neelam')
      cy.get('#three').click()  
      cy.get('input').clear()
      cy.get('input').type('Hello, abhinav')
      cy.get('#three').click()  

      cy.get('#one').click()   
      cy.get('#one').click()   
      cy.get('#one').click()   
      cy.get('#one').click()   
      cy.get('#one').click()   
      
    })
})