/// <reference types= "Cypress" />

describe("MyThirdTest", () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    });

    it("Visits the Kitchen Sink[Type]", () => {

        cy.contains('type')
        .click();

        cy.url()
        .should("include", "/commands/actions");

        cy.get('div .action-email')
        .type('examplemail@email.com', {delay: 100}) // adiciona 0.1 seg para finalizar o test
        .should('have.value', 'examplemail@email.com')

        cy.get('div .action-disabled')
        .type('disabled error checking', {force: true})
        .should("have.value", "disabled error checking");
    });

    it("Visits the Kitchen Sink[Get]", () => {

        cy.contains('get')
        .click();

        cy.get('div.well #query-btn').should('contain', 'Button')

        cy.get('div.well .query-btn')
        .click({multiple: true})

        cy.get('[data-test-id="test-example"]')
        .should('have.class', 'example')
        
        cy.get('[data-test-id="test-example"]')
        .invoke('attr', 'data-test-id')
        .should('equal', 'test-example')
    });

});