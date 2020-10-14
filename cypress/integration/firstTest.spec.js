/// <reference types="cypress" />

describe('My first test suite', () => {
    // Case 1 Inline form
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Jane Doe"]')
            .click()
            .type("Septianda Reza Maulana")

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Email"]')
            .click()
            .type("septiandareza07@gmail.com")

        cy.contains('nb-card', 'Inline form')
            .find('.custom-checkbox')
            .click()

        cy.contains('nb-card', 'Inline form')
            .find('[type="submit"]')
            .click()
        
        cy.url().should('include', 'forms/layouts')
    })
})