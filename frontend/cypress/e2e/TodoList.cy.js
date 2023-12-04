describe("TodoList Test", () => {
  beforeEach(() => {
    cy.visit("/todolist");
  });
  it("TodoList input", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.location("pathname").should("equal", "/");
    cy.wait(3000);
    cy.get('[data-test="nav-todolist"]').click();
    cy.location("pathname").should("equal", "/todolist");
  });
  it("Todo with input", () => {
    cy.get('[data-test="input-todo"]').type("Hello World");
    cy.get('[data-test="btn-add-todo"]').click();
    cy.get('[data-test="todo-list"]').should("contain", "Hello World");
  });
  it.only("Todo with input and delete", () => {
    cy.get('[data-test="todo-list"]').should("have.length", 0);
    cy.get('[data-test="input-todo"]').type("Hello World 0");
    cy.get('[data-test="btn-add-todo"]').click();
    cy.get('[data-test="input-todo"]').type("Hello World 1");
    cy.get('[data-test="btn-add-todo"]').click();
    cy.get('[data-test="todo-list"]').should("contain", "Hello World");
    cy.get('[data-test="todo-list"]').should("have.length", 2);
    cy.get('[data-test="todo-list"]').its(1).should("contain", "Hello World 1");
    cy.get('[data-test="btn-delete-todo-0"]').click();
    cy.get('[data-test="btn-delete-todo-0"]').click();
    cy.get('[data-test="todo-list"]').should("not.exist");
    cy.get('[data-test="todo-list"]').should("have.length", 0);
  });
  it("intercept", () => {
    cy.intercept("POST", "/api/todolist", {
      fixture: "example.json",
    });
    cy.get('[data-test="input-todo-click-button"]').click();
  });
});
