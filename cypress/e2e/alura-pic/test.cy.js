describe(``, () => {
  data = require('../../support/data.json');
  beforeEach(() => {
    cy.visit(url);
  });
  it('Teste Pix', () => {
    cy.get('#order');
  });
  it('Teste Pix out', () => {
    cy.get('#order');
  });
});
