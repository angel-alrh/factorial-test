// factorial.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

context('Factorial', () => {
    beforeEach(() => {
      cy.visit('http://qainterview.pythonanywhere.com/')
    })
  

  
    it('Should calculate the factorial if a the factorial is valid', () => {
        cy.get('#number').type("5")
        cy.get('#getFactorial').click()
        cy.get('#resultDiv').should('contain','The factorial of 5 is: 120')   

     });

    it('Should show an error when trying to calculate a factorial without introducing a value', () => {

        cy.get('#getFactorial').click()
        cy.get('#number').should('have.attr','style', 'border: 2px solid red;')
        cy.get('#resultDiv').should('have.text', 'Please enter an integer')

     })
})