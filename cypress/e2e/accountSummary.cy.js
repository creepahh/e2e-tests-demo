describe('Account Summary - Parabank', () => {
  const baseUrl = 'http://parabank.parasoft.com';

  beforeEach(() => {
    // Visit login page
    cy.visit(`${baseUrl}/parabank/index.htm`);

    // Log in with valid credentials
    cy.get('input[name="username"]').type('kri');
    cy.get('input[name="password"]').type('demo');
    cy.get('input[type="submit"]').click();

    // Assert login success
    cy.contains('Accounts Overview').should('be.visible');
  });

  it('displays account summary with balances', () => {
    // Click on "Accounts Overview"
    cy.contains('Accounts Overview').click();

    // Assert account table is visible
    cy.get('#accountTable').should('be.visible');

    // Check that at least one account row exists
    cy.get('#accountTable tbody tr').should('have.length.greaterThan', 0);

    
    cy.get('#accountTable tbody tr').each(($row) => {
      const accountNumber = $row.find('td a').text();
      const balance = $row.find('td').eq(1).text();
      cy.log(`Account: ${accountNumber}, Balance: ${balance}`); //log acc no and balance
    });
  });

  it('navigates to account details from summary', () => {
    cy.contains('Accounts Overview').click();

   
    cy.get('#accountTable tbody tr td a').first().click();//click on first acc link 

    
    cy.contains('Account Details').should('be.visible'); //transaction details visible
    cy.get('#transactionTable').should('exist');
  });
});
