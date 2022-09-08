describe('Login e registro de usuários alura pic', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com');
  });

  it('verifica mensagens validacao', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
  });

  it('verifica mensagens de email invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('Marco');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  });

  it('verifica mensagens de password com menos de 8 caracteres', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  });

  it('verifica se nome do usuário está em minúsculo', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('A');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
  });

  it('fazer login do usuário válido', () => {
    cy.login('flavio', '123');
    cy.contains('a', '(Logout)').should('be.visible');
  });

  it('fazer login do usuário inválido', () => {
    cy.login('jaqueline', '1234');
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password');
    });
  });

  it('caso teste', () => {
    cy.get('input[formcontrolname="userName"]').type('jaqueline');
    cy.get('input[formcontrolname="password"]').type('1234');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password');
    });
  });

  it('fazer login do usuário inválido', () => {
    cy.get('input[formcontrolname="userName"]').type('jaqueline');
    cy.get('input[formcontrolname="password"]').type('1234');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password');
    });
  });
});
