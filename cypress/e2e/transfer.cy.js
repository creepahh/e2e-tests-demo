
cy.visit('http://parabank.parasoft.com');
cy.get('input[name="username"]').type('john');
cy.get('input[name="password"]').type('demo');
cy.get('input[type="submit"]').click();
cy.contains('Transfer Funds').click();
cy.get('input[name="amount"]').type('100');
cy.get('input[type="submit"]').click();
cy.contains('Transfer Complete').should('exist');
