describe("Form Fill test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Predictor form", () => {
    cy.contains("Please fill all the fields").should("not.exist");
    cy.get('[data-test="predict-button"]').click();
    cy.wait(500);
    cy.contains(/Please fill all the fields/i).should("exist");
    cy.wait(2000);
    cy.contains("Please fill all the fields").should("not.exist");
  });
});
