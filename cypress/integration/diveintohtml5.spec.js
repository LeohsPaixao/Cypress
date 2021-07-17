describe("Dive Into HTML5", () => {
    beforeEach(() => cy.visit("https://diveintohtml5.com.br/"));

    it("Dive into HTML5", () => {
        cy.get("hgroup h1").should("contain", "Dive Into HTML5");
    })

    it("click on Comunidade", () => {
        cy.get("hgroup h3 a").click()
    })

    it("check text", () => {
        cy.get("p.f a").should("contain", "HTML5");
    })

    it("is there any summary around here", () => {
        cy.get("h3").should("contain", "Sumário")
    })

    it("check the name the first link", () => {
        cy.get("ol li span.title").should("contain", "Introdução: Cinco Coisas Que Você Deveria Saber Sobre");
    })

    /*
    it("click on second link", () => {
        cy.get("ol li span.title").click({multiple: true}) //SecurityError
    })
    */

    it("check paragraphs", () => {
        cy.get("p.c span.u").should("contain", "—")
    })

    it("click on link Mark Pilgrim", () => {
        cy.get("p.c a").click({multiple: true})
    })

    it("fills one the text input fields", () => {
        cy.get("form div input[name=q]").type("HMTL5");
    })

    /*
    it("click on Search", () => {
        cy.get("form div input[name=sa]").click() //Permition Denied
    })
    */

})