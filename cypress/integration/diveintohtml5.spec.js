describe("Dive Into HTML5", () => {
    beforeEach(() => cy.visit("https://diveintohtml5.com.br/"));

    it("Dive into HTML5", () => {
        cy.get("hgroup h1").should("contain", "Dive Into HTML5");
    })

    it("click on Comunidade", () => {
        cy.get("hgroup h3 a").click()
    })

    it("check text", () => {
        cy.get("p abbr").should("contain", "HTML5")
    })
})