describe('Transfer Funds - Parabank', () => {
  const baseUrl = 'http://parabank.parasoft.com';

  beforeEach(() => {
    cy.visit(`${baseUrl}/parabank/index.htm`);

    // Login
    cy.get('input[name="username"]').type('john');
    cy.get('input[name="password"]').type('demo');
    cy.get('input[type="submit"]').click();

    // Ensure login success
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('transfers funds successfully between accounts', () => {
    // Navigate to the Transfer Funds page before filling the form
    cy.contains('Transfer Funds').click();

    // Now fill the form inputs
    cy.get('input[name="amount"]').type('100');

    // Submit the transfer
    cy.get('input[type="submit"]').click();

    // Assert success message
    cy.contains('Transfer Complete!').should('be.visible');
  });
});
