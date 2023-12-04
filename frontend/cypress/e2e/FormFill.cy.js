describe("Form Fill test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Predictor form", () => {
    const keysArray = [
      "sex",
      "age",
      "height",
      "weight",
      "waistline",
      "sight_left",
      "sight_right",
      "SBP",
      "DBP",
      "BLDS",
      "tot_chole",
      "HDL_chole",
      "LDL_chole",
      "triglyceride",
      "hemoglobin",
      "serum_creatinine",
      "SGOT_AST",
      "SGOT_ALT",
      "gamma_GTP",
    ];

    cy.contains(/Smoke Drink Predictor Details/i);
    keysArray.forEach((key) => {
      cy.get(`[data-test="input-box-${key}"]`).type("1");
    });
    cy.contains("Predictions failed to work.").should("not.exist");
    cy.get('[data-test="predict-button"]').click();
    cy.contains(/Predictions failed to work./i).should("exist");
    cy.wait(2000);
    cy.contains("Predictions failed to work.").should("not.exist");
  });
});
