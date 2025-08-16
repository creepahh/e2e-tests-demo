describe('Transfer Funds - Parabank', () => {
  const baseUrl = 'http://parabank.parasoft.com';

  beforeEach(() => {
    cy.loginParabank('kri', 'demo');  
  });

  it('transfers funds successfully between accounts', () => {
    cy.contains('Transfer Funds').click();

    cy.get('input[name="amount"]').type('100');
    cy.get('input[type="submit"]').click();

    cy.contains('Transfer Complete!').should('be.visible'); // Assert success
  });
});
