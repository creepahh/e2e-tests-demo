Cypress.Commands.add('loginParabank', (username, password) => {
  cy.visit('http://parabank.parasoft.com/parabank/index.htm');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
  cy.contains('Accounts Overview').should('be.visible');
});
