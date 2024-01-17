describe("Visit the homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://the-rosary-api.vercel.app/v1/today", {
      statusCode: 200,
      fixture: "dailyPrayer.json",
    })
    cy.visit("http://localhost:3000");
  });

  it("should display homepage with title, prayer link and select prayer button", () => {
    cy.get("h1").contains("Welcome to Daily Prayer App").should("be.visible");
    cy.get("button").contains("Select Prayer").should("be.visible");
    cy.get("a").contains("Click here to pray").should("be.visible");
    // cy.get('.card').should('have.length', 3);
    // cy.get('.card').first().contains('Christie')
    // cy.get('.card').first().contains("12/29")
    // cy.get('.card').first().contains("7:00")
    // cy.get('.card').first().get(".number").contains("12")
    // cy.get('.card').last().get(".number").contains("4")
    // cy.get('.card').last().contains("Pam")
    // cy.get('.card').last().contains("1/21")
    // cy.get('.card').last().contains("6:00")
  })
})


// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })