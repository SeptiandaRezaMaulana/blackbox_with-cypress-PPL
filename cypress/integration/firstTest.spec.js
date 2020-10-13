/// <reference types="cypress" />

describe('My first test suite', () => {
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click()
    })
})