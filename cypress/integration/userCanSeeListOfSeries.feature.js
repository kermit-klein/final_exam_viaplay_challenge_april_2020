describe("User can see list of series", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:list_of_series.json",
    });
    cy.visit("http://localhost:3001/");
  });

  it("series visible", () => {
    cy.get(".display-show").should("be.visible");
  });
});
