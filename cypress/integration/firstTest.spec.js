/// <reference types="cypress" />

describe('My first test suite', () => {
    // Case 1 Inline form
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click() // containst luarnya
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

    // Case 2 Using the Grid
    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click() // containst luarnya
        cy.contains('Form Layouts').click()

        //contains disini harus sama besar kecilnya huruf
        cy.contains('nb-card', 'Using the Grid') 
            .find('[data-cy="imputEmail1"]')
            .click()
            .type("septiandareza07@gmail.com")

        cy.get('#inputPassword2')
            .click()
            .type("septianda")

        cy.contains('nb-card', 'Using the Grid')
            // Pada bagian ini memilih salah satu option dimana terletak pada radios    
            .contains("Option 2") 
            .parent('nb-radio')
            .find('.inner-circle')
            .click()

        cy.contains('nb-card', 'Using the Grid')
            .find('[type="submit"]')
            .click()

        cy.url().should('include', 'forms/layout')
    })

    // Case 3 Basic Form
    it('third test', () => {
        cy.visit('/')
        cy.contains('Forms').click() // containst luarnya
        cy.contains('Form Layouts').click()

        //contains disini harus sama besar kecilnya huruf
        cy.contains('nb-card', 'Basic form')
            .find('[placeholder="Email"]')
            .click()
            .type("septiandareza07@gmail.com")

        cy.get('#exampleInputPassword1')
            .click()
            .type("septianda12")

        cy.contains('nb-card', 'Basic form')
            .find('.custom-checkbox')
            .click()

        cy.contains('nb-card', 'Basic form')
            .find('[type="submit"]')
            .click()

        cy.url().should('include', 'forms/layout')
    })

    // Case 4 Form without labels
    it('four test', () => {
        cy.visit('/')
        cy.contains('Forms').click() // contaist luarnya
        cy.contains('Form Layouts').click()

        // constains disini harus sama besar kecilnya huruf
        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Recipients"]')
            .click()
            .type("septiandareza07@gmail.com")

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Subject"]')
            .click()
            .type("Tugas PPL menggunakan testing cypress")

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Message"]')
            .click()
            .type("Silahkan install cypress terlebih dahulu")

        cy.contains('nb-card', 'Form without labels')
            .find('[type="submit"]')
            .click()

        cy.url().should('include', 'forms/layout')
    })
})