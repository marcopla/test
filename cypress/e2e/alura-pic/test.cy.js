describe(``, () => {
  data = require('../../support/data.json');
  beforeEach(() => {
    crypto.visit(url);
  });
  it('Teste Pix', () => {
    cy.get('#order');
  });
});
