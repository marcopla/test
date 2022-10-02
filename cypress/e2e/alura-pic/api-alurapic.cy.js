describe('buscar fotos e dados', () => {
  it('buscar fotos do flávio', () => {
    cy.request({
      method: 'GET',
      url: 'https://api-alurapic.herokuapp.com/user/login',
      body: cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.propery('id');
      expect(res.body.id).to.be.equal(1);
    });
  });
});
