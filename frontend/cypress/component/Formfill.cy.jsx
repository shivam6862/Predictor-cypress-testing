const { default: Formfill } = require("@/components/Formfill");

describe("Formfill Test", () => {
  it("Checking Formfill", () => {
    cy.mount(<Formfill />);
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

    cy.get("[data-test=formfill-header]").should("exist");
    keysArray.forEach((key) => {
      cy.get(`[data-test="input-box-${key}"]`).type("1");
    });

    cy.contains("Predictions failed to work.").should("not.exist");
  });
});
