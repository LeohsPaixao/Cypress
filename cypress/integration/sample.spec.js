describe("MyThirdTest", () => {
    it("Does not no much", () => {
        expect(true).to.equal(true)
    });

    it.only("Visits the Kitchen Sink", () => {
        cy.visit('https://example.cypress.io')

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
    })


})