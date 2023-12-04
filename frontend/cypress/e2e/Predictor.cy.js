describe("Predictor test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  const data = {
    sex: "1",
    age: "25",
    height: "175",
    weight: "70",
    waistline: "32",
    sight_left: "20",
    sight_right: "20",
    SBP: "120",
    DBP: "80",
    BLDS: "130",
    tot_chole: "200",
    HDL_chole: "50",
    LDL_chole: "120",
    triglyceride: "80",
    hemoglobin: "14",
    serum_creatinine: "0.9",
    SGOT_AST: "25",
    SGOT_ALT: "30",
    gamma_GTP: "15",
  };

  it("Contains correct header text", () => {
    cy.get('[data-test="predictor-header"]').contains(/Smoke Drink predictor/i);
    cy.get('[data-test="predictor-subheader"]').should(
      "contain",
      /smoke drink predictor/i
    );
  });
  it("Checking Input box", () => {
    Object.entries(data).forEach(([key, value]) => {
      cy.get(`[data-test="input-box-${key}"]`).type(value);
    });
    cy.contains("Predict").should("be.visible");
    cy.get('[data-test="predict-button"]')
      .click()
      .contains("Loading...")
      .should("be.visible");
    cy.contains("Predict").should("be.visible");
    cy.wait(5000);
    cy.get('[data-test="smoker-drinker-popup"]').should("be.visible");
    cy.get('[data-test="smoker-drinker-popup"]').should("exist");
    cy.get('[data-test="smoker-drinker-popup"]').within(() => {
      cy.get('[data-test^="smoker-drinker-items"]').should("exist");
      cy.get('[data-test^="smoker-drinker-subitems"]').should("exist");
      cy.get('[data-test^="smoker-drinker-subitems"]').should(
        "contain",
        "Result"
      );
      cy.get('[data-test^="smoker-drinker-subitems"]').should(
        "contain",
        "Probability"
      );
    });
    cy.get('[data-test="smoker-drinker-popup"]').should("have.length", 1);
    cy.get('[data-test^="smoker-drinker-items"]').should("have.length", 2);
    cy.get('[data-test^="smoker-drinker-subitems"]').should("have.length", 4);
  });
});
