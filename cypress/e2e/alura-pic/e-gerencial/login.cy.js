describe('', () => {
  beforeEach(() => {
    cy.visit();
  });
  cy.intercept('POST', 'https://alura-fotos.herokuapp.com/user/login', {
    statusCode: 400
} ).as('stubPost')
  })
  it('', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'))
    cy.wait('@stubPost')
    cy.contains('a', '(Logout)').should('be.visible');
  });
});
