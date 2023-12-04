describe("Predictor test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Contains correct header text", () => {
    cy.get('[data-test="predictor-header"]').contains(/Smoke Drink predictor/i);
    cy.get('[data-test="predictor-subheader"]').should(
      "contain",
      /smoke drink predictor/i
    );
  });
  it("Checking Input box", () => {
    cy.contains("Predict").should("be.visible");
    cy.get('[data-test="predict-button"]')
      .click()
      .contains("Loading...")
      .should("be.visible");
    cy.contains("Predict").should("be.visible");
  });
});
