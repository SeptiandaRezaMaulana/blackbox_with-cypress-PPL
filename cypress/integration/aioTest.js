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

        // Case 2 Using the Grid
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

        // Case 3 Basic Form
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

        // Case 4 Form without labels
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

        // Case 5 Block Form
        // constains disini harus sama besar kecilnya huruf
        cy.contains('nb-card', 'Block form')
            .find('[placeholder="First Name"]')
            .click()
            .type("Septianda Reza")
        
        cy.contains('nb-card', 'Block form')
            .find('[placeholder="Last Name"]')
            .click()
            .type("Maulana")
        
        cy.get('#inputEmail')
            .click()
            .type("septiandareza07@gmail.com")

        cy.get('#inputWebsite')
            .click()
            .type("septiandareza15.blogspot.com")

        // Case 6 Horizontal form
        cy.get('#inputEmail3')
            .click()
            .type("septiandareza07@gmail.com")
        
        cy.get('#inputPassword3')
            .click()
            .type("septianda12")

        cy.contains('nb-card', 'Horizontal form')
            .find('.custom-checkbox')
            .click()
    })
})