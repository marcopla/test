describe('buscar fotos e dados', () => {
  it('buscar fotos do flávio', () => {
    cy.request({
      method: 'GET',
      url: 'https://api',
    });
  });
});
