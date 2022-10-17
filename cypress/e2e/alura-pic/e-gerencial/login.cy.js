describe('teste e-gerencial', () => {
  beforeEach(() => {
    cy.visit('https://www.alura.com.br');
  });

  it('teste de login e-gerencial', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('login');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome').should(
      'contain',
      'Login efetuado com sucesso',
    );
  });
  it('teste de login IB', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('login');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome').should(
      'contain',
      'Login efetuado com sucesso',
    );
  });
});
