const {
  default: Notification,
} = require("@/components/notification/Notification");
const { PiWarningCircleDuotone } = require("react-icons/pi");

const data = {
  id: "nflnfioryu8rgkjeweoh",
  type: "linear-gradient(94deg, #2D82B2 -6.52%, #329ABB 108.61%)",
  logo: <PiWarningCircleDuotone />,
  title: "Notification Test",
  message: "Checking Notification in test mode",
};

describe("Notification Test", () => {
  it("Checking Notification", () => {
    cy.mount(<Notification {...data} />);

    cy.wait(1000);

    cy.get("[data-test=notification]").should("exist");
    cy.get("[data-test=notification]").within(() => {
      cy.get("[data-test=notification-box]").should("exist");
      cy.get("[data-test=notification-logo]").should("exist");
      cy.get("[data-test=notification-content]").should("exist");
      cy.get("[data-test=notification-buttons]").should("exist");
      cy.get("[data-test=notification-progressbar]").should("exist");
    });

    cy.get("[data-test=notification-logo]").within(() => {
      cy.get("svg").should("exist");
      cy.get("svg").should("have.length", 1);
    });

    cy.get("[data-test=notification-content]").should("contain", data.title);
    cy.get("[data-test=notification-content]").should("contain", data.message);

    cy.get("[data-test=notification-buttons]").within(() => {
      cy.get("[data-test=notification-button]").should("exist");
      cy.get("[data-test=notification-button]").should("have.length", 1);
      cy.get("[data-test=notification-button]").within(() => {
        cy.get("svg").should("exist");
        cy.get("svg").should("have.length", 1);
      });
    });
    cy.get("[data-test=notification-progressbar]").should("have.css", "width");
    cy.get("[data-test=notification-button]").click();
  });
});
