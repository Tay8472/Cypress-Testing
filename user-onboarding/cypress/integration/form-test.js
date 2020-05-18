describe("form test", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("inputs", () => {
    cy.get("#name")
      .type("Taylor Pepler-Madsen")
      .should("have.value", "Taylor Pepler-Madsen");
    cy.get("#email")
      .type("fakeEmail@email.fake")
      .should("have.value", "fakeEmail@email.fake");
    cy.get("#password").type("bananafart");
    cy.get("#terms").check().should("be.checked");
    cy.get(".entireForm").submit();
  });
});
