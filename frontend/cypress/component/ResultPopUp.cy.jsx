const { default: SmokerDrinker } = require("@/components/SmokerDrinker");
const data = {
  Testing_models: {
    smoking: {
      result: "Former smoker",
      probability: "0.5",
    },
    drinking: {
      result: "Drinks heavily",
      probability: "0.5",
    },
  },
};

describe("ResultPopUp.cy.jsx", () => {
  it("Checking Popup", () => {
    cy.mount(<SmokerDrinker smokerDrinkerResult={[data, data]} />);
    cy.get("[data-test=smoker-drinker-popup]").should("exist");
    cy.get("[data-test=smoker-drinker-popup]").within(() => {
      cy.get("[data-test^=smoker-drinker-items]").should("exist");
      cy.get("[data-test^=smoker-drinker-subitems]").should("exist");
    });
    cy.get("[data-test=smoker-drinker-popup]").should("have.length", 1);
    cy.get("[data-test^=smoker-drinker-items]").should("have.length", 2);
    cy.get("[data-test^=smoker-drinker-subitems]").should("have.length", 4);
  });
});
