const { default: Header } = require("@/components/Header");

describe("Header Test", () => {
  it("Checking Header", () => {
    cy.mount(<Header />);
    cy.get("[data-test=predictor-header]").should("exist");
    cy.get("[data-test=nav-home]").should("exist");
    cy.get("[data-test=nav-todolist]").should("exist");

    cy.get('[data-test="predictor-header"]').contains(/Smoke Drink predictor/i);
    cy.get('[data-test="predictor-subheader"]').should(
      "contain",
      /smoke drink predictor/i
    );
  });
});
