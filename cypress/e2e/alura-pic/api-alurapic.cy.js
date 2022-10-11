describe('buscar fotos e dados', () => {
  it('buscar fotos do flávio', () => {
    cy.request({
      method: 'GET',
      url: '/',
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.propery('description');
      expect(res.body[0].description).to.be.equal('Farol iluminado');
    });
  });
});
